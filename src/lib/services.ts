import { ShieldCheck, Cpu, DoorOpen, Webhook, Home } from "lucide-react";

export const servicePages = [
  {
    slug: "entrance-automation-nepal",
    title: "Entrance Automation",
    icon: DoorOpen,
    description:
      "Seamless entry solutions for residential and commercial spaces, featuring state-of-the-art sliding and swing gate automation.",
    pageHeading: "Advanced Entrance Automation",
    image: "/Access Controlled Entrance.jpg",
    pageDescription:
      "We provide premium entrance automation systems and access control solutions tailored for modern security needs.",
    highlights: [
      "Precision-engineered sliding and swing gate motors with advanced safety sensors.",
      "Integrated smart access control for homes, corporate offices, and industrial complexes.",
      "Professional consultation and seamless deployment.",
    ],
    faq: [
      {
        question: "Can these systems be retrofitted to existing gates?",
        answer:
          "Absolutely. Our advanced motorization units can be seamlessly integrated into most existing sliding and swing gates.",
      },
      {
        question: "What safety features are included?",
        answer:
          "Our systems feature anti-crush sensors, photoelectric beams, and auto-reverse mechanisms to ensure maximum safety.",
      },
    ],
  },
  {
    slug: "gate-automation-nepal",
    title: "Gate Automation",
    icon: Webhook,
    description:
      "Robust motorization options designed for durability and quiet operation, suitable for every gate type.",
    pageHeading: "Premium Gate Automation Solutions",
    image: "/Swing Gate.jpg",
    pageDescription:
      "Experience the pinnacle of convenience and security with our engineering-grade gate automation systems.",
    highlights: [
      "High-torque motors for flawless residential and industrial gate operation.",
      "Ultra-quiet, maintenance-free mechanics engineered for longevity.",
      "Smart integration with mobile devices for remote access.",
    ],
    faq: [
      {
        question: "How do I choose the correct motor for my gate?",
        answer:
          "Our engineering team assesses your gate's weight, dimensions, and usage frequency to recommend the optimal automation unit.",
      },
      {
        question: "Are these systems weatherproof?",
        answer:
          "Yes, all our automation systems feature IP-rated enclosures designed to withstand extreme weather conditions.",
      },
    ],
  },
  {
    slug: "boom-barrier-nepal",
    title: "Boom Barriers",
    icon: ShieldCheck,
    description:
      "High-performance boom barriers ensuring secure and efficient traffic control for parking facilities and restricted areas.",
    pageHeading: "Intelligent Boom Barrier Systems",
    image: "/boom Barrier.jpg",
    pageDescription:
      "Optimize vehicle flow and enforce security with our high-speed, heavy-duty boom barriers.",
    highlights: [
      "Rapid opening and closing speeds for high-traffic environments.",
      "Integration with RFID, ANPR, and ticketing systems.",
      "Built-in crash resistance and durable articulated arms.",
    ],
    faq: [
      {
        question: "Can boom barriers integrate with our existing access control?",
        answer:
          "Yes, our barriers feature versatile control boards compatible with almost all third-party access systems.",
      },
      {
        question: "What happens during a power outage?",
        answer:
          "Our systems include manual override keys, and we can also install battery backup solutions for uninterrupted operation.",
      },
    ],
  },
  {
    slug: "sliding-gate-motor-nepal",
    title: "Sliding Gate Motors",
    icon: Cpu,
    description:
      "Heavy-duty sliding gate mechanisms providing smooth, trackless operation even for large industrial installations.",
    pageHeading: "High-Capacity Sliding Gate Motors",
    image: "/slidinggate.jpg",
    pageDescription:
      "Power your perimeter security with sliding gate motors designed for heavy loads and intensive use.",
    highlights: [
      "Support for gate weights ranging from 500kg to over 3000kg.",
      "Advanced cantilever configurations for trackless operation.",
      "Soft-start and soft-stop technology to extend mechanical lifespan.",
    ],
    faq: [
      {
        question: "Do you provide cantilever (trackless) solutions?",
        answer:
          "Yes, we specialize in cantilever hardware kits that eliminate the need for ground tracks, ideal for uneven terrain.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Our motors are virtually maintenance-free. We recommend a basic annual inspection to ensure optimal performance.",
      },
    ],
  },
  {
    slug: "home-automation-nepal",
    title: "Smart Home Automation",
    icon: Home,
    description:
      "Intelligent control systems that seamlessly connect lighting, security, and access for a fully automated living experience.",
    pageHeading: "Next-Generation Home Automation",
    image: "/Security Systems.jpg",
    pageDescription:
      "Transform your living space with intuitive smart home technology that brings comfort, security, and energy efficiency to your fingertips.",
    highlights: [
      "Centralized control of lighting, climate, curtains, and security.",
      "Voice-activated and mobile app-controlled environments.",
      "Scalable ecosystems that grow with your technological needs.",
    ],
    faq: [
      {
        question: "Is rewiring necessary to automate an existing home?",
        answer:
          "Not necessarily. We offer wireless smart modules that easily retrofit behind existing switches without intrusive rewiring.",
      },
      {
        question: "Which smart ecosystems do you support?",
        answer:
          "Our solutions are compatible with major platforms including Apple HomeKit, Google Home, and Amazon Alexa.",
      },
    ],
  },
];
