import Services from "@/components/Services";
export const navItems = ["Home", "About", "Services", "Projects", "Clients", "Contact"];

export const services = [1, 2, 3];
export const processItems = [
  {
    title: "Requirement Understanding",
    description: "We analyze your exact workforce and service needs to ensure the right fit.",
  },
  {
    title: "Talent Selection",
    description: "We source, screen, and deploy skilled and reliable professionals.",
  },
  {
    title: "Training & Deployment",
    description: "Our team is trained and quickly deployed for seamless operations.",
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous supervision and support to maintain service quality.",
  },
];
export const testimonials = [1, 2, 3];

export const heroBg = "/images/homeImg.png";
export const heroPeople = [
  "/images/hm_per1.png",
  "/images/hm_pr2.png",
  "/images/hm_pr3.png",
];

export const aboutImages = [
  "/images/ab_1.png",
  "/images/ab_2.png",
  "/images/ab_3.png",
  "/images/ab_4.png",
];

export const serviceImg = "/images/serv_1.png";
export const projectLarge = "/images/prj_1.png";
export const projectSmall = "/images/prj_2.png";
export const stripImages = [
  "/images/strp_1.png",
  "/images/strp_2.png",
  "/images/strp_3.png",
];

const servicesData = [
  // Slide 1 – three services
  [
    {
      image: "/images/service/Corporate.png",
      title: "Corporate Housekeeping Services",
      description: "We provide professional housekeeping staff to maintain cleanliness, hygiene, and a well-organized environment in corporate spaces, ensuring a positive and productive workplace for employees and visitors."
    },
    {
      image: "/images/service/c2.png",
      title: "Construction Manpower / Labour Supply",
      description: "Our skilled and unskilled workforce supports construction projects of all sizes, helping ensure timely completion, operational efficiency, and adherence to industry standards."
    },
    {
      image: "/images/service/Security_services.png",
      title: "Security Services",
      description: "We offer trained security personnel to safeguard your premises, assets, and people, ensuring round-the-clock safety with professionalism and vigilance."
    }
  ],
  // Slide 2 – another three services
  [
    {
      image: "/images/service/Pantry_Services.png",
      title: "Pantry Services",
      description: "Our pantry staff efficiently manage food and beverage services, maintaining hygiene and timely service to enhance workplace comfort and convenience."
    },
    {
      image: "/images/service/helper_loading_unloading.png",
      title: "Helper Services",
      description: "We provide reliable helpers to assist in daily operational tasks across various industries, improving efficiency and reducing workload on core teams."
    },
    {
      image: "/images/service/packer_picker.png",
      title: "Packer & Picker Services",
      description: "Our packers and pickers ensure accurate handling, packing, and movement of goods, making warehouse and logistics operations smooth and efficient."
    }
  ],
  [
    {
      image: "/images/service/Nursing_Assistant.png",
      title: "Nursing Assistant Services",
      description: "We offer trained nursing assistants to support patient care, assisting with daily medical needs and ensuring comfort and proper attention in healthcare settings."
    },
    {
      image: "/images/service/Doctor_Attendant.png",
      title: "Doctor Attendant Services",
      description: "POur doctor attendants provide essential support to medical professionals, helping manage patient coordination and routine assistance for smooth healthcare operations."
    },
    // {
    //   image: "/images/pantry.jpg",
    //   title: "Pantry Services",
    //   description: "Pantry helpers, cafeteria staff, and support for corporate offices."
    // }
  ]
];

export default function ServicesPage() {
  return <Services slides={servicesData} />;
}

