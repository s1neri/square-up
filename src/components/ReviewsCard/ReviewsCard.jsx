import './ReviewsCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";

const ReviewsCard = (props) => {
  const {
    title,
    description,
    reviewsPhoto,
    reviewsName,
    reviewsJob,
  } = props

  return (
    <div
      className="reviews-card"
    >
      <h3 className="reviews-card__title">{title}</h3>
      <div className="reviews-card__description">
        <p>{description}</p>
      </div>
      <div className="reviews-card__respondent">
        <div className="reviews-card__respondent-container">
          <Image
            className="reviews-card__respondent-image"
            src={reviewsPhoto}
          />
        </div>
        <div className="revies-card__respondent-wrapper">
          <span className="reviews-card__respondent-name">{reviewsName}</span>
          <p className="reviews-card__respondent-job">{reviewsJob}</p>
        </div>
        <Button
          className="reviews-card__respondent-button hidden-tablet"
          label="Open Website"
          mode="gray-15"
        />
      </div>
    </div>
  )
}

export default ReviewsCard