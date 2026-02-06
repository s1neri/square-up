import Sections from "@/layouts/Sections";
import ReviewsCard from "@/components/ReviewsCard";
import Grid from "@/components/Grid";

const Reviews = () => {
  const reviewsData = [
    {
      title: 'SquareUp has been Instrumental in Transforming our Online Presence. ',
      description: 'Their team\'s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn\'t be happier.',
      reviewsPhoto: '/src/assets/images/reviews/1.jpg',
      reviewsName: 'John Smith',
      reviewsJob: 'CEO of Chic Boutique',
    },
    {
      title: 'Working with SquareUp was a breeze.',
      description: 'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.',
      reviewsPhoto: '/src/assets/images/reviews/2.jpg',
      reviewsName: 'Sarah Johnson',
      reviewsJob: 'Founder of HungryBites.',
    },
    {
      title: 'SquareUp developed a comprehensive booking and reservation system for our event management company',
      description: 'Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients\' event experiences.',
      reviewsPhoto: '/src/assets/images/reviews/3.jpg',
      reviewsName: 'Mark Thompson',
      reviewsJob: 'CEO of EventMasters',
    },
    {
      title: 'ProTech Solutions turned to SquareUp to automate our workflow',
      description: 'They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp\'s expertise and professionalism have made them a trusted technology partner.',
      reviewsPhoto: '/src/assets/images/reviews/4.jpg',
      reviewsName: 'Laura Adams',
      reviewsJob: 'COO of ProTech Solutions.',
    },
    {
      title: 'SquareUp designed and developed a captivating web portal for showcasing our real estate listings.',
      description: 'The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp\'s expertise in the real estate industry is unmatched.',
      reviewsPhoto: '/src/assets/images/reviews/5.jpg',
      reviewsName: 'Michael Anderson',
      reviewsJob: 'Founder of Dream Homes Realty.',
    },
    {
      title: 'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.',
      description: 'SquareUp\'s team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.',
      reviewsPhoto: '/src/assets/images/reviews/6.jpg',
      reviewsName: 'Emily Turner',
      reviewsJob: 'CEO of FitLife Tracker',
    },
  ]

  return (
    <Sections
      title="What our Clients say About us"
      titleId="reviews-id"
      description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
      bgUrl="src/assets/images/sections/3.png"
    >
      <Grid columns={2}>
        {reviewsData.map((review, index) => (
          <ReviewsCard
            key={index}
            {...review}
          />
        ))}
      </Grid>
    </Sections>
  )
}

export default Reviews