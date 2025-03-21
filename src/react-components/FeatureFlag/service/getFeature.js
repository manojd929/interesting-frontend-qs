class Feature {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class FeatureFlag {
  constructor() {
    this.features = [];
  }

  addFeature(feature) {
    this.features.push(feature);
  }

  async getAllFeatures() {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(this.features), 1000)
    );
  }

  async getFeatureFlag(featureName, defaultValue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const requiredFeature = this.features.filter(
          (feat) => feat.name === featureName
        );
        requiredFeature.length
          ? resolve(requiredFeature[0].value)
          : reject(defaultValue);
      }, 0);
    });
  }
}

const f1 = new Feature('ENABLE_US', true);
const f2 = new Feature('ENABLE_FR', true);
const f3 = new Feature('ENABLE_IN', true);
const featureService = new FeatureFlag();
featureService.addFeature(f1);
featureService.addFeature(f2);
featureService.addFeature(f3);

export default featureService;
