const { dependencies: deps } = require('../package.json');

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}

module.exports = {
  exposes: {},
  remotes: {
    ui: `remote_app@${getRemoteEntryUrl(3002)}`
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      // eager: true,
      // requiredVersion: deps.react
    },
    'react-dom': {
      singleton: true,
      // eager: true,
      // requiredVersion: deps['react-dom']
    },
    'react-router-dom': {
      singleton: true,
      // eager: true,
      // requiredVersion: deps['react-router-dom']
    }
  }
};
