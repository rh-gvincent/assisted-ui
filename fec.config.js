const path = require('path');
const {dependencies, insights } = require('./package.json');

const moduleName = insights.appname.replace(/-(\w)/g, (_, match) => match.toUpperCase());

module.exports = {
  appUrl: ['/ai'],
  debug: true,
  useProxy: true,
  proxyVerbose: true,
  /**
   * Change to false after your app is registered in configuration files
   */
  interceptChromeConfig: true,
  moduleFederation: {
    moduleName,
    exclude: ['react-router-dom'],
    exposes: {
      './RootApp': path.resolve(__dirname, './src/AppEntry.tsx'),
      './AssistedInstallerDetailCard': path.resolve(__dirname, './src/assisted-ui-lib/ocm/components/clusterDetail/AssistedInstallerDetailCard.tsx'),
    },
    shared: [
      { 'react-redux': { requiredVersion: dependencies['react-redux'] } }
    ],
  },
  /**
   * Add additional webpack plugins
   */
  plugins: [],
  _unstableHotReload: process.env.HOT === 'true',
  routes: {
    '/mockdata': {
      host: 'http://prod.foo.redhat.com:8010',
    },
  },
};
