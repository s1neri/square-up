import './ProcessCard.scss'
import classNames from 'classnames'

const ProcessCard = (props) => {
  const {
    title,
    description,
  } = props

  return (
    <div
      className="process-card"
    >
      <div className="process-card__wrapper">
        <span className="process-card__number"></span>
        <h4 className="process-card__title">{title}</h4>
      </div>
      <div className="process-card__description">{description}</div>
    </div>
  )
}

export default ProcessCard