import './Button.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    iconPosition = 'before',
    /**
     * (default) | 'transparent' | 'gradient' | 'gray-15'
     */
    mode = '',
    label,
    isLabelHidden,
    iconName,
    hasFillIcon,
    form,
    largePadding,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linksProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linksProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      hasFill={hasFillIcon}
    />
  )

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
        ['button--large-padding']: largePadding,
      })}
      title={title}
      aria-label={title}
      form={form}
      {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button