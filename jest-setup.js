import 'raf/polyfill'
import 'isomorphic-fetch'
import 'jest-localstorage-mock'

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
