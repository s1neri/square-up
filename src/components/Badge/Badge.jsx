import './Badge.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Badge = (props) => {
  const {
    className,
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel,
    isLink,
    href,
    target,
  } = props

  const Component = isLink ? 'a' : 'div'
  const LinkProps = { href, target }
  const specificProps = isLink && LinkProps

  return (
    <Component
      className={classNames(className, 'badge')}
      {...specificProps}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          hasFill={hasFillIcon}
          ariaLabel={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </Component>
  )
}

export default Badge