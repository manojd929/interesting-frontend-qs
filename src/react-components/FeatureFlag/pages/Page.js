import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { FeatureContextProvider } from '../context/Feature';

const Page = () => {
  return (
    <FeatureContextProvider>
      <Header />
      <Footer />
    </FeatureContextProvider>
  );
};

export default Page;
