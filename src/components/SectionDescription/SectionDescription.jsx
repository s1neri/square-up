import './SectionDescription.scss'
import classNames from 'classnames'
import Grid from "@/components/Grid";
import ChooseCard from "@/components/ChooseCard";
import Badge from "@/components/Badge";

const SectionDescription = (props) => {
  const {
    className,
    title,
    description,
    badge,
    items,
    children,
  } = props

  return (
    <div
      className={classNames(className, 'section-description')}
    >
      <header className="section-description__header">
        <div className="section-description__wrapper">
          <h3 className="section-description__title">{title}</h3>
          <div className="section-description__description">
            <p>{description}</p>
          </div>
        </div>
        {badge && <Badge className="section-description__badge">{badge}</Badge>}
      </header>
      {items ? (
        items.map(({nameGroup, chooseItems}, index) => (
          <div className="section-description__body" key={index}>
            {nameGroup && <h4 className="section-description__body-title">{nameGroup}</h4>}
            {children(chooseItems)}
          </div>
        ))
      ) : (
        children
      )}
    </div>
  )
}

export default SectionDescription