module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    restParams: true,
  },
};
