import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import http from "node:http";

const expectedContext = process.argv[2];
assert.ok(
  expectedContext === "production" || expectedContext === "deploy-preview",
  "Usage: node tests/runtime-marketing.mjs <production|deploy-preview>",
);

const port = 4300 + Math.floor(Math.random() * 500);
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
  cwd: new URL("..", import.meta.url),
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (chunk) => {
  output += chunk;
});
server.stderr.on("data", (chunk) => {
  output += chunk;
});

function request(path, host) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        path,
        headers: { Host: host },
      },
      (response) => {
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => resolve({ response, body }));
      },
    );
    req.on("error", reject);
    req.end();
  });
}

async function waitUntilReady() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before becoming ready.\n${output}`);
    }
    try {
      await request("/", "glpglowups.com");
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }
  throw new Error(`Timed out waiting for Next.js.\n${output}`);
}

try {
  await waitUntilReady();

  const preview = await request("/", "deploy-preview-123--glp-glowup-website.netlify.app");
  assert.equal(preview.response.statusCode, 200, "Deploy Preview host must not redirect");
  assert.match(preview.body, /https:\/\/glpglowups\.com/);

  if (expectedContext === "deploy-preview") {
    assert.equal(preview.response.headers["x-robots-tag"], "noindex, nofollow");
    assert.match(preview.body, /<meta name="robots" content="noindex, nofollow"/);
  } else {
    assert.equal(preview.response.headers["x-robots-tag"], undefined);
    assert.doesNotMatch(preview.body, /<meta name="robots" content="[^"]*noindex/);
  }

  const productionAlias = await request("/about", "glp-glowup-website.netlify.app");
  assert.equal(productionAlias.response.statusCode, 308);
  assert.equal(productionAlias.response.headers.location, "https://glpglowups.com/about");

  const retiredRoute = await request("/fit-form", "glpglowups.com");
  assert.equal(retiredRoute.response.statusCode, 404);
} finally {
  server.kill("SIGTERM");
  await new Promise((resolve) => {
    server.once("exit", resolve);
    setTimeout(resolve, 2_000);
  });
}

console.log(`Runtime marketing checks passed for ${expectedContext}.`);
