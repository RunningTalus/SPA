/*
 * spa.shell.js
 * Shell module for SPA
 */

/*jslint         browser : true, continue : true,
 devel  : true, indent  : 2,      maxerr : 50,
 newcap : true, nomen   : true, plusplus : true,
 regexp : true, sloppy  : true,     vars : false,
 white  : true
 */
/*global $, spa */

spa.shell = (function () {
//----------BEGIN MODULE SCOPE VARIABLES----------
  var
    configMap = {
      main_html : String()
      + '<div class="spa-shell-head">'
        + '<div class="spa-shell-head-logo"></div>'
        + '<div class="spa-shell-head-acct"></div>'
        + '<div class="spa-shell-head-search"></div>'
      + '</div>'
      + '<div class="spa-shell-main">'
        + '<div class="spa-shell-main-nav"></div>'
        + '<div class="spa-shell-main-content"></div>'
      + '</div>'
      + '<div class="spa-shell-foot"></div>'
      + '<div class="spa-shell-chat"></div>'
      + '<div class="spa-shell-modal"></div>'
      chat_extend_time : 1000,
      chat_retract_time : 300,
      chat_extend_height : 450,
      chat_retract_height : 15
    },
    stateMap = { $container : null },
    jqueryMap = {},

    setJqueryMap, toggleChat, initModule;
//-----------END MODULE SCOPE VARIABLES----------

//----------BEGIN UTILITY METHODS----------
// Reserved for functions that don't interact with page elements.
//----------END UTILITY METHODS----------

//----------BEGIN DOM METHODS----------
// Begin DOM method /setJqueryMap/
setJqueryMap = function () {
  var $container = stateMap.$container;
  jqueryMap = {
    $container : $container,
    $chat : $container.find('.spa-shell-chat')
  };
};
// End DOM method /setJqueryMap/

//Begin DOM method /toggleChat/
//Purpose   :
//Settings  :
//Arguments :
//Returns   :
  toggleChat = function(){};
//End DOM method /toggleChat/
//----------END DOM METHODS----------

//----------BEGIN EVENT HANDLERS----------
// Reserved for jQuery event handlers
//----------END EVENT HANDLERS----------

//----------BEGIN PUBLIC METHODS----------

// Begin Public method /initModule/
initModule = function ( $container ) {
  stateMap.$container = $container;
  $container.html( configMap.main_html );
  setJqueryMap();
};
// End Public method /initModule/
  return { initModule : initModule };
//----------END PUBLIC METHODS----------
})();