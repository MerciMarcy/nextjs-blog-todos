import type { NextPage } from 'next';
import Image from 'next/image';

import Auth from '../components/Auth';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
};

export default Home;
