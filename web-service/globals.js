global.baseDir = __dirname;
global.absPath = function ( path ) {
  return baseDir + path;
};

global.rqr = function ( file ) {
  return require( absPath( '/' + file ) );
};