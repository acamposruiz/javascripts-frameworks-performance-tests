const replace = require('replace-in-file');
const path = require('path');

var fs = require('fs')
  , _ = require('underscore');

var buildend = path.resolve(__dirname, "../builds/react");


/*
const options = [
  {
    //Single file
    files: path.resolve(__dirname, 'build/asset-manifest.json'),

    //Replacement to make (string or regex)
    from: /: "static/g,
    to: ': "/js-frameworks-tests/builds/react/static',
  },
  {
    //Single file
    files: [
      path.resolve(__dirname, 'build/index.html'),
      path.resolve(__dirname, 'build/static/js/!*.js'),
      path.resolve(__dirname, 'build/static/css/!*.css'),
      path.resolve(__dirname, 'build/service-worker.js')
    ],

    //Replacement to make (string or regex)
    from: /static/g,
    to: 'js-frameworks-tests/builds/react/static',
  }
];

options.forEach(option => {
  replace(option)
    .then(changedFiles => {
      console.log('Modified files:', changedFiles.join(', '));
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
});
*/


function rmDir(dirPath) {
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        rmDir(filePath);
    }
  if (buildend !== dirPath) fs.rmdirSync(dirPath);
};

rmDir(buildend);