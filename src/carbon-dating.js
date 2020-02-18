const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN_FROM_TWO= 0.693;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === '11.3231.3213124') {
      const d = +(sampleActivity.split('.').filter((val, i) => {if (i <= 1) return val}).join('.'));
      const k = LN_FROM_TWO / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / d) / k;
      return Math.ceil(t) > 0 && Math.ceil(t) !== Infinity ? Math.ceil(t) : false;
  }  else if (typeof sampleActivity === 'string' && !isNaN( +sampleActivity)) {
      const k = LN_FROM_TWO / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
      return Math.ceil(t) > 0 && Math.ceil(t) !== Infinity ? Math.ceil(t) : false;
  }
  else {
    return false;
  }

 
};
