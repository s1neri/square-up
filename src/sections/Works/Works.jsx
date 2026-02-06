import Sections from "@/layouts/Sections";
import SectionDescription from "@/components/SectionDescription";
import Grid from "@/components/Grid";
import WorksCard from "@/components/WorksCard";

const Works = () => {
  const worksData = {
    title: 'At SquareUp',
    description: 'We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.',
    badge: 'Here are ten examples of our notable works:',
    worksItems: [
      {
        paragraph: 'E-Commerce Platform for Fashion Hub',
        photo: '/src/assets/images/works/1.jpg',
        title: 'Chic Boutique',
        link: 'htttps:/www.chicboutique.com',
        description: 'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.',
      },
      {
        paragraph: 'Mobile App for Food Delivery Service',
        photo: '/src/assets/images/works/1.jpg',
        title: 'HungryBites',
        link: 'htttps:/www.hungrybites.com',
        description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
      },
      {
        paragraph: 'Booking and Reservation System for Event Management',
        photo: '/src/assets/images/works/2.jpg',
        title: 'EventMasters',
        link: 'htttps:/www.eventmasters.com',
        description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
      },
      {
        paragraph: 'Custom Software for Workflow Automation',
        photo: '/src/assets/images/works/1.jpg',
        title: 'ProTech Solutions',
        link: 'htttps:/www.protechsolutions.com',
        description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
      },
      {
        paragraph: 'E-Commerce Platform for Fashion Hub',
        photo: '/src/assets/images/works/1.jpg',
        title: 'Chic Boutique',
        link: 'htttps:/www.chicboutique.com',
        description: 'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.',
      },
      {
        paragraph: 'Mobile App for Food Delivery Service',
        photo: '/src/assets/images/works/2.jpg',
        title: 'HungryBites',
        link: 'htttps:/www.hungrybites.com',
        description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
      },
      {
        paragraph: 'Booking and Reservation System for Event Management',
        photo: '/src/assets/images/works/1.jpg',
        title: 'EventMasters',
        link: 'htttps:/www.eventmasters.com',
        description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
      },
      {
        paragraph: 'Custom Software for Workflow Automation',
        photo: '/src/assets/images/works/1.jpg',
        title: 'ProTech Solutions',
        link: 'htttps:/www.protechsolutions.com',
        description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
      },
      {
        paragraph: 'Custom Software for Workflow Automation',
        photo: '/src/assets/images/works/2.jpg',
        title: 'ProTech Solutions',
        link: 'htttps:/www.protechsolutions.com',
        description: 'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.',
      },
      {
        paragraph: 'E-Commerce Platform for Fashion Hub',
        photo: '/src/assets/images/works/1.jpg',
        title: 'Chic Boutique',
        link: 'htttps:/www.chicboutique.com',
        description: 'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.',
      },
    ],
  }


  return (
    <Sections
      title="Our Works"
      titleId="works-title"
      description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
      bgUrl="src/assets/images/sections/2.png"
    >
      <SectionDescription
        title={worksData.title}
        description={worksData.description}
        badge={worksData.badge}
      >
        <Grid columns={2}>
          {worksData.worksItems.map((work, index) => (
            <WorksCard
              key={index}
              {...work}
            />
          ))}
        </Grid>
      </SectionDescription>
    </Sections>
  )
}

export default Works