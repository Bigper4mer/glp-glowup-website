"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Button, ButtonLink } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { Accordion } from "@/components/ui/accordion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/AU6V7.jpg"
              alt="Professional coaching environment"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-brand-light/10 backdrop-blur-[2px]" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-md leading-tight"
            >
              Your Transformation <br className="hidden md:block" />
              Begins Here.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
            >
              A premium GLP-1 transformation experience.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="mailto:drroccogervasi@gmail.com" size="lg">Start Your Transformation</ButtonLink>
              <ButtonLink href="#programs" size="lg" variant="secondary" className="bg-white/10 text-white border-white/50 hover:bg-white/20">
                Explore the Program
              </ButtonLink>
            </motion.div>
          </motion.div>
        </section>

        {/* SUMMARY SECTION */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-dark mb-6 leading-tight">
                This is more than weight loss. <br className="hidden md:block" />
                It’s a guided <span className="text-brand-accent italic">glow-up.</span>
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                GLP GlowUp is designed for people who want more than a lighter number on the scale. It is a premium support system built to help you lose fat while protecting strength, lean mass, consistency, and confidence along the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* THE HIDDEN CHALLENGE */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold text-brand-dark mb-6">
                  Losing weight is not the same as transforming your body.
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-6 text-lg text-brand-muted">
                  <p>
                    GLP-1 medications can help reduce body fat, but without the right strategy, they can also accelerate the loss of lean muscle—the very tissue that protects your strength, metabolism, energy, and long-term results.
                  </p>
                  <p>
                    When muscle is lost, metabolism slows. Strength declines. Confidence fades. And weight regain becomes more likely. That is where most programs stop.
                  </p>
                  <p className="font-semibold text-brand-dark text-xl">
                    We don't.
                  </p>
                  <p>
                    Our Premium GLP-1 Transformation Experience combines research-based strategic strength training, personalized nutrition guidance, and ongoing accountability to help you lose fat while protecting the muscle that drives your metabolism.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/Pic1.png"
                  alt="Transformation strategy"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPECTATION GRID (What to Expect) */}
        <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">What to Expect</h2>
              <p className="text-xl text-brand-muted">The pillars of your GLP GlowUp.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard
                title="Structured Exercise Plans"
                description="Customized movement and training guidance that respects your body's current capabilities while pushing you towards your goals safely."
                imageSrc="/images/AU6V7.jpg"
                imageAlt="Exercise Planning"
              />
              <FeatureCard
                title="Weekly Accountability"
                description="Consistent check-ins and progress tracking to ensure you never feel lost or unsupported during your transformation."
                imageSrc="/images/Pic1.png"
                imageAlt="Accountability"
              />
              <FeatureCard
                title="Tailored Support"
                description="Guidance shaped around your body, limitations, and lifestyle. We adapt the plan to fit your life, not the other way around."
                imageSrc="/images/Professional headshots with warm expressions.png"
                imageAlt="Tailored Support"
              />
              <FeatureCard
                title="Real-World Systems"
                description="Practical strategies that fit into daily life, building sustainable habits that outlast the initial weight loss phase."
                imageSrc="/images/AU6V7.jpg"
                imageAlt="Real-World Systems"
              />
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-24 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-white">Who GLP GlowUp is For</h2>
              <p className="text-xl text-white/70">This program is designed specifically for individuals who are:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                "Using GLP-1s and want to protect lean mass and metabolic health.",
                "Busy professionals who need clear structure, not more noise and confusion.",
                "Ready for sustainable, life-long transformation, not a temporary fix.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10"
                >
                  <CheckCircle2 className="h-10 w-10 text-brand-accent mb-6" />
                  <p className="text-lg leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES / PRICING */}
        <section id="programs" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Package Comparison</h2>
              <p className="text-xl text-brand-muted">Find the level of support that fits your goals.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Foundation */}
              <div className="bg-brand-light rounded-3xl p-8 border border-brand-muted/10 shadow-sm flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">Foundation</h3>
                <p className="text-brand-muted mb-6 h-12">Structure and expert guidance with minimal appointments.</p>
                <div className="text-4xl font-bold text-brand-dark mb-8">$649<span className="text-lg font-normal text-brand-muted">/mo</span></div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Remote Coaching",
                    "60-Minute Virtual Start Session",
                    "Customized Training Plan",
                    "Success Map Review",
                    "Fat Loss & Lean Muscle Strategy",
                    "Injury-Risk Reduction",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href="mailto:drroccogervasi@gmail.com" className="w-full" variant="secondary">Select Foundation</ButtonLink>
              </div>

              {/* Performance */}
              <div className="bg-white rounded-3xl p-8 border-2 border-brand-accent shadow-xl transform lg:-translate-y-4 flex flex-col relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">Performance</h3>
                <p className="text-brand-muted mb-6 h-12">Coaching plus hands-on correction to improve execution.</p>
                <div className="text-4xl font-bold text-brand-dark mb-8">$1,299<span className="text-lg font-normal text-brand-muted">/mo</span></div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Hybrid Coaching",
                    "60-Minute In-Person Onboarding",
                    "Body Composition Review",
                    "Functional Movement Assessment",
                    "Orthopedic Foundational Assessment",
                    "Customized Training Plan",
                    "Fat Loss & Lean Muscle Strategy",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href="mailto:drroccogervasi@gmail.com" className="w-full">Select Performance</ButtonLink>
              </div>

              {/* Concierge */}
              <div className="bg-brand-light rounded-3xl p-8 border border-brand-muted/10 shadow-sm flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-2">Concierge</h3>
                <p className="text-brand-muted mb-6 h-12">Highest-touch support and a fully guided experience.</p>
                <div className="text-4xl font-bold text-brand-dark mb-8">$1,899<span className="text-lg font-normal text-brand-muted">/mo</span></div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Elite Concierge Coaching",
                    "90-Minute Elite In-Person Onboarding",
                    "Advanced Functional Movement",
                    "Advanced Orthopedic Assessment",
                    "Customized Training Plan",
                    "Success Map Review",
                    "Fat Loss & Lean Muscle Strategy",
                    "Injury-Risk Reduction",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href="mailto:drroccogervasi@gmail.com" className="w-full" variant="secondary">Select Concierge</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-brand-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-muted/10">
              <Accordion 
                items={[
                  {
                    question: "Do I need to be local to participate?",
                    answer: "Our Foundation package is fully remote, meaning you can participate from anywhere. The Performance and Concierge packages include in-person onboarding and assessments, requiring you to be able to visit our location."
                  },
                  {
                    question: "Why is there a minimum commitment?",
                    answer: "Real, sustainable transformation takes time. A 3-month minimum allows us to properly assess your baseline, adapt your personalized plan as your body changes, and ensure you're building the habits needed for long-term success."
                  },
                  {
                    question: "I have a previous injury. Can I still join?",
                    answer: "Yes. Our Performance and Concierge packages specifically include functional movement and orthopedic assessments to ensure we design a training plan that works around your limitations and aids in injury-risk reduction."
                  },
                  {
                    question: "Do you prescribe GLP-1 medications?",
                    answer: "No. GLP GlowUp is a premium coaching and support system. We work with individuals who are already using or considering GLP-1 medications prescribed by their healthcare provider. We are not a medical helpline."
                  }
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <span className="font-serif text-3xl font-bold tracking-tight mb-6 block">GLP GlowUp</span>
              <p className="text-white/60 max-w-sm">
                A premium transformation experience protecting your strength, metabolism, and confidence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Home</a></li>
                <li><a href="#programs" className="text-white/60 hover:text-white transition-colors">Program Options</a></li>
                <li><a href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Contact</h4>
              <p className="text-white/60 mb-2">drroccogervasi@gmail.com</p>
              <ButtonLink href="mailto:drroccogervasi@gmail.com" size="sm" className="mt-4 bg-white/10 hover:bg-white/20 text-white border-none">
                Reach Out
              </ButtonLink>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} GLP GlowUp. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              {/* <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a> */}
              <a href="#" className="hover:text-white">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
