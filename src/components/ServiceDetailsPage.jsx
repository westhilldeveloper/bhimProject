export default function ServiceDetailsPage() {
  const services = [
  {
    id: 1,
    title: 'Corporate Housekeeping Services',
    subtitle: 'We provide professional housekeeping services that ensure your workplace remains clean, hygienic, and presentable at all times. Our trained staff follows industry best practices and uses proper cleaning techniques to maintain high standards of cleanliness across offices, commercial spaces, and facilities.',
    description: 'A well-maintained environment not only enhances productivity but also creates a positive impression on clients and employees. Our housekeeping solutions are flexible and customized according to your requirements, ensuring consistent quality and attention to detail.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'],
    image:'/images/service/Corporate.png'
  },
  {
    id: 2,
    title: 'Construction Manpower / Labour Supply',
    subtitle: 'Our construction manpower services are designed to meet the dynamic and demanding needs of the construction industry. We provide skilled, semi-skilled, and unskilled labour who are experienced in handling various types of construction work efficiently and safely.',
    description: 'We understand the importance of timely project completion, which is why we ensure a steady supply of reliable manpower. Our workforce is selected carefully to match your project requirements, helping you maintain productivity and reduce operational delays.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'],
    image:'/images/service/c2.png'
  },
  {
    id: 3,
    title: 'Security Services',
    subtitle: 'We offer professional security services to safeguard your premises, assets, and people. Our security personnel are trained to handle various situations with discipline and alertness, ensuring a safe and secure environment at all times.',
    description: 'From corporate offices to construction sites, our security solutions are tailored to your specific needs. We focus on prevention, vigilance, and quick response to ensure complete peace of mind for our clients.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'],
    image:'/images/service/Security_services.png' 
  },
  {
    id: 4,
    title: 'Pantry Staff Services',
    subtitle: 'Our pantry staff services ensure smooth and efficient management of your workplace pantry and refreshment areas. Our staff is trained to maintain hygiene, manage supplies, and provide courteous service to employees and guests.',
    description: 'By taking care of these essential tasks, we help create a comfortable and well-organized environment within your workplace. Our pantry personnel are reliable and professional, contributing to a better overall experience.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'], 
    image:'/images/service/Pantry_Services.png'
  },
  {
    id: 5,
    title: 'Helper Services',
    subtitle: 'We provide general helper staff to support various operational tasks across industries. Whether it’s assisting in daily activities, handling materials, or supporting skilled workers, our helpers are dependable and hardworking.',
    description: 'Our helper services are flexible and can be customized based on your business needs. This ensures that your operations run smoothly without any interruptions or workforce shortages.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'],
    image:'/images/service/helper_loading_unloading.png' 
  },
  {
    id: 6,
    title: 'Packers & Pickers',
    subtitle: 'Our packers and pickers are trained to handle goods with care and efficiency, ensuring accurate packing, sorting, and movement of items. This service is ideal for warehouses, logistics companies, and businesses that require organized inventory management.',
    description: 'We focus on minimizing errors and ensuring timely handling of goods, which helps improve operational efficiency. Our staff works with attention to detail to maintain quality and accuracy in every task.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'],
    image:'/images/service/packer_picker.png' 
  },
  {
    id: 7,
    title: 'Nursing Assistant Services',
    subtitle: 'We provide trained nursing assistants who offer essential support in healthcare settings as well as for individual care needs. Our staff is compassionate, attentive, and skilled in assisting patients with daily activities and basic medical support.',
    description: 'Our nursing assistants play a crucial role in ensuring patient comfort and well-being. They work closely with healthcare professionals and families to provide reliable and caring support at all times.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'],
    image:'/images/service/Nursing_Assistant.png'  
  },
  {
    id: 8,
    title: 'Doctor Attendant Services',
    subtitle: 'Our doctor attendants are trained to assist medical professionals and support patients during consultations and treatments. They help in managing patient needs, maintaining hygiene, and ensuring smooth coordination within healthcare environments.',
    description: 'With a focus on care and professionalism, our doctor attendants contribute to a comfortable and efficient healthcare experience. Their presence ensures that both patients and doctors receive the support they need for better outcomes.',
    points: ['Project Management', 'Quality Assurance', 'Staff Training'],
    image:'/images/service/Doctor_Attendant.png' 
  },
];

  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-full">
        {/* Top Intro */}
        <div className="mx-auto max-w-full text-center">
          <h2 className="text-[24px] font-medium leading-none text-black md:text-[28px]">
            Our Services
          </h2>

          <p className="mt-3 text-[11px] leading-[1.35] text-[#4c4c4c] md:text-[14px]">
            At Bhim Secure Solutions, we offer a comprehensive range of manpower and facility management services designed to support businesses across multiple industries. Our services are built around reliability, efficiency, and professionalism, ensuring that every client receives tailored solutions that meet their specific operational needs. From maintaining clean and organized workspaces to providing skilled manpower and security, we cover every essential aspect of day-to-day business operations.
          </p>

          <p className="mt-3 text-[11px] leading-[1.35] text-[#4c4c4c] md:text-[14px]">
           With years of experience since our incorporation in 2009, we have developed the expertise to deliver high-quality services across sectors such as construction, corporate offices, healthcare, and more. Our team is committed to providing trained and dependable personnel who not only perform their roles efficiently but also contribute to a safe, productive, and well-managed environment.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="mt-10 space-y-10 md:mt-12 md:space-y-14">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
  key={service.id}
  className={`grid items-start gap-8 md:gap-10 lg:grid-cols-2 ${
    reverse
      ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
      : ''
  }`}
>
  {/* Image */}
  <div className="w-full">
    <div className="h-[260px] w-full overflow-hidden rounded-[8px] bg-[#fff6eb] md:h-[320px] lg:h-[576px]">
      <img
        src={service.image} 
        alt="service"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  {/* Content */}
  <div className="w-full">
    <h3 className="text-[18px] font-medium leading-none text-black md:text-[28px] lg:text-[22px]">
      {service.title}
    </h3>

     <p className="mt-6 text-[12px] leading-[1.5] text-[#4c4c4c] md:text-[14px]">
      {service.subtitle}
    </p>

    <p className="mt-1 text-[12px] leading-[1.5] text-[#4c4c4c] md:text-[14px]">
      {service.description}
    </p>

    {/* <ul className="mt-5 space-y-2">
      {service.points.map((point) => (
        <li
          key={point}
          className="flex items-center gap-2 text-[12px] font-medium text-black md:text-[16px]"
        >
          <span className="h-[5px] w-[5px] rounded-full bg-black" />
          <span>{point}</span>
        </li>
      ))}
    </ul> */}
  </div>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}