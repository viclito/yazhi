import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'
import styles from './navbar.module.scss'
import Link from 'next/link'

const Navbar:React.FC = () => {
  return (
    <>
        <div className={styles.navbar}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <Image src={logo} width={160} height={70} alt='logo'/>
                </div>
                <div className={styles.navlist}>
                    
                    <p>About</p>
                    <p>ContactUs</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar