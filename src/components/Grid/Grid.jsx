import './Grid.scss'
import classNames from 'classnames'

const Grid = (props) => {
  const {
    columns = 1,
    children,
    isOrderList = false,
  } = props

  const ListTag = isOrderList ? 'ol' : 'ul'

  return (
    <ListTag
      className={classNames('grid', {
        [`grid--${columns}`]: columns > 1,
        ['grid--has-counter']: isOrderList,
      })}
    >
      {children.map((child, index) => (
        <li
          className="grid__item"
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default Grid