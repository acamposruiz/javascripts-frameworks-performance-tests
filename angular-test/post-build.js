const replace = require('replace-in-file');
const path = require('path');

var fs = require('fs')
  , _ = require('underscore');

var buildend = path.resolve(__dirname, "../builds/angular");

var replaceList = [];


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
}

function move(oldPath, newPath, callback) {

  fs.rename(oldPath, newPath, function (err) {
    if (err) {
      if (err.code === 'EXDEV') {
        copy();
      } else {
        callback(err);
      }
      return;
    }
    callback();
  });

  function copy() {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', function () {
      fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
  }
}


const options = [
  {
    //Single file
    files: path.resolve(__dirname, 'dist/index.html'),

    //Replacement to make (string or regex)
    from: /<base href="\/">/g,
    to: '<base href="/js-frameworks-tests/builds/angular/">',
  }
];


options.forEach(option => {
  replaceList.push(new Promise((resolve, reject) => {
    replace(option)
      .then(changedFiles => {
        resolve('Modified files:', changedFiles.join(', '));
      })
      .catch(error => {
        reject('Error occurred:', error)
      });
  }));
});

Promise.all(replaceList).then(msg => {
  console.log(msg);
  rmDir(buildend);
  move(path.resolve(__dirname, "dist"), buildend, function () {
    console.log("Build finished!");
  });
}).catch(reason => {
  console.log(reason);
});




