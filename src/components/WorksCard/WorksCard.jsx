import './WorksCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

const WorksCard = (props) => {
  const {
    paragraph,
    photo,
    title,
    link,
    description,
  } = props

  return (
    <div className="works-card">
      <header className="works-card__header">
        <span className="works-card__paragraph">{paragraph}</span>
      </header>
      <div className="works-card__body">
        <Image
          className="works-card__image"
          src={photo}
        />
        <div className="works-card__wrapper">
          <div className="works-card__info">
            <h4 className="works-card__title">{title}</h4>
            <Badge
              className="works-card__badge"
              isLink
              href={link}
              target="_blank"
            >
              {link}
            </Badge>
          </div>
          <Button
            className="works-card__link"
            href={link}
            target="_blank"
            mode="gray-15"
            isLabelHidden
            iconName="arrow-top-right"
            hasFillIcon
          />
        </div>
        <div className="works-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorksCard