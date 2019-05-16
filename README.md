# gmail-add-on-bar-destroyer

**DEPRECATED** Fortunately, Google has added a native way to hide the Add-on bar in Gmail, so this script is no longer needed.

This script simply removes the Gmail Add-On bar on the right hand side of the application in desktop web browsers.

### Why destroy the add-on bar?

It's just a matter of preference.  After one of Gmail's recent UI changes, a friend of mine asked me if I knew of a way to get rid of the add-on bar on the right hand side of the page.  There didn't seem to be a way to remove or hide it in the settings so I wrote this short script to remove it.  They didn't use the add-on bar or want to use it and it was taking up valuable screen space on their small notebook computer.

### How to install?
This script has been created for and tested with [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo "Tampermonkey Chrome Extension") on the Chrome desktop browser for Windows.

The script should also work on Firefox with [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/ "Greasemonkey Firefox Addon").

### How does it work?
The add-on bar element can be found using the javascript `document.querySelector()` function by searching for `div.nH.bAw.nn`.
If you try and hide or remove the add-on bar before the page loads the page will crash and cease to function. 
The script simply waits for the Gmail page to be loaded and then removes the add-on bar div element from the DOM.
It does this by searching for an element with the `.gb_Wa` class which happens to be the Gmail Logo at the top left hand corner of the page.  If it finds the Gmail logo element, I remove the add-on bar element matching `div.nH.bAw.nn` and the script exits.

### Support
Let me know if you have any issues or contributions to make :D
