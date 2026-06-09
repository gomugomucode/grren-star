import Link from "next/link";

interface ServiceHighlightsProps {
  hideHeading?: boolean;
  heading?: string;
  subtext?: string;
}

export const servicePages = [
  {
    slug: "entrance-automation-nepal",
    title: "Entrance Automation Nepal",
    description:
      "Sliding and swing gate automation systems with installation support, safety sensors, and remote access for homes and businesses in Nepal.",
    pageHeading: "Entrance Automation Services in Nepal",
    pageDescription:
      "Greenstar Suppliers installs and supplies entrance automation systems, gate motors, and access control solutions for residential and commercial clients.",
    highlights: [
      "Sliding and swing gate motors with remote control and safety sensors.",
      "Integrated access control for homes, offices, warehouses, and factories.",
      "Fast support for ordering, delivery, and installation across Nepal.",
    ],
    faq: [
      {
        question: "Can entrance automation be installed on existing gates?",
        answer:
          "Yes, we supply retrofit gate motors for existing sliding and swing gates in Nepal, along with installation guidance and local support.",
      },
      {
        question: "Do you offer remote and sensor options?",
        answer:
          "Our entrance automation packages include remote control, safety photocells, loop detectors, and smart sensor upgrades.",
      },
    ],
  },
  {
    slug: "gate-automation-nepal",
    title: "Gate Automation Nepal",
    description:
      "Reliable gate automation solutions for sliding gates, swing gates, and commercial entrances backed by fast WhatsApp ordering.",
    pageHeading: "Gate Automation Solutions in Nepal",
    pageDescription:
      "From entry-level gate motors to premium automation engineering, we provide gate automation systems suited for every Nepalese gate type.",
    highlights: [
      "Sliding gate and swing gate motors for residential, industrial, and commercial use.",
      "Brand options for durable, quiet gate operation in Nepal's climate.",
      "Expert advice on gate safety, speed, and automation controls.",
    ],
    faq: [
      {
        question: "Which gate motor is best for my house in Nepal?",
        answer:
          "We recommend motor selection based on gate weight, opening type, usage frequency, and local power conditions.",
      },
      {
        question: "Can I order gate automation by WhatsApp?",
        answer:
          "Yes. Simply message our WhatsApp number for a quick quote, product recommendations, and delivery timings.",
      },
    ],
  },
  {
    slug: "boom-barrier-nepal",
    title: "Boom Barrier Nepal",
    description:
      "Automatic boom barriers for parking, checkpoints, and entry control, designed for durable daily use across Nepal.",
    pageHeading: "Boom Barrier Systems in Nepal",
    pageDescription:
      "We deliver automatic boom barriers for parking lots, factories, and gated communities with robust control and safety features.",
    highlights: [
      "High-durability boom barriers for traffic control and security entrances.",
      "Suitable for parking, toll gates, and vehicle access points in Nepal.",
      "Includes installation help and service support across major Nepal cities.",
    ],
    faq: [
      {
        question: "Do you install boom barriers for vehicle parking?",
        answer:
          "Yes, our boom barrier solutions are built for parking areas, commercial campuses, and security checkpoints.",
      },
      {
        question: "Are spare parts and service available in Nepal?",
        answer:
          "We offer local support and replacement parts for boom barrier systems throughout Nepal.",
      },
    ],
  },
  {
    slug: "sliding-gate-motor-nepal",
    title: "Sliding Gate Motor Nepal",
    description:
      "Quality sliding gate motors and cantilever kits for residential and industrial gates, available nationwide in Nepal.",
    pageHeading: "Sliding Gate Motors in Nepal",
    pageDescription:
      "Our sliding gate motors are designed for reliable operation, low maintenance, and smooth performance across Nepal.",
    highlights: [
      "Cantilever and track sliding gate motors for all gate sizes.",
      "Smooth, quiet operation with smart safety controls.",
      "Nationwide delivery and technical guidance from Butwal.",
    ],
    faq: [
      {
        question: "Can you supply sliding gate motors for large gates?",
        answer:
          "Yes, we offer heavy-duty sliding gate motors for large industrial and residential gates.",
      },
      {
        question: "How do I choose the right sliding gate kit?",
        answer:
          "Our team can help you choose based on gate weight, opening frequency, and local terrain.",
      },
    ],
  },
  {
    slug: "home-automation-nepal",
    title: "Home Automation Nepal",
    description:
      "Smart home automation systems for lighting, security, curtains, and access control with local delivery in Nepal.",
    pageHeading: "Home Automation Services in Nepal",
    pageDescription:
      "Create a smart home with lighting control, security automation, motorized curtains, and convenience systems from Greenstar Suppliers.",
    highlights: [
      "Smart lighting, curtain, and security automation for Nepal homes.",
      "Easy control using remotes, wall panels, and mobile links.",
      "Home automation packages tailored to apartments, villas, and commercial buildings.",
    ],
    faq: [
      {
        question: "What smart home systems do you supply in Nepal?",
        answer:
          "We supply lighting automation, curtain motors, security sensors, and central control systems for smart homes.",
      },
      {
        question: "Can home automation work with existing wiring?",
        answer:
          "Yes, we can work with existing electrical wiring and recommend upgrades where needed.",
      },
    ],
  },
];

export default function ServiceHighlights({
  hideHeading = false,
  heading = "Automation Services Built for Nepal",
  subtext =
    "Explore our key service pages for entrance automation, gate automation, boom barriers, sliding gate motors, and home automation.",
}: ServiceHighlightsProps) {
  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeading ? (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-3 mx-auto w-fit">Services</div>
            <h2 className="text-3xl font-bold text-slate-900">{heading}</h2>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">{subtext}</p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicePages.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
              >
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
