import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Image from '@/components/Image'
import Card from '@/components/Card'
import Card1 from '@/components/Card1'
import Topbar from '@/components/Topbar'
import Post from '@/components/Post'
import Login from '@/pages/Login'
import Modal2 from '@/components/Modal2'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
    <Navbar></Navbar>
    <Image></Image>
    <Topbar></Topbar>
    <div className='row'>
    <div className='col-sm-8 '>
    <Card img='article1.png'  vector='hand.png' title='Article' maintitle='What if famous brands had regualar fonts? Meet RegularBrands' subtitle='Ive worked in UX for the better part of decade, From now on, I plan to rei...' username='Sarthak Kamra' userimage='sharthak.png'></Card>
    <Card img='article2.png' vector='education.png'  title='Education' maintitle='Tax Benefits for Investment under National Pension Scheme launched by Goverment.' subtitle='Ive worked in UX for the better part of decade, From now on, I plan to rei...' username='Sarah West' userimage='sarah.png'></Card>
   <Card1 img='article3.png'vector='cal1.png' title='Meetup' maintitle='Finance & Investment Elite Social Mixer @Lujiazui' location='Ahmedabad,India' info='Fri 12,Oct, 2018' infoimg='cal.png' userimg='ronal.png' locationimg='location.png' btnvalue='Visit Website' btncolor='#E56135' username='Ronal Jones'></Card1>
   <Card1  title='job' vector='brief1.png' maintitle='Software Developer' location='Noida,India' info='Innovaccer Analytics Private Ltd.' infoimg='briefcase.png' userimg='joseph.png' locationimg='location.png' btnvalue='Apply on Timesjob' btncolor='#02B875' username='Joseph Gray'></Card1>
   </div>
   <div className='col-4 '>
    <Post></Post>
   </div>
   </div>

      <div className=' fixed-bottom text-end mb-5 me-5 d-sm-none' >
        <div className='position-relative mb-5 me-5'>
        <img src='pencil.png' className='position-absolute mt-4 ms-4' style={{height:'5.4rem',width:'5.4rem'}}></img>

        <button className='rounded-circle btn ' style={{height:'8.4rem',width:'8.4rem',background:'linear-gradient(to bottom, #FF5C5C, #F0568A);'}} ></button>
        </div>
      </div>
    </div>

  )
}
