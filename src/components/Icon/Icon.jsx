import './Icon.scss'
import classNames from 'classnames'
import { Icon as MinistaIcon} from 'minista'

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    ariaLabel,
    bigSize = false,
  } = props

  return (
    <span
      className={classNames(className, 'icon')}
      aria-label={ariaLabel}
      data-size={bigSize}
    >
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}

export default Icon