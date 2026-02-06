import Sections from "@/layouts/Sections";
import Works from "@/sections/Works";

export const metadata = {
  title: 'Works',
}

export default () => {
  return (
    <>
      <Works />
      <Sections
        title="Let us Bring your Ideas to Life in the Digital World."
        titleId="services-title"
        description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        bgUrl="src/assets/images/sections/4.png"
        button={true}
        logo={true}
      />
    </>
  )
}