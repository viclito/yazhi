import React from 'react'
import styles from './works.module.scss'
import Image from 'next/image'
import construction from '@/public/construction.jpeg'
import property from '@/public/property.webp'
import personal from '@/public/personal.jpg'
import privates from '@/public/private.jpg'
import bg from '@/public/bg.jpg'
import collateral from '@/public/collateral.png'
import consulting from '@/public/consulting.jpg'
import msme from '@/public/msme.jpg'

const Works = () => {
  return (
    <>
        <div className={styles.works}>
            <div className={styles.inner}>
                <div className={styles.topic}> Our Services </div>
                <div className={styles.work}>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={construction} alt=''/>
                            <h5>Construction of the new building commenced, leading to increased sales of construction materials.</h5>
                        </div>
                        <p>Construction & Sales</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={property} alt=''/>
                            <h5>Property loans enable individuals to purchase homes by offering financial assistance through lending institutions.</h5>
                        </div>
                        <p>Property Loans</p>
                        
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={personal} alt=''/>
                            <h5>Personal loans provide flexible financial support for various needs, from emergencies to planned expenses.</h5>
                        </div>
                        <p>Personal Loans</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={privates} alt=''/>
                            <h5>Private finance loans offer customized lending solutions, often tailored to individual or niche financial requirements.</h5>
                        </div>
                        <p>Private Finance Loans</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={bg} alt=''/>
                            <h5>BG (Bank Guarantee) loans facilitate large-scale transactions, securing financial commitments with collateral-backed assurances.</h5>
                        </div>
                        <p>Bg Loans</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={collateral} alt=''/>
                            <h5>Collateral secures loans, ensuring lender safety, while sharing distributes risk among multiple parties in investments or ventures.</h5>
                        </div>
                        <p>Collateral & Sharing</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={consulting} alt=''/>
                            <h5>Consulting involves providing expert advice and guidance to businesses, aiding in strategic decisions and problem-solving.</h5>
                        </div>
                        <p>Consulting</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <Image src={msme} alt=''/>
                            <h5>MSME (Micro, Small, and Medium Enterprises) loans support small businesses with financial assistance for growth and development.</h5>
                        </div>
                        <p>MSME loans</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Works