import './ServicesCard.scss'
import Pin from "@/components/Pin";
import Button from "@/components/Button";
import classNames from "classnames";

const ServicesCard = (props) => {
  const {
    className,
    iconName,
    title,
    description,
    buttonLabel,
    hasButton = false,
  } = props

  return (
    <div
      className={classNames('services-card', className)}
    >
      <div className="services-card__wrapper">
        <Pin
          className="services-card__pin"
          iconName={iconName}
        />
        <div className="services-card__info">
          <h3 className="services-card__title h4">{title}</h3>
          <div className="services-card__description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      {buttonLabel && (
        <Button
          className="services-card__button"
          label={buttonLabel}
          mode="gray-15"
        />
      )}
    </div>
  )
}

export default ServicesCard