/*
* spa.js
* Root namespace module
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,      maxerr : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true,     vars : false,
  white  : true
 */
/*global $, spa */

var spa = function () {
  var initModule = function ( $container ) {
    $constainer.html(
      '<h1 style="display: inline-block; margin: 25px;">' + 'hello world!' + '</h1>'
    );
  };

  return { initModule: initModule };
}());
