module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@prisma/client': './node_modules/@prisma/client/index.js',
        '^@sentry/(.+)': './node_modules/@sentry/\\1',
        '^@(.+)': './src/\\1'
      }
    }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
}
