import Sections from "@/layouts/Sections";
import SectionDescription from "@/components/SectionDescription";
import Grid from "@/components/Grid";
import ChooseCard from "@/components/ChooseCard";

const ListOptions = () => {

  const optionData = [
    {
      title: 'Design',
      description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences. ',
      badge: 'Our design services include:',
      items: [
        {
          nameGroup: 'User Experience (UX) Design',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'User Research and Persona Development',
            },
            {
              iconName: 'crown',
              description: 'Information Architecture and Wireframing',
            },
            {
              iconName: 'crown',
              description: 'Interactive Prototyping and User Testing',
            },
            {
              iconName: 'crown',
              description: 'UI Design and Visual Branding',
            },
          ]
        },
        {
          nameGroup: 'User Interface (UI) Design',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'Intuitive and Visually Appealing Interface Design',
            },
            {
              iconName: 'crown',
              description: 'Custom Iconography and Illustration',
            },
            {
              iconName: 'crown',
              description: 'Typography and Color Palette Selection',
            },
            {
              iconName: 'crown',
              description: 'Responsive Design for Various Devices',
            },
          ]
        },
        {
          nameGroup: 'Branding and Identity',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'Logo Design and Visual Identity Development',
            },
            {
              iconName: 'crown',
              description: 'Brand Strategy and Positioning',
            },
            {
              iconName: 'crown',
              description: 'Brand Guidelines and Style Guides',
            },
            {
              iconName: 'crown',
              description: 'Marketing Collateral Design (Brochures, Business Cards, etc.)',
            },
          ]
        },
      ]
    },
    {
      title: 'Engineering',
      description: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
      badge: 'Our engineering services include:',
      items: [
        {
          nameGroup: 'Web Development',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'User Research and Persona Development',
            },
            {
              iconName: 'crown',
              description: 'Information Architecture and Wireframing',
            },
            {
              iconName: 'crown',
              description: 'Interactive Prototyping and User Testing',
            },
            {
              iconName: 'crown',
              description: 'UI Design and Visual Branding',
            },
          ]
        },
        {
          nameGroup: 'Mobile App Development',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'Intuitive and Visually Appealing Interface Design',
            },
            {
              iconName: 'crown',
              description: 'Custom Iconography and Illustration',
            },
            {
              iconName: 'crown',
              description: 'Typography and Color Palette Selection',
            },
            {
              iconName: 'crown',
              description: 'Responsive Design for Various Devices',
            },
          ]
        },
        {
          nameGroup: 'Custom Software Development',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'Logo Design and Visual Identity Development',
            },
            {
              iconName: 'crown',
              description: 'Brand Strategy and Positioning',
            },
            {
              iconName: 'crown',
              description: 'Brand Guidelines and Style Guides',
            },
            {
              iconName: 'crown',
              description: 'Marketing Collateral Design (Brochures, Business Cards, etc.)',
            },
          ]
        },
      ]
    },
    {
      title: 'Project Management',
      description: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.',
      badge: 'Our project management services include:',
      items: [
        {
          nameGroup: 'Project Planning and Scoping',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'User Research and Persona Development',
            },
            {
              iconName: 'crown',
              description: 'Information Architecture and Wireframing',
            },
            {
              iconName: 'crown',
              description: 'Interactive Prototyping and User Testing',
            },
            {
              iconName: 'crown',
              description: 'UI Design and Visual Branding',
            },
          ]
        },
        {
          nameGroup: 'Agile Development',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'Intuitive and Visually Appealing Interface Design',
            },
            {
              iconName: 'crown',
              description: 'Custom Iconography and Illustration',
            },
            {
              iconName: 'crown',
              description: 'Typography and Color Palette Selection',
            },
            {
              iconName: 'crown',
              description: 'Responsive Design for Various Devices',
            },
          ]
        },
        {
          nameGroup: 'Quality Assurance and Testing',
          chooseItems: [
            {
              iconName: 'crown',
              description: 'Logo Design and Visual Identity Development',
            },
            {
              iconName: 'crown',
              description: 'Brand Strategy and Positioning',
            },
            {
              iconName: 'crown',
              description: 'Brand Guidelines and Style Guides',
            },
            {
              iconName: 'crown',
              description: 'Marketing Collateral Design (Brochures, Business Cards, etc.)',
            },
          ]
        },
      ]
    },
  ]

  return (
      <Sections
        title="Our Services"
        titleId="services-title"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        bgUrl="src/assets/images/sections/1.png"
      >
        {optionData.map((element, index) => (
          <SectionDescription
            title={element.title}
            description={element.description}
            badge={element.badge}
            key={index}
            items={element.items}
          >
            {(chooseItems) => (
              <Grid columns={4}>
                {chooseItems.map((choose, index) => (
                  <ChooseCard
                    key={index}
                    {...choose}
                  />
                ))}
              </Grid>
            )}
          </SectionDescription>
        ))}
      </Sections>
  )
}

export default ListOptions