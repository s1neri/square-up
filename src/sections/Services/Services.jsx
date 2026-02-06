import Sections from "@/layouts/Sections";
import Grid from "@/components/Grid";
import ServicesCard from "@/components/ServicesCard";

const Services = () => {

  const servicesData = [
    {
      iconName: 'brush',
      title: 'Design',
      description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.',
      buttonLabel: 'Learn More',
    },
    {
      iconName: 'puzzle',
      title: 'Engineering',
      description: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
      buttonLabel: 'Learn More',
    },
    {
      iconName: 'battery',
      title: 'Project Management',
      description: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.',
      buttonLabel: 'Learn More',
    },
  ]

  return (
    <Sections
      title="Our Services"
      titleId="services-id"
      description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      bgUrl="src/assets/images/sections/1.png"
    >
      <Grid columns={3}>
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            {...service}
            hasButton={true}
          />
        ))}
      </Grid>
    </Sections>
  )
}

export default Services