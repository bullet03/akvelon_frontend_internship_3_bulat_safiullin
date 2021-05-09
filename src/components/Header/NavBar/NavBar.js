import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/functions">Functions</Link>
    </nav>
  );
}

export default NavBar