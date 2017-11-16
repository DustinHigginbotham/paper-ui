exports.config = {
  namespace: 'paper',
  generateDistribution: true,
  bundles: [
    { components: [
      'paper-app-bar',
      'paper-drawer-layout',
      'paper-header-layout',
    ] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
