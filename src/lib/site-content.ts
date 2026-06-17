export const siteUrl = "https://glpglowups.com";
export const ctaEmail = "start@glpglowups.com";
export const contactEmail = "hello@glpglowups.com";

export type PackageTier = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  featured?: boolean;
  bestFor: string;
  summary: string[];
  details: {
    heading: string;
    body: string;
  }[];
  recoveryOptions?: string[];
  recoveryNote?: string;
};

export const hiddenChallengeParagraphs = [
  "Losing weight is not the same as transforming your body.",
  "GLP-1 medications can help reduce body fat, but without the right strategy, they can also accelerate the loss of lean muscle, the very tissue that protects your strength, metabolism, energy, and long-term results.",
  "When muscle is lost, metabolism slows. Strength declines. Confidence fades. And weight regain becomes more likely.",
  "That is where most programs stop.",
  "We do not.",
  "Our Premium GLP-1 Transformation Experience combines research-based strategic strength training, personalized nutrition guidance, and ongoing accountability to help you lose fat while protecting the muscle that drives your metabolism.",
  "And more importantly, we teach you how to sustain it.",
  "Because real transformation is not just about looking your best and weighing less. It is about becoming stronger, healthier, more confident, and equipped with the tools to maintain your results for life.",
];

export const solutionCards = [
  {
    title: "Strategic Strength Training",
    description:
      "Research-based resistance training designed to protect lean muscle, improve strength, and reduce injury risk while your body changes.",
    extendedDescription:
      "The goal is not random workouts. Your plan is built around progressive strength work, movement quality, recovery, and the specific demands of GLP-1 weight loss so fat loss does not come at the expense of strength.",
    imageSrc: "/images/AU6V7.webp",
    imageAlt: "Strategic strength training",
    imageClassName: "object-cover object-[center_22%]",
  },
  {
    title: "Personalized Nutrition Guidance",
    description:
      "Protein-first guidance, step targets, and realistic habits built around your schedule, appetite, lifestyle, and goals.",
    extendedDescription:
      "GLP-1 appetite changes can make under-eating protein and missing key nutrients easy. Your coaching rhythm keeps nutrition practical, measurable, and matched to your body composition goals.",
    imageSrc: "/images/Pic1.webp",
    imageAlt: "Personalized nutrition guidance",
    imageClassName: "object-cover object-[center_18%]",
  },
  {
    title: "Ongoing Accountability",
    description:
      "Weekly strategy touchpoints help catch setbacks early, make timely adjustments, and keep your progress moving.",
    extendedDescription:
      "Check-ins are used to review training, protein, steps, recovery, sleep, and real-life constraints so the plan can adapt before momentum drops or plateaus take over.",
    imageSrc: "/images/tailored_support.webp",
    imageAlt: "Ongoing accountability",
    imageClassName: "object-cover object-[center_20%]",
  },
  {
    title: "Sustainable Systems for Life",
    description:
      "Simple systems that help you maintain results after the initial weight loss phase instead of depending on motivation alone.",
    extendedDescription:
      "You learn how to build repeatable routines around training, food, recovery, and decision-making so your transformation has a structure that can last.",
    imageSrc: "/images/real_world_systems.webp",
    imageAlt: "Sustainable systems for life",
    imageClassName: "object-cover object-center",
  },
];

export const packageTiers: PackageTier[] = [
  {
    id: "foundation",
    title: "Foundation",
    subtitle: "Remote Coaching",
    price: "$649",
    bestFor:
      "Clients who want expert structure, accountability, and guidance with minimal appointments.",
    summary: [
      "60-minute virtual start session",
      "Training plan build and Success Map review",
      "Weekly asynchronous check-in and strategy coaching",
      "Email and message support",
      "Monthly progression strategy after month one",
    ],
    details: [
      {
        heading: "60-Minute Virtual Start Session",
        body:
          "Completed at the beginning of each month to review medical history, goals, habits, step targets, protein intake, sleep, lifestyle demands, and personal constraints. This establishes your customized Success Map.",
      },
      {
        heading: "Training Plan Build & Success Map Review",
        body:
          "A personalized program built around your unique needs to support fat loss, protect lean muscle, improve consistency, and reduce injury risk.",
      },
      {
        heading: "Weekly Asynchronous Check-In & Strategy Coaching",
        body:
          "Focused weekly reviews identify setbacks early, make timely adjustments, and keep progress moving forward.",
      },
      {
        heading: "Email & Message Support",
        body:
          "Ongoing support to answer questions, reinforce accountability, and guide implementation throughout the month.",
      },
      {
        heading: "Monthly Progression Strategy - Month 2 and Beyond",
        body:
          "Set bold new goals, refine the strategy, and step confidently into the next phase.",
      },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    subtitle: "Hybrid Coaching",
    price: "$1,299",
    featured: true,
    bestFor:
      "Clients who want expert coaching, hands-on correction, and higher support to protect lean muscle, improve technique, and reduce injury risk.",
    summary: [
      "60-minute in-person onboarding in month one",
      "Training plan build and Success Map review",
      "Two weekly asynchronous strategy touchpoints during non-session weeks",
      "Two 60-minute in-person sessions per month",
      "Higher-touch support messaging",
    ],
    details: [
      {
        heading: "60-Minute In-Person Onboarding - Month 1",
        body:
          "Includes medical history intake review, full-body functional assessment, and body composition review to identify movement limitations, pain triggers, asymmetries, and technique breakdowns. This creates an action plan with corrective strategies.",
      },
      {
        heading: "Training Plan Build & Success Map Review",
        body:
          "A personalized program for fat loss, lean muscle protection, strength, injury risk reduction, and sustainable progress.",
      },
      {
        heading: "Two Weekly Asynchronous Check-Ins & Strategy Coaching Touchpoints",
        body:
          "Provided during non-in-person session weeks to maintain accountability, catch setbacks early, and keep momentum moving.",
      },
      {
        heading: "Two 60-Minute In-Person Sessions Per Month",
        body:
          "Available at a gym, office, home, or agreed-upon location. Sessions focus on program execution, progression, expert movement analysis, and exercise technique optimization.",
      },
      {
        heading: "Higher-Touch Support Messaging",
        body:
          "Faster reply windows and proactive course corrections to help you stay supported between sessions.",
      },
      {
        heading: "Monthly Progression Strategy - Month 2 and Beyond",
        body:
          "Set new goals, refine the strategy, and step into the next phase with a clearer plan.",
      },
    ],
  },
  {
    id: "concierge",
    title: "Concierge",
    subtitle: "Elite Coaching",
    price: "$1,899",
    bestFor:
      "Clients who want the highest level of support, personalization, and protection against setbacks with a fully guided experience.",
    summary: [
      "90-minute in-person elite onboarding in month one",
      "Highly personalized training plan and Success Map review",
      "Four 60-minute in-person sessions per month",
      "Priority support messaging",
      "Two monthly recovery credits",
    ],
    details: [
      {
        heading: "90-Minute In-Person Elite Onboarding - Month 1",
        body:
          "Includes medical history intake, deeper orthopedic and sports-performance assessment, movement analysis, and body composition review to uncover compensations, pain triggers, recovery bottlenecks, mobility restrictions, and technique issues.",
      },
      {
        heading: "Training Plan Build & Success Map Review",
        body:
          "A highly personalized program for fat loss, lean muscle protection, strength, injury risk reduction, and long-term transformation.",
      },
      {
        heading: "Four 60-Minute In-Person Sessions Per Month",
        body:
          "Ideally scheduled weekly. Sessions focus on execution, progression, movement analysis, technique optimization, and continued refinement.",
      },
      {
        heading: "Priority Support Messaging",
        body:
          "Higher-touch communication, faster replies, and proactive course corrections.",
      },
      {
        heading: "Monthly Progression Strategy - Month 2 and Beyond",
        body:
          "Set goals, refine the strategy, and move into the next phase with clarity.",
      },
      {
        heading: "Two Recovery Credits Per Month",
        body:
          "Credits may be applied toward select recovery, performance, or technique-support services within the active program month.",
      },
    ],
    recoveryOptions: [
      "Thermotek Infrared Therapy - 30 minutes, in-person",
      "3B Cold Laser - 30 minutes, in-person",
      "Myofascial Release - 30 minutes, in-person",
      "Graston/HawkGrips Soft Tissue Treatment - 30 minutes, in-person",
      "Bodywork or Percussive Sports Massage - 30 minutes, in-person",
      "Virtual Expert Exercise Movement Analysis & Technique Optimization - 30 minutes",
      "Kinesiotape Application*",
      "TENS Unit Application - 10 minutes*",
    ],
    recoveryNote:
      "Kinesiotape and TENS may be combined with eligible in-person treatment sessions.",
  },
];

export const homeFaqItems = [
  {
    question: "What is GLP-1 Body Composition Coaching?",
    answer:
      "We run GLP-1 weight loss like a body recomposition project: helping you lose fat while protecting strength and lean mass using structured training, protein-first targets, and weekly accountability.",
  },
  {
    question: "Do you prescribe GLP-1 medications?",
    answer:
      "No. We do not prescribe or manage medications. If you are using GLP-1s, that medication plan is managed by your prescribing clinician. We focus on the coaching system that protects your results.",
  },
  {
    question: "Do I need to be local to participate?",
    answer:
      "Foundation is fully remote. Performance and Concierge include in-person onboarding, assessments, and sessions, so you need to be able to visit the Service Area. In-person sessions are available at a gym, office, home, or agreed-upon location; any gym day-pass or facility fees are the client's responsibility.",
  },
];

export const fullFaqItems = [
  ...homeFaqItems,
  {
    question: "How does the program work and is it easy to follow?",
    answer:
      "Yes. You begin with a start session or onboarding assessment, then receive a clear Success Map, training plan, protein-first targets, step goals, and weekly check-ins. The rhythm is intentionally structured so you know what to do next without guesswork.",
  },
  {
    question: "Who is this program for?",
    answer:
      "It is for people using, planning to use, or considering GLP-1 medications who want fat loss without unnecessary strength loss. It is also for clients who want a real-life plan, accountability, and a stronger body after the weight comes off.",
  },
  {
    question: "Do I have to be on a GLP-1 to do this program?",
    answer:
      "No. The same body recomposition system can support fat loss, strength, and consistency even if you are not on a GLP-1. If you are considering medication, the program can help you build the foundation before or during that decision.",
  },
  {
    question: "What makes you different from a typical GLP-1 program?",
    answer:
      "Most programs focus on medication and weigh-ins. GLP GlowUp focuses on strength-preserving training, movement quality, injury prevention, protein-first nutrition, weekly adjustments, and real-world execution.",
  },
  {
    question: "Do I need to work out at a gym?",
    answer:
      "No. Plans can be built for home or gym training depending on your equipment, schedule, injury history, and preferences.",
  },
  {
    question: "How do weekly check-ins work?",
    answer:
      "You submit a short check-in with the key progress details. We review it and reply with the next week's adjustments for training, nutrition, habits, and strategy.",
  },
  {
    question: "What does hybrid mean in Performance?",
    answer:
      "Hybrid means you receive structured remote coaching and check-ins plus in-person sessions for technique, program execution, movement upgrades, and hands-on feedback.",
  },
  {
    question: "Where do in-person sessions happen?",
    answer:
      "In-person sessions may happen at a gym, office, home, or agreed-upon location. Any gym day-pass or facility fees are the client's responsibility.",
  },
  {
    question: "What if I have pain or an old injury?",
    answer:
      "Performance and Concierge include movement and orthopedic or sports-performance assessment elements to help identify limitations and build a safer corrective strategy.",
  },
  {
    question: "Can I do Foundation remotely if I am out of state?",
    answer:
      "Yes. Foundation is fully remote at the same price. You can self-report scale weight, photos, measurements, and training feedback, with optional local Dexa or BIA testing if available.",
  },
  {
    question: "Can I use HSA/FSA or insurance?",
    answer:
      "Programs are cash-pay and out-of-network. A superbill can be provided upon request, but reimbursement is not guaranteed. HSA/FSA eligibility varies, so confirm directly with your plan administrator.",
  },
];

export const policySections = [
  {
    title: "Program Details & Scheduling Guidelines",
    items: [
      "Foundation is delivered remotely.",
      "Performance and Concierge include in-person sessions within the Service Area.",
      "Appointments are generally available Monday through Friday from 9 AM to 5 PM unless otherwise stated.",
      "Weekly check-ins should be submitted on Sunday. Feedback is typically provided within 1-2 business days.",
    ],
  },
  {
    title: "Service Area & Travel",
    items: [
      "In-person sessions are available within a 30-mile radius of Philadelphia, Cherry Hill, Moorestown, and Haddonfield.",
      "Sessions outside that radius may be available on a limited basis with a travel add-on. Availability and pricing must be confirmed before scheduling.",
      "In-person sessions may be at a gym, office, home, or agreed-upon location. Any gym day-pass or facility fees are the client's responsibility.",
    ],
  },
  {
    title: "Communication & Response Times",
    items: [
      "Support is provided through secure messaging, email, and coaching tools.",
      "Response times vary by tier, with an aim of 1-2 business days during business hours.",
      "Communication covers coaching guidance, accountability, and plan adjustments. It is not for urgent medical concerns.",
    ],
  },
  {
    title: "Cancellation, Rescheduling, and Missed Sessions",
    items: [
      "Please provide at least 24 hours notice for cancellations or rescheduling.",
      "Sessions cancelled with less than 24 hours notice may be forfeited.",
      "If GLP GlowUp needs to reschedule, the earliest reasonable alternative will be offered.",
    ],
  },
  {
    title: "Monthly Services & Use-It-Or-Lose-It Policy",
    items: [
      "Monthly sessions, check-ins, and services are active within the current program month.",
      "Unused services do not roll over to future months.",
      "This policy protects consistency, momentum, and outcome quality.",
    ],
  },
  {
    title: "Payments, Billing, and Minimum Commitment",
    items: [
      "Programs are cash-pay and out-of-network monthly subscriptions unless otherwise stated.",
      "A 3-month minimum commitment applies.",
      "After the minimum commitment, programs continue month-to-month unless cancelled at least 7 days before the next billing date.",
      "All package purchases are final once completed.",
    ],
  },
  {
    title: "Add-Ons & Recovery Credits",
    items: [
      "Concierge recovery credits are active within the current program month.",
      "Recovery credits may be used for eligible recovery, performance, or technique-support services.",
      "Recovery and performance services are not medical care.",
    ],
  },
  {
    title: "Out-of-Network, Superbills, and HSA/FSA",
    items: [
      "A superbill can be provided upon request.",
      "Reimbursement is not guaranteed.",
      "Clients should verify insurance, HSA, or FSA eligibility directly with their plan administrator.",
    ],
  },
  {
    title: "Scope of Services & Safety",
    items: [
      "GLP GlowUp provides coaching for training, movement, body composition behaviors, habit systems, and performance support.",
      "We do not prescribe medications, diagnose conditions, or manage medication side effects.",
      "Concerning symptoms should be directed to your prescribing clinician or appropriate medical care.",
    ],
  },
];
