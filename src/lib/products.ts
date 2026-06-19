export type Product = {
  slug: string;
  image: string;
  title: string;
  description: string;
  details: string;
  howToUse: string[];
  whyUse: string[];
};

export const products: Product[] = [
  {
    slug: "automatic-sliding-gate",
    image: "/slidinggate.jpg",
    title: "Automatic Sliding Gate",
    description: "Smooth, secure operation for residential and industrial gates.",
    details:
      "Automatic sliding gates are ideal where space is limited and a strong, secure entrance is needed. The system uses a motor, control board, remote receiver, and safety accessories to open and close the gate smoothly.",
    howToUse: [
      "Open or close the gate with a remote, keypad, push button, or WiFi controller.",
      "Keep the gate track clean so the gate moves freely.",
      "Use safety sensors where people or vehicles pass through frequently.",
    ],
    whyUse: [
      "Improves security and convenience for homes, apartments, and industries.",
      "Works well for wide entrances and heavy gates.",
      "Reduces the need to manually open the gate in rain, heat, or at night.",
    ],
  },
  {
    slug: "automatic-swing-gate",
    image: "/Swing Gate.jpg",
    title: "Automatic Swing Gate",
    description: "Remote, WiFi, and push-button options for new or existing gates.",
    details:
      "Automatic swing gate systems automate one-leaf or two-leaf gates using arm or underground motors. They are a practical choice for homes, villas, offices, and gated properties.",
    howToUse: [
      "Operate the gate with remote controls, wall switches, access control, or smart modules.",
      "Make sure the swing path is clear before opening or closing.",
      "Schedule periodic servicing for hinges, brackets, and motor settings.",
    ],
    whyUse: [
      "Keeps the existing gate style while adding automation.",
      "Provides controlled access without leaving the vehicle.",
      "Suitable for many residential and commercial entrances.",
    ],
  },
  {
    slug: "automatic-rolling-shutters",
    image: "/automaticrollingshutter.jpg",
    title: "Automatic Rolling Shutters",
    description: "Durable motorized shutters for shops, garages, and warehouses.",
    details:
      "Motorized rolling shutters provide strong access control for shops, garages, godowns, and warehouses. They can be controlled with a switch, remote, or smart control depending on the setup.",
    howToUse: [
      "Use the wall switch or remote to raise and lower the shutter.",
      "Do not operate if the shutter is blocked or damaged.",
      "Service the motor, springs, and shutter guides regularly for smooth movement.",
    ],
    whyUse: [
      "Saves effort compared with manual shutter lifting.",
      "Adds convenience for daily shop and warehouse operation.",
      "Can improve security when paired with locks and alarms.",
    ],
  },
  {
    slug: "automatic-boom-barriers",
    image: "/boom Barrier.jpg",
    title: "Automatic Boom Barriers",
    description: "Vehicle access control for parking and commercial entrances.",
    details:
      "Automatic boom barriers manage vehicle entry and exit at parking areas, apartments, hospitals, offices, and industrial gates. They can work with remotes, RFID, ticketing systems, or guard controls.",
    howToUse: [
      "Open the barrier through remote, push button, RFID, or access control system.",
      "Install warning signs and safety sensors in busy vehicle lanes.",
      "Choose arm length and opening speed based on the entrance width and traffic.",
    ],
    whyUse: [
      "Controls vehicle movement at busy entrances.",
      "Helps parking operators and guards manage access faster.",
      "Creates a professional and organized entry point.",
    ],
  },
  {
    slug: "automatic-garage-doors",
    image: "/Garage Door.jpg",
    title: "Automatic Garage Doors",
    description: "Quiet, dependable garage access with remote control.",
    details:
      "Automatic garage door systems make daily vehicle access easier and safer. They are useful for homes, apartments, and private parking spaces where dependable remote access is needed.",
    howToUse: [
      "Open and close the garage door with remote or wall control.",
      "Keep the door path clear before operation.",
      "Check rollers, springs, and safety reverse settings during maintenance.",
    ],
    whyUse: [
      "Adds comfort and security to home parking.",
      "Reduces manual lifting and closing effort.",
      "Supports safer entry during night or bad weather.",
    ],
  },
  {
    slug: "automatic-glass-doors",
    image: "/Automatic Glass Doors.jpg",
    title: "Automatic Glass Doors",
    description: "Sensor-operated doors for retail, offices, and public spaces.",
    details:
      "Automatic glass doors use motion sensors and operators to provide hands-free entry. They are common in showrooms, offices, hospitals, hotels, and public buildings.",
    howToUse: [
      "Walk toward the sensor zone and the door opens automatically.",
      "Keep the sensor area and sliding track clear.",
      "Use access control or manual mode when restricted entry is needed.",
    ],
    whyUse: [
      "Creates a modern and convenient entrance.",
      "Improves visitor flow in high-traffic spaces.",
      "Supports hands-free access for customers and staff.",
    ],
  },
  {
    slug: "motorized-curtains",
    image: "/Motorized Curtains.jpg",
    title: "Motorized Curtains",
    description: "Convenient control for blackout, sheer, and theater curtains.",
    details:
      "Motorized curtain systems make it easy to control curtains in homes, offices, hotels, and theaters. They can be controlled by remote, switch, timer, or smart home system.",
    howToUse: [
      "Open, close, or stop curtains using a remote, wall switch, or app.",
      "Use timers for daily schedules where needed.",
      "Choose the right track and motor strength for the curtain weight.",
    ],
    whyUse: [
      "Adds comfort for large or hard-to-reach curtains.",
      "Improves privacy and light control.",
      "Works well with smart home and theater automation.",
    ],
  },
  {
    slug: "security-systems",
    image: "/Security Systems.jpg",
    title: "Security Systems",
    description: "CCTV, alarms, and monitoring for homes and businesses.",
    details:
      "Security systems combine CCTV, alarms, sensors, and monitoring devices to protect homes, offices, shops, and commercial properties.",
    howToUse: [
      "Use cameras and alarms to monitor key entry points and sensitive areas.",
      "Set alerts for motion, intrusion, or unusual activity.",
      "Review camera placement and recording storage based on the site layout.",
    ],
    whyUse: [
      "Helps deter theft and unauthorized access.",
      "Provides evidence and visibility when incidents happen.",
      "Improves overall property safety and monitoring.",
    ],
  },
  {
    slug: "access-control",
    image: "/Access Controlled Entrance.jpg",
    title: "Access Control",
    description: "RFID, remote, sensor, and push-button entry systems.",
    details:
      "Access control systems manage who can enter a gate, door, office, parking area, or restricted zone. Options include RFID cards, keypads, remotes, biometric devices, and push buttons.",
    howToUse: [
      "Assign access methods to approved users.",
      "Connect the system to doors, gates, or barriers based on the site requirement.",
      "Update user access when staff, tenants, or operators change.",
    ],
    whyUse: [
      "Improves control over restricted areas.",
      "Reduces dependency on physical keys.",
      "Useful for offices, apartments, parking areas, and commercial entrances.",
    ],
  },
  {
    slug: "burglar-alarm-systems",
    image: "/Burglar Alarm System.jpg",
    title: "Burglar Alarm Systems",
    description: "Early warning systems for intrusion and property protection.",
    details:
      "Burglar alarm systems use sensors, sirens, and control panels to detect unauthorized entry. They are useful for homes, shops, offices, and storage areas.",
    howToUse: [
      "Arm the alarm when leaving the property or during closed hours.",
      "Use door, window, motion, and vibration sensors for important zones.",
      "Set up siren and alert options based on the property requirement.",
    ],
    whyUse: [
      "Warns quickly when intrusion is detected.",
      "Helps protect property outside business hours.",
      "Can be paired with CCTV and security monitoring.",
    ],
  },
  {
    slug: "centralized-vacuum",
    image: "/centeralized vaccumnm cleaner.jpg",
    title: "Centralized Vacuum",
    description: "Built-in cleaning systems for homes and commercial buildings.",
    details:
      "Centralized vacuum systems use fixed pipes and a central motor unit to clean rooms through wall inlets. They are a clean and convenient option for homes, hotels, and commercial buildings.",
    howToUse: [
      "Connect the hose to a wall inlet and vacuum the required area.",
      "Empty the collection unit as recommended.",
      "Plan inlet points during construction or renovation for best coverage.",
    ],
    whyUse: [
      "Reduces the need to carry a heavy portable vacuum.",
      "Keeps dust collection away from living or working spaces.",
      "Useful for larger buildings and premium interiors.",
    ],
  },
  {
    slug: "fire-balls",
    image: "/Fire Balls.jpg",
    title: "Fire Balls",
    description: "Fast-activating fire suppression for added protection.",
    details:
      "Fire balls are automatic fire suppression products designed to activate when exposed to flame. They are commonly placed near high-risk areas as an added layer of protection.",
    howToUse: [
      "Place near electrical panels, kitchens, vehicles, or other risk areas as advised.",
      "Keep the unit visible and unobstructed.",
      "Follow product safety instructions and expiry guidelines.",
    ],
    whyUse: [
      "Activates quickly when exposed to flame.",
      "Simple to place in selected risk zones.",
      "Adds extra protection alongside standard fire safety measures.",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
