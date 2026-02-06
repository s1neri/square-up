import './StartProject.scss'
import {Image} from "minista";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

const StartProject = () => {

  return (
    <section
      className="start-project container"
    >
      <div className="start-project__main">
        <header className="start-project__header">
          <Image
            className="start-project__logo"
            src="/src/assets/images/start-project/logo.svg"
          />
          <div className="start-project__wrapper">
            <h2 className="start-project__title h4">Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h2>
            <div className="start-project__description">
              <p>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
            </div>
          </div>
        </header>
        <div className="start-project__body">
          <div className="start-project__container">
            <span className="start-project__welcome">Welcome to SquareUp</span>
            <Badge className="start-project__badge">
              Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
            </Badge>
          </div>
          <Button
            className="start-project__button"
            label="Start Project"
          />
        </div>
      </div>
    </section>
  )
}

export default StartProject