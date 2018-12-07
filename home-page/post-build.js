const postBuild = require('../commons/post-build');
const path = require('path');

const options = [
  {
    //Single file
    files: path.resolve(__dirname, 'build/asset-manifest.json'),

    //Replacement to make (string or regex)
    from: /: "static/g,
    to: ': "/jsTestsByGamming/builds/home/static',
  },
  {
    //Single file
    files: [
      path.resolve(__dirname, 'build/index.html'),
      path.resolve(__dirname, 'build/static/js/*.js'),
      path.resolve(__dirname, 'build/static/css/*.css'),
      path.resolve(__dirname, 'build/service-worker.js')
    ],

    //Replacement to make (string or regex)
    from: /static/g,
    to: 'jsTestsByGamming/builds/home/static',
  },
  {
    //Single file
    files: [
      path.resolve(__dirname, 'build/static/js/*.js')
    ],

    //Replacement to make (string or regex)
    from: /\.\.\/static/g,
    to: 'jsTestsByGamming/builds/home/static',
  }
];

const paths = {
  rootPath: __dirname,
  buildEndPath: "../builds/home",
  buildOriginPath: "build"
};

postBuild(paths, options);
