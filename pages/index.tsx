import Navbar from '@/components/Navbar/Navbar'
import About from '@/components/about/About'
import Head from 'next/head'
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Works from '@/components/works/Works';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={inter.className} >
        <div className={styles.app}>
        <Navbar/>
        <About/>
        <Works/>
        <Footer/>
        </div>
      </div>
    </>
  )
}
