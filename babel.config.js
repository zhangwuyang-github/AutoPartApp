module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './',
          '@api': './src/api',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@components': './src/components',
          '@containers': './src/containers',
          '@configs': './src/configs',
          '@helpers': './src/helpers',
          '@libs': './src/libs',
          '@routes': './src/routes',
          '@services': './src/services',
          '@store': './src/store',
          '@type': './src/type',
        },
      },
    ],
    [
      'import',
      {
        libraryDirectory: 'components',
        libraryName: 'teaset',
        camel2DashComponentName: false,
        customName: name => {
          if (name === 'TopView') {
            return 'teaset/components/Overlay/TopView';
          } else if (name === 'Theme') {
            return 'teaset/themes/Theme';
          } else {
            return `teaset/components/${name}/${name}`;
          }
        },
      },
    ],
  ],
};
