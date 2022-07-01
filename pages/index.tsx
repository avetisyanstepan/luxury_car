import type { NextPage } from 'next';
import { LuxuryRental } from '../src/containers/LuxuryRental';
import { MainLayout } from '../src/layouts';

const Home: NextPage = () => {
  return (
      <MainLayout>
        <div className="bg-base_grey_100 h-full pt-8 px-5 rounded-lg w-full">
          <LuxuryRental />
        </div>
      </MainLayout>
  )
}

export default Home
