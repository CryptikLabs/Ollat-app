module.exports = {
  displayName: '@tallo/store',
  preset: 'react-native',
  resolver: '@nx/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@react-navigation|react-redux|@reduxjs/toolkit|@react-native-firebase/(.*))/)',
  ],
  coverageDirectory: '../coverage/bswift-modules/store',
};
