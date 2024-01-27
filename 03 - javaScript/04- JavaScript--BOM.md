# javaScript Document Object Model (DOM)
standard way to access and manipulate html document and also  responsible for herarcy of objects inside page.
window and all related objects (navigator, sceen, window , etc..) called BOM like
document and all related objects called DOM.
- window (default) 
## Window Object
wwe wrtuing object without calling window after object becouse it's a deault can be written or not in all ways and this's objet created on opening html autimatically
### Window Poperites 
- `name` window name
- `status(val)` ading any value to status bar 
- `name` window name
- `closed`return true or false (check if window is closed)
- `innerHeight`return Height of the window - scroll bar and status bar
- `outerHeight`return Height of the full window 
- `innerWidth`return width of the  window of the window - scroll bar and status bar
- `outerWidth`return width of the full window 
- `screenLeft` | `screenX` return postion pf the page from left
- `screenTop` | `screenY` return postion of the page from top
- `pageXOffset` | `scrollX` return scroll of X in page
- `pageYOffset` | `scrollY` return scroll of Y in page 
- 
- `alert()` display an alert box with a message and okay button
- `confirm()` display a message for user and okay = true, and cancle = false.
- `prompt()` display a dialog box thats prompts the user for input
- `open(url, name, properties)` open new browser window **for Example**: `open('http://www.google.com','_blank','width=200px, height=200px' )`
- `close()` close specified window
- `focus()` set focus to be current window
- `blur()` remove focus from current window
- `getSelection()` returns a selection object representing te range of text selected by user.
- `stop()` stop the window from loading.
- `print()` print the current of the specified window.
- `moveTo` removing window horizonatal and vertical for a specifiec position relative to the top and left.
- `moveBy` Moving the window by pixels 
- `resizeTo` change the size of the window horizonatal and vertical for a specifiec position relative to the top and left.
- `resizeBy` change the size of the window by pixels.
- `setInterval` evaluate an expression at a specified intervals (still repeated )
- `clearInterval` used to clear a time interval set using `setInterval` method
- `setTimeout` used to excute an expression or function after time interval in milliseconds (for one time)
- `clearTimeout` used to clear timeout set using `setTimeout` method.

## Screen Object 
provide information about the desktop outside the browser

### Screen Poperites 
- `width` return the total width of the screen
- `height` return the total height of the screen
- `availWidth` return the width of the screen (excluding the windows taskbar)
- `availHeight` return the height of the screen (excluding the windows taskbar)
- `pixelDepth` return the bit depth of the color palette for displaying images
- `colorDepth` return the color resolution in **bit ber pixel** of the screen

## Navigator Object 
provide information about the browser

### Navigator Poperites 
- `appName` get browser name
- `appVersion` get browser version
- `language` get browser language
- `platform` return name of OS
- `online` determine the browser is online
- `geolocation` return geolocation object that can be use to locate user location (added with html5)
- `cookieEnabled` return if the browser is allows cookies or not

## Location Object
provide info about **URL** and it's a part of window object

### Location Properites
- `href` set or return the entire URL 
- `hash` set or return the anchor(#) part of a URL 
- `search` set or return the query string part of URL

### Location Methods
- `replace(url)` replace the current document with a new one 
- `assign(url)` like replace but this's method will provide an entery the browser history list 
- `reload()` reload the current document

## History Object
provide history of the browser (array of urls)

### History Properites
- `length` return number of history

### lLocation Methods
- `back()` the previus page
- `forward()` forward go the page before the brevius page
- `go(index)` go for the specifiec index from history in this's session

## Event Object
this's object is creation in runtime, and we should use this's event inside other event

### Event Prop
- `target` return object of the elements that fired the event 
- `type` reurn type of event 
- `timeStamp` return the time of the fired event in milliseconds
- `bubbles` return whether or not an event can have it's default action prevented

## MouseEvent Object
- `screenX` returns the horizontal cordianate of the mos pointer (relative to the screen) when the mouse event was triggered 
- `screenY` returns the vertical cordianate of the mos pointer (relative to the screen) when the mouse event was triggered
- `clientX`  returns the horizontal cordianate of the mos pointer (relative to the current window) when the mouse event was triggered 
- `clientY`  returns the vertical cordianate of the mos pointer (relative to the current window) when the mouse event was triggered
- `pageX`  returns the horizontal cordianate of the mos pointer (relative to the document) when the mouse event was triggered
- `pageY` returns the vertical cordianate of the mos pointer (relative to the document) when the mouse event was triggered
- `offsetX` returns the horizontal cordianate of the mos pointer (relative to the target element) when the mouse event was triggered
- `offsetY` returns the vertical cordianate of the mos pointer (relative to the target element) when the mouse event was triggered
- `alyKey` true if the altKey is pressed
- `ctrlKey` true if the ctrlKey is pressed
- `shiftKey` true if the shiftKey is pressed
- `detail` return the number that indicates how many times the mouse was clicked
- `button` any mouse button that are pressed and possible values is 0: 'left mouse button', 1:  'wheel button' , 2: 'right mouse button'
- `movementX/movementY` 
## KeyboardEvent Object
- `alyKey` true if the altKey is pressed
- `ctrlKey` true if the ctrlKey is pressed
- `shiftKey` true if the shiftKey is pressed
- `code` return the code with a string value of the key represented by the event 
- `key` return the string represent the key value of the key represented by the event.
- `which` returns number representing a system dependent numirec code identifying the value of the pressed key, in usual same as the keyCode and **`Both Are Deprecated`** and provided for compatability only.
- `preventDefault` cancel the event if it cancelable, meaning that the default action that belongs to the event will not occur
- `stopPropagation` prevent further propagation of the current event (on adding event on input and aking this's event preventef on the parents)
### Events Handling
- adding event in the element 
- inside script by catching element and targetting event on the element by `element.onEventName=function`
- inside script by catcing Element and adding `eventListener` this's only way which is used to add this's method on the event `x` and this's means not replace the old one, and also  we can remove eventListener by `removeEventListener('event',method, duration delay)`