import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  
  return (
    <header className={styles.header}>
      <nav className={styles.navigate}>
        <NavLink to='/' > Home</NavLink>
        <NavLink to='/create'> Create User </NavLink>
      </nav>
    </header>
  )
}

export default Header