import './Footer.scss'
import classNames from 'classnames'
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const Footer = () => {
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Works',
      href: '/works',
    },
    {
      label: 'Process',
      href: '/process',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Careers',
      href: '/careers',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  const socialsLinks = [
    {
      label: 'Facebook',
      iconName: 'facebook',
    },
    {
      label: 'Twitter',
      iconName: 'twitter',
    },
    {
      label: 'LinkedIn',
      iconName: 'linked-in',
    },
  ]

  const extraLinks = [
    {
      iconName: 'mail',
      label: 'hello@squareup.com',
      type: 'mailto:hello@squareup.com',
    },
    {
      iconName: 'tel',
      label: '+91 91813 23 2309',
      type: 'tel:+9191813232309',
    },
    {
      iconName: 'geo',
      label: 'Somewhere in the World',
    },
  ]

  return (
    <footer
      className="footer"
    >
      <div className="footer__inner container">
        <div className="footer__main">
          <Logo className="footer__logo"/>
          <nav className="footer__navigation">
            <ul className="footer__navigation-list">
              {menuItems.map(({label, href}, index) => (
                <li className="footer__navigation-item" key={index}>
                  <a
                    className="footer__navigation-link"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__soc1als">
            <div className="footer__soc1als-description">
              <p>Stay Connected</p>
            </div>
            <div className="footer__soc1als-wrapper">
              {socialsLinks.map(({label, iconName}, index) => (
                <Button
                  className="footer__soc1als-button"
                  href="/stream-vibe/"
                  mode="gradient"
                  target="_blank"
                  label={label}
                  iconName={iconName}
                  isLabelHidden
                  hasFillIcon
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="footer__extra">
          <div className="footer__extra-links">
            {extraLinks.map(({iconName, label, type}, index) => (
                <a
                  className="footer__extra-label"
                  href={type}
                >
                  <Icon
                    className="footer__extra-icon"
                    name={iconName}
                    hasFill
                  />
                  {label}
                </a>
            ))}
          </div>
          <div className="footer__copyright">
            <p>
              @ <time dateTime="2023">2023</time> SquareUp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer