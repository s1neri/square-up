import './Field.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";
import {startWith} from "postcss-pxtorem/lib/filter-prop-list";

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | 'email' | 'textarea'
     */
    type,
    placeholder,
    isRequired,
    inputMode,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div
      className={classNames(className, 'field')}
    >
      <label
        htmlFor={id}
        className="field__label h6"
      >
        {label} {isRequired && (
          <span
            className="field__required-star"
            aria-hidden={true}
          >
            *
          </span>
      )}
      </label>
      <div className="field__body">
        <Component
          className="field__control"
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
        />
      </div>
    </div>
  )
}

export default Field