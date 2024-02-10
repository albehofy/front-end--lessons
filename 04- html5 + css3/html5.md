# What's New in HTML5
- writting attributes without qoutes, and we can writting code wtithout html tag, body and head but this's not recomended 
- Doctype `!DOCTYPE html` this's denoted on the version of the html 5 is used
- some of HTML4 are deprecated like `center` `font` `s`  `u` `basefont` and other related tags which is related to the document, and css is used instead. 
- meta tag for encoding system are changed in html5 `<meta charset="utf-8">` this's encoding system is part of unicode and it's supprting Arabic Languages
- meta tag for viewport `<meta name="viewport" content="width=device-width, initial-scale = 1"> ` this's tag is one of html5 feature for responsive
- new input types are added in html5 like `color`,  `date`, `tel`, `url`, `email`, `number`, `Datalist`,  `search`, `time`,  `month`,  `week`, etc ...
- `<labe for='input-id'>` tag for making styling of input text and layout more clear and easy in handling
- minimized attributes `required`, `readonly` , `valid`, `invalid`, etc...
- `pattern` pattern attribute for checking specific requirements for the input this's attrebbute making validate more easie and reducing js using
- `placeholder` attribute
## Sematic HTML
- **Clean** making it's easier to reading and maintaining code 
- **More Accessible** 
- **Search Engine Friendly**
### Semantic Structural Elements
- `header`
- `navbar`
- `main`
- `section`
- `aside`
- `footer`  

All This's Tags like div but it's more sematic and making page more clean but finally all this's items are div's

### Semantic Tags
all semantic tags are good for used and friendly with search engine 
- `meter` is semantic tag showen the percentage with defualt tag (1), and deffirent about progress in it's more semantic, and it's containing more attributes (static value)
- `time` with `datetime` attribute 
- `progress` can be handeld with js to change it's value (changed value)
- `mark` used for highlight ing text "we can use it to say this's tet import or focused"

## Multi Media (Video - Audio)
before html5 playing media is depending on the plugins in the user devide but this's are handeld in html5 becouse on of the html5 feature redcing exteral plugins dependancy so that in html5 audio and audio are playing in the browsre.
- `video` and `audio` with attribute `src`, `cotrols`, `loop`
- **Fullback**: This's Means adding more than sorce with diffrent extenssions for the video and the browser will try to playing first source with extension let's say ".mp4", and if field to load will try to loading source with extension let's say "ogg", and still trying with all sources. 
- video tage can be cotrolled in js with function like `play()` for palying video, `pause()` for pausing video, `palyed` check if the video is played and return timeRanges(object), `paused` check if the video is paused return true or false, `currentTime=time`, `muted`, `volume`

> **Example** 
```
<video controls muted>
    <source src="video.mp4" type="video/mp4"></source>
    <source src="video.webm" type="video/webm"></source>
    <source src="video.ogg" type="video/ogg"></source>
</video>

<br>

<audio controls muted>
    <source src="audio.mp3" type="audio/mp3"></source>
    <source src="audio.ogg" type="audio/ogg"></source>
</audio>
``` 
## Localstorage
More secure than cookies and hold data more than cookies
### Localstorage methods
 - `setItem('prop', 'value')` adding new item to the localstorage.
 - `getItem('prop')` return json
 ## Sessionstorage
More secure than cookies and hold data more than cookies
### Sessionstorage methods
this's data will removed when browser closed, and 
> **Note:** 
 The main deffrance between sessionStorage and variable when reloading page the variable value will be reseted but sessionStorage will saved it's value
 - `setItem('prop', 'value')` adding new item to the localstorage.
 - `getItem('prop')` return json

 ## Data attribute
 this's fature added in html5 to allow adding new attribute but should start with `data-name` this's attribute are used in `javaScript`, this's attr is selected in js by `element.getAttribute();`, and we should handel it by `element.setAttribute('attr','value')`.
 >**Example**
 ```
    <!-- html -->
    <img src='image.jpg' data-isActive="false">
    <!-- js -->
    function toggleActiveStatus(img){
        let imageStatus =img.getAttribute('data-isActive');
        if(imageStatus == "false") {
            alert("iamge status is: " + imageStatus)
            img.setAttribute('data-isActive','true'); 
        }else {
            alert("iamge status is: " + imageStatus)
            img.setAttribute('data-isActive','false'); 
        }
    }
 ```

 ## Drag and Drop
 for making element can be dragged we should adding attribute `draggable='true'`
 - handling `ondrop`, `ondragover`, `ondragstart`
 >**Exapmle**
 ```
<!DOCTYPE html>
<html>

<head>
    <title>Dragg and Drop</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 21px;
            text-align: center;
            text-transform: capitalize;
        }

        h1 {
            margin: 21px auto;
        }

        .drop--area{
            width: 70%;
            min-width: 280px;
            height: 120px;
            margin: 47px auto;
            line-height: 60px;
            border: 1px solid #333;
        }

        .dragged--element {
            display: inline-block;
            width: 120px;
            height: 50px;
            color: #FFF;
            line-height: 50px;
            user-select: none;
            cursor: pointer;
        }

        .el--1 {
            background-color: #F00;
        }

        .el--2 {
            background-color: #080;
        }
        .el--3 {
            background-color: #00F;
        }
    </style>
</head>

<body>
    <h1>Dragg and Drop App</h1>
    <div class="drop--area" ondrop="drop(event)" ondragover="event.preventDefault()"></div>
    <p class="dragged--element el--1" draggable="true" ondragstart="dragStart(this)">element 1</p>
    <p class="dragged--element el--2" draggable="true" ondragstart="dragStart(this)">element 2</p>
    <p class="dragged--element el--3" draggable="true" ondragstart="dragStart(this)">element 3</p>
</body>
    <script>
        var darggedElement; 
        function drop(event) {
            event.preventDefault();
        if(event.target.getAttribute('class')=='drop--area'){
            event.target.appendChild(darggedElement)
        }
        }
        function dragStart(draggableElement){
            darggedElement = draggableElement;
        }
    </script>
</html>
 ```