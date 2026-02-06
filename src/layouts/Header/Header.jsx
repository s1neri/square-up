import './Header.scss'
import Logo from "@/components/Logo";
import classNames from "classnames";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

const Header = (props) => {
  const {
    url,
  } = props

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
  ]

  return (
    <header
      className="header"
      data-js-overlay-menu
    >
      <div className="header__inner container">
        <Logo
          className="header__logo"
          loading="eager"
        />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={classNames('header__menu-link', {
                      'is-active': href === url
                    })}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            href="/contact"
            className="header__menu-button"
            type="button"
            label="Contact Us"
          />
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}

export default Header