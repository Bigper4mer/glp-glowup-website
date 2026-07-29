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
  "Losing weight is only part of the transformation.",
  "As your appetite and body weight change, it can become harder to eat enough protein, train consistently, recover well, and stay active.",
  "Without a clear plan, the number on the scale may go down while your strength, energy, and confidence decline with it.",
  "GLP GlowUp helps you protect what matters by bringing strength training, protein-focused guidance, daily movement, recovery, and weekly accountability into one personalized strategy.",
  "Your prescribing clinician remains responsible for all medication decisions. Our role is to support the training, nutrition habits, movement, recovery, and follow-through that help you build a stronger result.",
];

export const coachingMethod = [
  {
    number: "01",
    title: "Start by Understanding You",
    description:
      "We begin by understanding your goals, health and movement history, current habits, schedule, training experience, challenges, and the support you already have.",
  },
  {
    number: "02",
    title: "Build Your Personal Success Map",
    description:
      "Your Success Map brings together strength training, protein-focused nutrition, daily movement, recovery, and realistic milestones in a plan built specifically for you.",
  },
  {
    number: "03",
    title: "Support You Through Real Life",
    description:
      "Some weeks feel easier than others. Regular check-ins help us adjust for appetite changes, travel, stress, low energy, and unexpected setbacks without judgment or guesswork.",
  },
  {
    number: "04",
    title: "Build Confidence That Lasts",
    description:
      "Over time, you will understand your body more clearly, make better decisions with less uncertainty, and build habits you can continue using independently.",
  },
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
      "You want expert direction and accountability without adding frequent appointments to your schedule.",
    summary: [
      "60-minute virtual onboarding and goal-setting session",
      "Personalized training plan and Success Map",
      "Weekly Scorecard Check-In & Strategy Review",
      "Email and message support between check-ins",
      "Monthly Progress Review & Updated Plan beginning in Month 2",
    ],
    details: [
      {
        heading: "60-Minute Virtual Onboarding & Goal-Setting Session",
        body:
          "We take time to understand your health and movement history, goals, current habits, protein intake, activity, sleep, schedule, and personal constraints. Together, these details shape a clear Success Map built for your real life.",
      },
      {
        heading: "Personalized Training Plan & Success Map",
        body:
          "Your personalized plan gives you clear strength, movement, and nutrition priorities to support healthy fat loss, protect lean muscle, improve consistency, and reduce avoidable injury risk.",
      },
      {
        heading: "Weekly Scorecard Check-In & Strategy Review",
        body:
          "Each week, you share what is working, what feels difficult, and where you need help. We review the details, adjust the strategy, and give you a clear focus for the week ahead.",
      },
      {
        heading: "Email & Message Support",
        body:
          "Ask questions, receive guidance, and stay connected between check-ins so you are never left guessing about your next step.",
      },
      {
        heading: "Monthly Progress Review & Updated Plan - Month 2 and Beyond",
        body:
          "Beginning in Month 2, we review your progress, set meaningful new goals, and update the plan so your coaching continues to grow with you.",
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
      "You want personalized coaching plus hands-on guidance to improve technique, train safely, and protect lean muscle.",
    summary: [
      "60-minute in-person onboarding in Month 1",
      "Personalized training plan and Success Map",
      "Two Personal Strategy Check-Ins during non-session weeks",
      "Two 60-minute in-person coaching sessions each month",
      "Higher-touch message support between sessions",
    ],
    details: [
      {
        heading: "60-Minute In-Person Onboarding - Month 1",
        body:
          "We begin with your health and movement history, goals, current challenges, functional movement, and body composition priorities. This helps us understand your starting point and build a safer, more effective coaching plan.",
      },
      {
        heading: "Personalized Training Plan & Success Map",
        body:
          "Your personalized plan brings together fat-loss support, lean-muscle priorities, strength, movement quality, and realistic strategies you can sustain.",
      },
      {
        heading: "Two Personal Strategy Check-Ins During Non-Session Weeks",
        body:
          "During the two weeks each month when we do not meet in person, you complete a focused check-in so we can address challenges early, adjust the plan, and keep you moving forward.",
      },
      {
        heading: "Two 60-Minute In-Person Coaching Sessions Per Month",
        body:
          "Sessions can take place at a gym, office, home, or another agreed-upon location. We use this time to coach your program, refine your technique, progress exercises, and help you feel more confident in how you move.",
      },
      {
        heading: "Higher-Touch Message Support",
        body:
          "Receive faster responses and more frequent guidance so you continue to feel supported between in-person sessions.",
      },
      {
        heading: "Monthly Progress Review & Updated Plan - Month 2 and Beyond",
        body:
          "Beginning in Month 2, we review your progress, set meaningful new goals, and update the strategy for the next phase.",
      },
    ],
  },
  {
    id: "concierge",
    title: "Concierge",
    subtitle: "Fully Guided Coaching",
    price: "$1,899",
    bestFor:
      "You want the highest level of personal attention, frequent in-person coaching, and recovery support throughout the process.",
    summary: [
      "90-minute comprehensive in-person onboarding in Month 1",
      "Highly personalized training plan and Success Map",
      "Four 60-minute in-person coaching sessions each month",
      "Priority message support between sessions",
      "Two recovery and performance credits each month",
    ],
    details: [
      {
        heading: "90-Minute Comprehensive In-Person Onboarding - Month 1",
        body:
          "We take a deeper look at your health and movement history, goals, body composition priorities, movement patterns, recovery, mobility, and technique needs. This gives us the clearest possible starting point for a highly personalized plan.",
      },
      {
        heading: "Highly Personalized Training Plan & Success Map",
        body:
          "Your plan is built around your body, goals, schedule, experience, and current challenges to support fat loss, protect lean muscle, improve strength, and create long-term consistency.",
      },
      {
        heading: "Four 60-Minute In-Person Coaching Sessions Per Month",
        body:
          "Sessions are ideally scheduled weekly so we can coach execution, progress your program, refine technique, and make ongoing adjustments as your needs change.",
      },
      {
        heading: "Priority Message Support",
        body:
          "Stay closely connected with faster replies, more frequent guidance, and timely adjustments between sessions.",
      },
      {
        heading: "Monthly Progress Review & Updated Plan - Month 2 and Beyond",
        body:
          "Each month, we review what has changed, set meaningful new goals, and update the plan so you can move into the next phase with confidence.",
      },
      {
        heading: "Two Recovery & Performance Credits Per Month",
        body:
          "Use your credits for eligible recovery, performance, or movement-support services during the active program month.",
      },
    ],
    recoveryOptions: [
      "Stretch Session - 30 minutes, in person",
      "3B Cold Laser - 30 minutes, in person",
      "Myofascial Release - 30 minutes, in person",
      "Graston/HawkGrips Soft Tissue Recovery Session - 30 minutes, in person",
      "Bodywork or Percussive Recovery Session - 30 minutes, in person",
      "Virtual Exercise Movement Review & Technique Coaching - 30 minutes",
      "Kinesiotape Application*",
      "TENS Unit Application - 10 minutes*",
    ],
    recoveryNote:
      "Kinesiotape and TENS may be combined with eligible in-person recovery sessions.",
  },
];

export const homeFaqItems = [
  {
    question: "What is GLP Body Composition Coaching?",
    answer:
      "GLP Body Composition Coaching helps you make the most of your weight-loss journey by pairing strength-first training, protein-focused nutrition guidance, and weekly accountability. The goal is not only to lose fat, but also to protect lean muscle, build strength, and create habits you can maintain.",
  },
  {
    question: "Do you prescribe GLP medications?",
    answer:
      "No. GLP GlowUp does not prescribe or manage medication. Your prescribing clinician remains responsible for medication decisions and side-effect management. We focus on strength training, nutrition habits, movement, recovery, and accountability within the coaching scope.",
  },
  {
    question: "Do I need to be local to participate?",
    answer:
      "No. Foundation is fully remote and available outside the local area. Performance and Concierge include in-person onboarding and coaching, so you must be able to meet within the Philadelphia and South Jersey service area. Sessions may take place at a gym, office, home, or another agreed-upon location. Any gym day-pass or facility fee is the client's responsibility.",
  },
];

export const fullFaqItems = [
  {
    question: "What is GLP Body Composition Coaching?",
    answer:
      "GLP Body Composition Coaching pairs strength-first training, protein-focused nutrition guidance, and weekly accountability to help you lose fat while protecting lean muscle, strength, and long-term confidence.",
  },
  homeFaqItems[1],
  homeFaqItems[2],
  {
    question: "How does the program work, and is it easy to follow?",
    answer:
      "Yes. You begin with an onboarding session, then receive a clear Success Map, personalized training plan, protein-focused targets, movement goals, and regular check-ins. The program is intentionally structured so you know what to focus on, why it matters, and what to do next.",
  },
  {
    question: "Who is this program for?",
    answer:
      "This program is designed for people who are using, preparing to use, or considering GLP medication and want a plan to lose fat while protecting strength and lean muscle. It is also a strong fit for anyone who wants practical guidance, accountability, and a body they feel more confident maintaining after the weight comes off.",
  },
  {
    question: "Do I have to be using a GLP medication to join?",
    answer:
      "No. The same strength-first body composition approach can support fat loss, strength, and consistency even when you are not using a GLP medication. If you are considering medication, coaching can help you build a stronger foundation before or during that decision.",
  },
  {
    question: "What makes GLP GlowUp different from a typical GLP program?",
    answer:
      "Many programs focus primarily on medication and the number on the scale. GLP GlowUp focuses on what helps you become stronger and more capable: personalized strength training, thoughtful exercise selection, protein-focused nutrition guidance, regular adjustments, and support that works in real life.",
  },
  {
    question: "Do I need to work out at a gym?",
    answer:
      "No. Your plan can be built for home, a gym, or a combination of both based on your available equipment, schedule, movement history, experience, and preferences.",
  },
  {
    question: "How do weekly check-ins work?",
    answer:
      "You complete a brief Scorecard that shows what is working, where you are struggling, and what has changed. We review it and respond with clear adjustments for your training, nutrition habits, movement, and next-week strategy.",
  },
  {
    question: "What does hybrid coaching mean in the Performance program?",
    answer:
      "Hybrid coaching combines remote guidance and personal check-ins with two in-person sessions each month. The in-person sessions are used to coach technique, progress your program, improve movement, and give you direct feedback.",
  },
  {
    question: "Where do in-person sessions take place?",
    answer:
      "In-person sessions may take place at a gym, office, home, or another agreed-upon location. Any gym day-pass or facility fee is the client's responsibility.",
  },
  {
    question: "What if I have pain or an old injury?",
    answer:
      "Your health and movement history, current symptoms, and exercise limitations are considered when building the plan. Performance and Concierge also include in-person movement assessment and coaching to help select appropriate exercises and modify technique. New, worsening, or concerning symptoms may require evaluation by an appropriate medical provider.",
  },
  {
    question: "Can I complete Foundation remotely if I live out of state?",
    answer:
      "Yes. Foundation is fully remote and offered at the same price. You can share scale weight, photos, measurements, and training feedback from home, with optional local DEXA or BIA testing when available.",
  },
  {
    question: "Can I use insurance, HSA, or FSA funds?",
    answer:
      "Programs are cash-pay and out of network. A superbill can be provided upon request, but reimbursement is not guaranteed. HSA and FSA eligibility vary, so please confirm directly with your plan administrator before enrolling.",
  },
];

export const policySections = [
  {
    title: "Program Details & Scheduling Guidelines",
    items: [
      "Foundation is delivered remotely.",
      "Performance and Concierge include in-person sessions within the Philadelphia and South Jersey service area.",
      "Appointments are generally available Monday through Friday from 9:00 AM to 5:00 PM unless otherwise stated.",
      "Weekly Scorecards are due each Sunday. Feedback is typically provided within 1-2 business days.",
    ],
  },
  {
    title: "Service Area & Travel",
    items: [
      "In-person sessions are available within a 30-mile radius of Philadelphia, Cherry Hill, Moorestown, and Haddonfield.",
      "Sessions outside that radius may be available on a limited basis with a travel add-on. Availability and pricing must be confirmed before scheduling.",
      "In-person sessions may take place at a gym, office, home, or another agreed-upon location. Any gym day-pass or facility fee is the client's responsibility.",
    ],
  },
  {
    title: "Communication & Response Times",
    items: [
      "Support is provided through secure messaging, email, and approved coaching tools.",
      "Response times vary by program. Our standard goal is to reply within 1-2 business days during business hours.",
      "Communication is for coaching guidance, accountability, questions, and plan adjustments. It is not intended for urgent or time-sensitive medical concerns.",
    ],
  },
  {
    title: "Cancellation, Rescheduling & Missed Sessions",
    items: [
      "Please provide at least 24 hours' notice for cancellations or rescheduling.",
      "Sessions canceled with less than 24 hours' notice may be forfeited.",
      "If GLP GlowUp needs to reschedule, we will offer the earliest reasonable alternative.",
    ],
  },
  {
    title: "Monthly Services & Rollover Policy",
    items: [
      "Monthly sessions, check-ins, recovery credits, and services are active only within the current program month.",
      "Unused services expire at the end of the active program month and do not roll over to future months.",
      "This structure helps protect consistency, momentum, and the quality of your coaching experience.",
    ],
  },
  {
    title: "Payments, Billing & Minimum Commitment",
    items: [
      "Programs are cash-pay, out-of-network monthly subscriptions unless otherwise stated.",
      "A 3-month minimum commitment applies.",
      "After the minimum commitment, programs continue month to month unless canceled at least 7 days before the next billing date.",
      "All completed program and package purchases are final and non-refundable.",
    ],
  },
  {
    title: "Add-Ons & Recovery Credits",
    items: [
      "Concierge recovery credits are active only within the current program month.",
      "Recovery credits may be used for eligible recovery, performance, or movement-support services.",
      "Recovery and performance services are supportive coaching services and are not medical care.",
    ],
  },
  {
    title: "Out-of-Network, Superbills & HSA/FSA",
    items: [
      "A superbill can be provided upon request.",
      "Reimbursement is not guaranteed.",
      "Clients should verify insurance, HSA, or FSA eligibility directly with their plan administrator before enrolling.",
    ],
  },
  {
    title: "Scope of Services & Safety",
    items: [
      "GLP GlowUp provides educational coaching for strength training, movement, body-composition habits, nutrition behaviors, accountability, and performance support.",
      "We do not prescribe medications, diagnose or treat medical conditions, or manage medication side effects.",
      "New, worsening, or concerning symptoms should be directed to your prescribing clinician or another appropriate medical provider.",
    ],
  },
  {
    title: "Application Data & Privacy",
    items: [
      "Application information is used to understand your goals, review whether the program may be appropriate, respond to your inquiry, and prepare for a possible introductory call.",
      "Form submissions may be processed by the website-hosting and communication providers used to receive and review inquiries.",
      "Share only information that is relevant to your coaching inquiry. Do not use the form for urgent concerns or time-sensitive medical information.",
      "If you enroll, any additional information collected for service delivery will be addressed through the applicable coaching agreements and intake process.",
    ],
  },
];
