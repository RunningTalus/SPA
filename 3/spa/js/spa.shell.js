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

spa.shell = (function() {
//----------BEGIN MODULE SCOPE VARIABLES----------
  var
    configMap = {
      anchor_schema_map : {
        chat : { open : true, closed : true }
      },
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
      + '<div class="spa-shell-modal"></div>',
      chat_extend_time     : 250,
      chat_retract_time    : 300,
      chat_extend_height   : 450,
      chat_retract_height  : 15,
      chat_extended_title  : 'Click to retract',
      chat_retracted_title : 'Click to extend'
    },
    stateMap = {
      $container        : null,
      anchor_map        : {},
      is_chat_retracted : true
    },
    jqueryMap = {},

    copyAnchorMap, setJqueryMap, toggleChat,
    changeAnchorPart, onHashChange,
    onClickChat, initModule;
//-----------END MODULE SCOPE VARIABLES----------

//----------BEGIN UTILITY METHODS----------
// Returns copy of stored anchor map; minimizes overhead
copyAnchorMap = function () {
  return $.extend( true, {}, stateMap.anchor_map );
};
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
//Purpose   : Extends or retracts chat slider
//Arguments :
//   * do_extend - if true, extend slider; if false, retract slider
//   * callback - optional function to execute at the end of animation
//Settings  :
//   * chat_extend time, chat_retract time
//   * chat_extend_height, chat_retract_height
//Returns   : boolean
//   * true - slider animation activated
//   * false - slider animation not activated
//State     : sets stateMap.is_chat_retracted
//   * true - slider is retracted
//   * false - slider is extended
//
  toggleChat = function ( do_extend, callback ) {
    var
      px_chat_ht = jqueryMap.$chat.height(),
      is_open = px_chat_ht === configMap.chat_extend_height,
      is_closed = px_chat_ht === configMap.chat_retract_height,
      is_sliding = ! is_open && ! is_closed;

    // Avoid race condition
    if ( is_sliding ) {
      return false;
    }

    // Begin extend chat slider
    if ( do_extend ) {
      jqueryMap.$chat.animate ({
          height : configMap.chat_extend_height
        },
        configMap.chat_extend_time,
        function () {
          jqueryMap.$chat.attr(
            'title', configMap.chat_extended_title
          );
          stateMap.is_chat_retracted = false;
          if ( callback ){
            callback( jqueryMap.$chat );
          }
        }
      );
      return true;
    }
    // End extend chat slider

    // Begin retract chat slider
    jqueryMap.$chat.animate({height : configMap.chat_retract_height},
      configMap.chat_retract_time,
      function () {
        jqueryMap.$chat.attr('title', configMap.chat_retracted_title);
        stateMap.is_chat_retracted = true;
      if(callback){callback(jqueryMap.$chat);}
      }
    );
    return true;
    // End retract chat slider
  };
// End DOM method /toggleChat/

// Begin DOM method /changeAnchorPart/
// Purpose   : Changes part of the URI anchor component
// Arguments :
//  * arg_map - The map describing what part of the URI anchor we want
//    changed
// Returns   : boolean
// * true - the Anchor portion of the URI was updated
// * false - the Anchor portion of the URI could not be updated
// Action    :
//   The current anchor rep stored in stateMap.anchor_map
//   See uriAnchor for a discussion of encoding.
//   This method
//     * Creates a copy of this map using copyAnchorMap()
//     * Modifies the key-values using arg_map
//     * Manages the distinction between independent
//       and dependent values in the encoding
//     * Attempts to change the URI using uriAnchor
//     * Returns true on success, and false on failure
//
changeAnchor = function () {
  // Begin merge changes into anchor map

    // skip dependent keys during iteration

    // update independent key value

    // update matching dependent key

  // End merge changes into anchor map

  // Begin attempt to update URI, revert if not successful

  // End attempt to update URI
};
// End DOM method /changeAnchorPart/
//----------END DOM METHODS----------

//----------BEGIN EVENT HANDLERS----------
// Begin Event handler /onHashChange/
// Purpose   : Handles the hash change event
// Arguments :
//  * event - jQuery event object
// Settings  : none
// Returns   : false
// Action    :
//  * Parses the URI anchor component
//  * Compares proposed application state with current state
//  * Adjust the application only where proposed state
//    differs from existing
//
onHashChange = function () {
  // attempt to parse anchor

  // convenience vars

  // Begin adjust chat component if changed

  // End adjust chat component if changed

};
// End Event handler /onHashChange/

// Begin Event handler /onClickChat/
onClickChat = function ( event ) {
  if ( toggleChat( stateMap.is_chat_retracted ) ) {
    $.uriAnchor.setAnchor({
      chat : ( stateMap.is_chat_retracted ? 'open' : 'closed' )
    });
  }
  return false;
};
// End Event handler /onClickChat/
//----------END EVENT HANDLERS----------

//----------BEGIN PUBLIC METHODS----------

// Begin Public method /initModule/
  initModule = function ( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();

    // initialize chat slider and bind click handler
    stateMap.is_chat_retracted = true;
    jqueryMap.$chat
      .attr( 'title', configMap.chat_retracted_title )
      .click( onClickChat );

    // configure uriAnchor to use our schema

    // Handle URI anchor change events
    // This is done /after/ all feature modules are configured
    // and initialized, otherwise they will not be ready to handle the
    // trigger event, which is used to ensure the anchor is considered
    // on-load
  };
// End Public method /initModule/
  return { initModule : initModule };
//----------END PUBLIC METHODS----------
})();