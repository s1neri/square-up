import './About.scss'
import Sections from "@/layouts/Sections";
import SectionDescription from "@/components/SectionDescription";
import Grid from "@/components/Grid";
import ProcessCard from "@/components/ProcessCard";
import {Image} from "minista";

const About = () => {

  const aboutData = [
    {
      title: 'Design',
      description: 'Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency\'s design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.',
    },
    {
      title: 'Engineering',
      description: 'Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.',
    },
    {
      title: 'Project Management',
      description: 'In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp\'s project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.',
    },
    {
      title: 'Collaboration',
      description: 'At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'SquareUp\'s success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.',
    },
    {
      title: 'Driving Success',
      description: 'With each project, SquareUp\'s reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp\'s success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.',
    },
  ]

  return (
    <Sections
      title="About Us"
      titleId="about-us-title"
      description="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
      bgUrl="src/assets/images/sections/2.png"
    >
      <div className="about__card">
        <div className="about__wrapper">
          <h3 className="about__title">About SquareUp</h3>
          <div className="about__description">
            <p>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
          </div>
        </div>
        <Image
          className="about__image"
          src="/src/assets/images/about/banner.png"
        />
      </div>
      <h3 className="about__story-title h2">Our Story</h3>
      <Grid columns={2} isOrderList={true}>
        {aboutData.map((about, index) => (
          <ProcessCard
            key={index}
            {...about}
          />
        ))}
      </Grid>
    </Sections>
  )
}

export default About