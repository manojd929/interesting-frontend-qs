import React, { useState, useEffect, useContext } from 'react';
import { FeatureContext } from '../context/Feature';

const Header = () => {
  const [showFeature, setShowFeature] = useState(false);
  const { getFeatureFlag } = useContext(FeatureContext);

  useEffect(() => {
    getFeatureFlag('ENABLE_FR')
      .then((val) => setShowFeature(val))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Header</h1>
      {showFeature ? <div>Howdy Folks!!</div> : null}
    </>
  );
};

export default Header;
