import React from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import chairman from "@/public/mainlogo.jpg"

const About = () => {
  return (
    <div>
        <div className={styles.about}>
            <div className={styles.image}></div>
            <div className={styles.inner}>
                <div className={styles.topic}>
                   <h1>yAZHi</h1>
                   <p>Promoters & Builders</p>
                   <h6>Engineering & Construction</h6>
                </div>
                <div className={styles.manager}>
                    <div className={styles.content}>
                        <h4>Chairman :</h4>
                        <h5>R.Praveen Kumar</h5>
                    </div>
                    <div className={styles.images}>
                        <Image src={chairman} alt='' fill={true}/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About