import './Logo.scss'
import classNames from 'classnames'
import logoImgSrc from '@/assets/images/logo.svg'

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
  } = props
  const title = 'Home'

  return (
    <a
      className='logo'
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className={classNames(className, 'logo')}
        src={logoImgSrc}
        alt=""
        width="178"
        height="60"
        loading={loading}
      />
    </a>
  )
}

export default Logo