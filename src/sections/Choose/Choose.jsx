import Sections from "@/layouts/Sections";
import Grid from "@/components/Grid";
import ChooseCard from "@/components/ChooseCard";

const Choose = () => {
  const chooseData = [
    {
      iconName: 'medal',
      title: 'Expertise',
      description: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.',
    },
    {
      iconName: 'people',
      title: 'Client-Centric Approach',
      description: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.',
    },
    {
      iconName: 'shield',
      title: 'Results-Driven Solutions',
      description: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.',
    },
    {
      iconName: 'crown',
      title: 'Collaborative Partnership',
      description: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.',
    },
  ]

  return (
    <Sections
      title="Why Choose SquareUp?"
      titleId="choose-title"
      description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
      bgUrl="src/assets/images/sections/2.png"
    >
      <Grid columns={2}>
        {chooseData.map((choose, index) => (
          <ChooseCard
            key={index}
            {...choose}
          />
        ))}
      </Grid>
    </Sections>
  )
}

export default Choose