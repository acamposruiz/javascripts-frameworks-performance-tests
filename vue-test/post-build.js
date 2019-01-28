const postBuild = require('../commons/post-build');
const path = require('path');

const options = [
  {
    //Single file
    files: path.resolve(__dirname, 'dist/index.html'),

    //Replacement to make (string or regex)
    from: /=\//g,
    to: '=/jsTestsByGamming/builds/vue/',
  },
  {
    //Single file
    files: [
      path.resolve(__dirname, 'dist/js/*.js')
    ],

    //Replacement to make (string or regex)
    from: /img\//g,
    to: 'jsTestsByGamming/builds/vue/img/',
  }
];

const paths = {
  rootPath: __dirname,
  buildEndPath: "../builds/vue",
  buildOriginPath: "dist"
};

postBuild(paths, options);
