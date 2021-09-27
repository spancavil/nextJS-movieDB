import styles from '../styles/NavBar.module.scss'
import Link from 'next/link'

const NavBar = () => {
    return (
        <ul className ={styles.mili} >
            <Link href="/">
                <li><a>Home</a></li>
            </Link>
            <Link href="/login">
                <li><a>Login</a></li>
            </Link>
            <Link href="/signup"> 
                <li><a>Signup</a></li>
            </Link>
            <Link href="/data">
                <li><a>Data</a></li>
            </Link>
        </ul>
    )
}

export default NavBar
