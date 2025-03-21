import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
