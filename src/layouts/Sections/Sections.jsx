import './Sections.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Button from "@/components/Button";

const Sections = (props) => {
  const {
    className,
    title,
    titleId,
    description,
    children,
    bgUrl,
    logo = false,
    button = false,
  } = props

  return (
    <section
      className={classNames(className, 'section container')}
      aria-labelledby={titleId}
    >
      <header className="section__header" style={{'--bg-image': `url(${bgUrl})`}}>
        {logo && (
          <Image
            className="section__logo"
            src="/src/assets/images/logo-icon.svg"
          />
        )}
        <div className="section__wrapper">
          <h2 className="section__title h3" id={titleId}>{title}</h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {button && (
          <Button
            className="section__button"
            label="Start Project"
          />
        )}
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}

export default Sections