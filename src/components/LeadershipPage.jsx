import Leadership from "./Leadership";

const servicesData = [
  // Slide 1 – three services
  [
    {
      image: "/images/service/Corporate.png",
      title: "Corporate Housekeeping Services",
      description: "We provide professional housekeeping staff to maintain cleanliness, hygiene, and a well-organized environment in corporate spaces, ensuring a positive and productive workplace for employees and visitors."
    },
    {
      image: "/images/service/C2.png",
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

export default function LeadershipPage() {
  return <Leadership slides={servicesData} />;
}