/*
    App specific methods, extends Instagram functions
*/

var App = (function() {

    var publicFunction = {};

    // event listeners
    var _eventListeners = function() {


    };


    publicFunction.init = function() {

        _initCarousel();

        // register events
        _eventListeners();

    };

    return publicFunction;

})( App || {} );


// ready go!
$(document).ready(function() {
    // initialize app
    App.init();
});