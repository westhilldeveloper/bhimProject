import Leadership from "./Leadership";

const servicesData = [
  // Slide 1 – three services
  [
    {
      image: "/images/members/ramNivs.jpeg",
      title: " Colonel Ram Niwas (Retd.)",
      description: "General Manager – Office Administration & Operations"
    },
    {
      image: "/images/members/kamal.jpeg",
      title: "Kamal Basumatari",
      description: "General Manager – Head of Sales & Operations"
    },
    
  ],
  
];

export default function LeadershipPage() {
  return <Leadership slides={servicesData} />;
} 