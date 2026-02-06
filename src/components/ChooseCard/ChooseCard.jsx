import './ChooseCard.scss'
import Pin from "@/components/Pin";

const ChooseCard = (props) => {
  const {
    iconName,
    title,
    description,
  } = props

  return (
    <div className="choose-card">
      <header className="choose-card__header">
        <Pin
          className="choose-card__pin"
          iconName={iconName}
        />
        {title && <h3 className="choose-card__title h5">{title}</h3>}
      </header>
      <div className="choose-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChooseCard