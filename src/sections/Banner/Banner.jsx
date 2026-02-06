import './Banner.scss'
import classNames from 'classnames'
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Grid from "@/components/Grid";
import {Image} from "minista";

const Banner = () => {
  const titleId = 'banner-title'

  const companiesLogo = [
    'src/assets/images/banner/companies/1.svg',
    'src/assets/images/banner/companies/2.svg',
    'src/assets/images/banner/companies/3.svg',
    'src/assets/images/banner/companies/4.svg',
    'src/assets/images/banner/companies/5.svg',
    'src/assets/images/banner/companies/6.svg',
  ]

  return (
    <div
      className="banner container"
      aria-labelledby={titleId}
    >
      <div className="banner__inner">
        <h1 className="banner__title">A Digital Product Studio<br/>that will Work</h1>
        <span className="banner__description">
          For <Badge>Startups</Badge>, <Badge>Enterprise leaders</Badge>, <Badge>Media & Publishers</Badge> and <Badge>Social Good</Badge>.
        </span>
        <div className="banner__buttons">
          <Button
            href="/works"
            className="banner__button"
            mode="transparent"
            type="button"
            label="Our Works"
          />
          <Button
            href="/contact"
            className="banner__button"
            type="button"
            label="Contact Us"
          />
        </div>
      </div>
      <div className="banner__companies">
        <span className="banner__companies-badge">Trusted By 250+ Companies</span>
        <Grid columns={6}>
          {companiesLogo.map((element, index) => (
            <div className="banner__companies-wrapper" key={index}>
              <Image
                className="banner__companies-image"
                src={element}
              />
            </div>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Banner