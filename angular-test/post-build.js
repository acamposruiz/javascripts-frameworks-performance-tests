const postBuild = require('../commons/post-build');
const path = require('path');

const options = [
  {
    //Single file
    files: path.resolve(__dirname, 'dist/index.html'),

    //Replacement to make (string or regex)
    from: /<base href="\/">/g,
    to: '<base href="/js-frameworks-tests/builds/angular/">',
  }
];

const paths = {
  rootPath: __dirname,
  buildEndPath: "../builds/angular",
  buildOriginPath: "dist"
};

postBuild(paths, options);
