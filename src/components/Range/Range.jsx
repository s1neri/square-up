import './Range.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const Range = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    description,
    min,
    max,
    value,
    step,
  } = props

  return (
    <div
      className={classNames(className, 'range')}
      style={{"--value": value}}
      data-js-range=''
    >
      <div className="range__wrapper">
        <label
          className="range__label h6"
          htmlFor={id}
        >
          {label}
        </label>
        {description && (
          <div className="range__description">{description}</div>
        )}
      </div>
      <input
        className="range__input"
        id={id}
        type="range"
        min={min}
        max={max}
        defaultValue={value}
        step={step}
        data-js-range-input=''
      />
    </div>
  )
}

export default Range