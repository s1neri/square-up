import './Pin.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";

const Pin = (props) => {
  const {
    className,
    iconName,
  } = props

  return (
    <div
      className={classNames(className, 'pin')}
    >
      <Icon
        name={iconName}
        hasFill={true}
        bigSize={true}
      />
    </div>
  )
}

export default Pin