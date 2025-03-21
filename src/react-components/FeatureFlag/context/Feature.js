import React, { useEffect, useState } from 'react';
import featureService from '../service/getFeature';

export const FeatureContext = React.createContext();

export const FeatureContextProvider = ({ children }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    featureService
      .getAllFeatures()
      .then((features) => setFeatures(features))
      .catch((err) => {
        console.error(err);
        setFeatures([]);
      });
  }, []);

  const getFeatureFlag = async (featureName) => {
    const value = await featureService.getFeatureFlag(featureName, false);
    return value;
  };

  return (
    <FeatureContext.Provider value={{ features, getFeatureFlag }}>
      {children}
    </FeatureContext.Provider>
  );
};
