import React, { useState, useEffect, useContext } from 'react';
import { FeatureContext } from '../context/Feature';

const Footer = () => {
  const [showFeature, setShowFeature] = useState(false);
  const { getFeatureFlag } = useContext(FeatureContext);

  useEffect(() => {
    getFeatureFlag('ENABLE_US')
      .then((val) => setShowFeature(val))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {showFeature ? <div>US CUSTOMER SPEICAL OFFER</div> : null}
      <footer>Footer</footer>
    </>
  );
};

export default Footer;
