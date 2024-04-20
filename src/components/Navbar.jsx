import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className={`${styles.stickyNavbar}`} style={{ top: scrollPosition > window.innerHeight / 2 ? 0 : '-100px' }}>
      <nav className={`${styles.navbar}`} style={{ backgroundColor: scrollPosition > window.innerHeight / 2 ? '#000' : '#fff' }}>
        <Link to="/">
          <img src={logo} alt="Logo" className={`${styles.logo}`} style={{ width: '60px', height: '50px' }} />
        </Link>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li onClick={removeActive}>
            <Link to="/news" className={`${styles.navLink}`}>
              News
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/services" className={`${styles.navLink}`}>
              Services
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/" className={`${styles.navLink}`}>
              Home
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/aboutus" className={`${styles.navLink}`}>
              About Us
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/contactus" className={`${styles.navLink}`}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
