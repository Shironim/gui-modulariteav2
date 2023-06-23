module.exports = {
  packagerConfig: {
    asar: true,
    icon: './src/assets/tealinuxLogo.png',
    name: 'Modularitea',
    platform: 'linux',
    arch: 'x64',
    executableName: 'modularitea',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-deb',
      config: {
        options:{
          maintener: "Doscom",
          homepage: "https://tealinuxos.org/",
          icon: './src/assets/tealinuxLogo.png'
        }
      },
    },
  ],
  buildIdentifier: 'modularitea-app-build',
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/index.html',
              js: './src/renderer.jsx',
              name: 'main_window',
              preload: {
                js: './src/preload.js',
              },
            },
          ],
        },
      },
    },
  ],
};
