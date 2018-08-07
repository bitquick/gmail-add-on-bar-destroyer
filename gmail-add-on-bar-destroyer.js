// ==UserScript==
// @name         GMail Add-On Bar Destroyer
// @namespace    https://github.com/bitquick/
// @version      0.3
// @description  Remove that pesky add-on bar in Gmail
// @author       Sean Devine
// @match        https://mail.google.com/mail/u/*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        // Removing add-on bar or settings it's display property to none before it loads causes gmail to crash.
        // So we check to see if the Gmail Logo has been inserted in the top left hand corner of the page before we remove the add-on bar.

        var addon_bar_selector = "div.nH.bAw.nn";
        var gmail_logo_selector = ".gb_Wa";

        // Set an interval to keep checking for the gmail logo.
        var gmail_logo_seeker = setInterval(function() {
           if ( document.querySelector(gmail_logo_selector) ) {
                // Logo was found, remove add-on bar
               var element = document.querySelector(addon_bar_selector);
               element.parentNode.removeChild(element);
                // Script has completed it's mission. Clear the interval.
               clearInterval(gmail_logo_seeker);
               return;
           }
       }, 1000);
})();
