import type { NextPage } from 'next';
import { LuxuryRental } from '../src/containers/LuxuryRental';
import { MainLayout } from '../src/layouts';

const Home: NextPage = () => {
  return (
      <MainLayout>
        <LuxuryRental />
      </MainLayout>
  )
}

export default Home
