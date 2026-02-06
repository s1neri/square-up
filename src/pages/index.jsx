import Banner from "@/sections/Banner";
import Services from "@/sections/Services";
import Choose from "@/sections/Choose";
import Reviews from "@/sections/Reviews";
import Questions from "@/sections/Questions";
import Support from "@/sections/Support";

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Banner />
      <Services />
      <Choose />
      <Reviews />
      <Questions />
      <Support />
    </>
  )
}
