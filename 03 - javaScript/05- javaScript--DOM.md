# javaScript Document Object Model (DOM)
standard way to access and manipulate html document and also  responsible for herarcy of objects inside page.
window and all related objects (navigator, sceen, window , etc..) called BOM like
document and all related objects called DOM.
- document (default)

## properities
- `bgColor` A string that spacify the background Color
- `fgColor` A string that spacify the text Color
- `liknColor`  the color of  text for a link that the user not visited yet
- `vliknColor` the color of  text for a link that the user already visited
- `aliknColor` the color of  text for a link that the user clicks
- `title` a string that specify the contents of title tag

## methods
- `write()` write one or more HTML expression to  a document in the specified window
- `writeIn()` write one or more HTML expression to  a document in the specified window and follow them with a new line character.
- `getElementById('ID')` accessing element by ID attr
- `getElementsByTagName("Tag Name")` return a collection of object with a specified tag name
- `getElementsByName('Name')` return a collection of object with a specified name
- `getElementsByClassName("class-name")` return a collection of object with a specified class name
- `querySelector(css selector)` return first element matches the specified css selectors in the document
- `querySelectorAll(css selector)` return nodeList contains all elements that's matches the specified css selectors in the document
- `document.images` return array contains all images in the document
### Form
#### Form Properities
- `elements[]` an array containing all of the elements of the form, used to loop through the form easly 
- `length` return number with is the length of the form elements
- `name` return name of the form 
- `id` return form id 
- `target` return name of the target windows form is to be submited to.

#### Form methods 
- `reset()` reset the form (cleaning all content that's the user has made)
- `submit()` submiting form data and sending it to the server 
#### Form Events
- `onReset` excute code when th form is reset
- `onSubmit`  excute code when th form is submited

> **Note :**  For Getting Value in Form Element like `input` we use `.value` prop, <br>in other elements in html we used `.innerText` or `.innerHTML` or `textContent`

### Input
#### Input Methods
- `focus`
- `blur`
#### Input Events
- `onfocus`
- `onblur`

### Input Text
- `readonly` set or return if the input should be readonly
- `value` set or return value 
- `dispabled`
#### Input Methods
- `focus`
- `blur`
- `select` selects or highlight the content 
#### Input Events
- `onfocus`
- `onblur`
- `onchange`

### dropdown list
#### Select Properities 
- `length` return the number of options in the list 
- `selectedIndex` return the index of selected option
- `options[]` return an array of the options in the list
- `value` set or return the value of the sleceted option
- `text` the text label associated with the option
- `multiple` set or return whether or not multiple item can selected.

#### dropdown list Methods 
- `focus`
- `blur`
- `change`

#### dropdown list Events
- `onfocus`
- `onblur`
- `onchange` when different option are selected

### radio button 
#### radio button Properities 
the samr of dropdown and have new once called `checked`

> **Note:** For Change Style in js <br> 1- `select element`,  <br> 2- add `style` tag after selected elemet thn add properity like this..... `selectedElement.style.propName="popvalue"`