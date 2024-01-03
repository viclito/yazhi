import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'
import mail from '@/public/gmail.png'
import phone from '@/public/telephone.png'
import whatsapp from '@/public/whatsapp.png'


const Footer:React.FC = () => {

    const phoneNumber = '8675463333'
    
    const emailAddress = 'sriannalakshmitrust@gmail.com'; // Replace this with your email address
    const whatsappNumber = '6381079511'; // Replace this with your WhatsApp number

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const handleWhatsAppClick = () => {
        window.location.href = `https://wa.me/${whatsappNumber}`;
    };
  return (
    <>
        <div id={styles.contact}>
            <div className={styles.topic}> Location & Contact Details</div>
            <div className={styles.inner}>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <p>Company Name : </p>
                        <h4>Yazhi Promoters & Builders</h4>
                    </div>
                    <div className={styles.box}>
                        <p>Designation : </p>
                        <h4>MANAGING DIRECTORS</h4>
                    </div>
                    <div className={styles.innerbox}>
                        <div className={styles.box}>
                            <p>Name : </p>
                            <h4>R.Praveen Kumar</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Phone : </p>
                            <h4>8675463333</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Email : </p>
                            <h4>praveenthala551@gmail.com</h4>
                        </div>
                    </div>
                    <div className={styles.innerbox}>
                        <div className={styles.box}>
                            <p>Name : </p>
                            <h4>Jagadeeshwaran L</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Phone : </p>
                            <h4>6383417063</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Email : </p>
                            <h4>jagadeeshwaranloganathan@gmail.com</h4>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <p>Address : </p>
                        <h4>17 , Ramnagar , 2nd Street , <br /> Gobi - 638452</h4>
                    </div>
                    

                </div>
                <div className={styles.map}>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.37518923541!2d77.42489817603366!3d11.452822017346605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d9ed3c2229d%3A0xe2922757c9f47383!2s2nd%2C%2017%2C%20Ram%20Nagar%20Rd%2C%20Ram%20Nagar%2C%20Gobichettipalayam%2C%20Tamil%20Nadu%20638452!5e0!3m2!1sen!2sin!4v1704114473715!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen // Use 'allowFullScreen' instead of 'allowfullscreen'
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
            
            <div className={styles.topic}> Account Details</div>

            <div className={styles.inner2}>
                <div className={styles.boxes2}>
                    <div className={styles.one}>
                        <div className={styles.box}>
                            <p>UPI ID : </p>
                            <h4>praveenthala551@okaxis</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Google Pay / Phone Pay: </p>
                            <h4>8807124650</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Bank Name : </p>
                            <h4>State Bank of India</h4>
                        </div>
                    </div>

                    <div className={styles.one}>
                        <div className={styles.box}>
                            <p>Account Name : </p>
                            <h4>PRAVEEN KUMAR R</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Account Number : </p>
                            <h4>20408107578</h4>
                        </div>
                        <div className={styles.box}>
                            <p>IFSC Code : </p>
                            <h4>SBIN0003130</h4>
                        </div>
                        <div className={styles.box}>
                            <p>Account Type : </p>
                            <h4>Savings Account</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        

        <div id={styles.clickable}>
            <div className={styles.inner}>
                <div className={styles.btn} onClick={handlePhoneClick}>
                    <p>Call Us</p>
                    <div className={styles.line}></div>
                    <Image src={phone} alt=''/>
                </div>
                <div className={styles.btn} onClick={handleEmailClick}>
                    <p>Mail us </p>
                    <div className={styles.line}></div>
                    <Image src={mail} alt=''/>
                </div>
                <div className={styles.btn} onClick={handleWhatsAppClick }>
                    <p>Message us</p>
                    <div className={styles.line}></div>
                    <Image src={whatsapp} alt=''/>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Footer