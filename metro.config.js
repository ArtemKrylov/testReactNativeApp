const {getDefaultConfig} = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    transformer: {
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'scss', 'sass'],
    },
  };
})();
