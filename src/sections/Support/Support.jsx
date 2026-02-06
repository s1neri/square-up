import './Support.scss'
import Sections from "@/layouts/Sections";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Range from "@/components/Range";
import Button from "@/components/Button";

const Support = () => {

  return (
    <Sections
      title="What our Clients say About us"
      titleId="support-title"
      description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
      bgUrl="src/assets/images/sections/4.png"
      logo={true}
      button={true}
    >
      <div className="support">
        <form action="" className="support__form" id="myForm">
          <Field
            className="support__form-cell"
            label="Full Name"
            placeholder="Ivan"
            isRequired
          />
          <Field
            className="support__form-cell"
            label="Email"
            type="email"
            placeholder="example@example.com"
            isRequired
          />
          <div className="support__form-cell field support__form-cell--wide">
            <div className="support__form-checkbox-title h6">Why are you contacting us?</div>
            <div className="support__form-checkbox-group">
              <Checkbox
                className="support__form-checkbox"
                label="Web Design"
              />
              <Checkbox
                className="support__form-checkbox"
                label="Collaboration"
              />
              <Checkbox
                className="support__form-checkbox"
                label="Mobile App Design"
              />
              <Checkbox
                className="support__form-checkbox"
                label="Others"
              />
            </div>
          </div>
          <div className="support__form-cell field support__form-cell--wide">
            <Range
              className="support__form-range"
              label="Your Budget"
              description="Slide to indicate your budget range"
              min="0"
              max="10000"
              value="5000"
              step="1"
            />
          </div>
          <Field
            className="support__form-cell support__form-cell--wide"
            label="Your Message"
            type="textarea"
            placeholder="Hi! I have a question..."
            isRequired
          />
          <Button
            className="support__form-submit-button"
            label="Submit"
            type="submit"
            form="myForm"
            largePadding
          />
        </form>
      </div>
    </Sections>
  )
}

export default Support