import type { NextPage } from 'next'
import { MainLayout } from '../src/layouts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
      <MainLayout />
    </div>
  )
}

export default Home
