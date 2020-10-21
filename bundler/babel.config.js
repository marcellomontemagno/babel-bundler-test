module.exports = {
  presets: [
    [require.resolve('@babel/preset-env'),
      {
        targets: 'defaults',
        useBuiltIns: 'entry',
        corejs: '3.6.4'
      }
    ],
    require.resolve('@babel/preset-react')
  ]
};
