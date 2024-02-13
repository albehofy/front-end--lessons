# What's New in CSS3
- vendor prefix `-moz` for **firefox** `-ms` for **microsoft products** `-o-` for **opera software** `-webkit-` for **chome and safari**, when adding this's prefix this's mean the propery will only worked in the browser wich is targeted by this's  prefix
- `border-radius` for making border rounded , the meaning of the border radius
    - making circle in the corner of the box `border-radius: 10px 20px 30px 40px` in this case we have 1 for the circle whih radius is a border radius value
    - making ellepsis in the corner of the box  `border-radius: 10px 20px 30px 40px/10px 20px 40px 50px` in this case we have 2 radiuses(x, y) for the ellepsis wich radius is a border radius value
- `box-shadow` for making shadow for the box `box-shadow: h-offset(req) v-offset(req) blur(optional) spread(optional) color(optional) inset(optional)`
- `border-image` for making border as image `border-image: source(url) slice(px) fill(optional for background) repeat(round-repeat-stretch)`

## Fonts
fonts used fullback like video and audio which means we used more than font-name to ensure this's font will be displayed in OS but should all of them to be from the same family, 
>**note:** we have three type of font 1- user font(local font from user device) 2- server font(fonts added to the web site as assets files) 3- web font (fonts added from external source without download this's font like google fonts) "this's way is the best practs"
- `font-family` for adding font name
- `font-weight` for aig he weight of the text taking values from 100 to 900 or (bold,bolder,normal, thin, thiner)
- `font-style` for making style for the font
- `@font-face{url: 'url1','url2'; font-family:''}` for adding new font (new feature added in css3) **this's way used for adding server fonts**
---
- **icons**
in the last time fonts company added vectors icons  for adding icon in easier way this's icons is **SVG** , many sites provided this's icons like **Google fonts**, **Font Awesome**

for addig icons we have two ways : 

- Downlod fonts files and link this's files 
- Link fonts files by cdn link (best practs)

---
- **Tranform** New css Feature have multible proberties
    - translate(X,Y)
    - scale(width, height)
    - rotate(degree)
    - skew(degre for X, degre for Y)
    - matrix (scaleX(),skewY(), skewX(), scaleY(), translateX(), translateY() ) <br> **Example:**  `translate: matrix(1,-0.3,0,1,0,0)`
- **Transition** New css Feature have multible proberties allows you to change properity values smoothly.
    - property
    - duration 
    - timing-function 
        - ease
        - ease-in
        - ease-out
        - ease-in-out
        - linear
        - cubic-bezier(n,n,n,n)
    - delay
**Example** `transitio: width,height, bakcground 1s linear 1s`
- **Animation** keyframe based animation when we have start and end points through this's two points we can change any thing, this's donr in two steps.
    - intializing animation by `@keyframe` <br>
    **Example**   
        ```
        @keyframe CircleRotate{
            0%{transform:rotate(10deg)}
            10%{transform:rotate(10deg)}
            20%{transform:rotate(10deg)}
            0%{transform:rotate(10deg)}
        }
        ```
    - adding animation by `animation` tag <br>
    **Example**
    ```
    animation: name duration delay iteration-count animtion-direction fill-mode
    ```
- gradient
    - linear-gradient 
        - from top to bottom (default)
        - to right
        - to left

    - redial-gradient
- css multi columns 
```
column-count: number; //column-count: 3; 
column-gap: number(px,%,em,rem); //colimn-gap: 12px;
column-rule: style size color //column-rule: 1px solid #00F
```
- flex: added into the parent not item itself
    - direction
        - row 
        - row-reverse
        - column
        - column-reverse
    - wrap
        - wrap
        - wrap-reverse
        - no-wrap
    - justify-content
        - flex-start
        - flex-end
        - center
        - space-between
        - space-around
        - space-evenly
    - align-items
        - flex-start
        - flex-end
        - center
        - stretch
        - baseline
    - align-content
        - flex-start
        - flex-end
        - center
        - stretch
        - space-between
        - space-around
    - order
    - grow
    - shrink
    - basis
    - align-self
- box-sizing
    - border-box
    - content-box (default)
- grid : new design pattern for making layouts, devided page into 12 column, and adding width for the content as a column 
>**Example**
```
<!-- css -->
.row:after {
    content: ""; 
    clear: both; 
}
.col-1 {
    width: 8.33%; 
    float: left; 
}

.col-2 {
    width: 16.66%; 
    float: left; 
}
.col-3 {
    width: 24.99%; 
    float: left; 
}

.col-4 {
    width: 33.32%; 
    float: left; 
}

.col-5 {
    width: 41.65%; 
    float: left; 
}
.col-6{
    width: 49.98%; 
    float: left; 
}

.col-7 {
    width: 58.31%; 
    float: left; 
}

.col-8 {
    width: 66.64%; 
    float: left; 
}

.col-9 {
    width: 74.97%; 
    float: left; 
}

.col-10 {
    width: 83.3%; 
    float: left; 
}

.col-11 {
    width: 91.63%; 
    float: left; 
}

.col-12 {
    width: 100%; 
    float: left; 
}

<!-- html -->
<h1>Grid based system</h1>
<div class="row">
    <div class="col-3"> col-3</div>
    <div class="col-6">col-6</div>
    <div class="col-3"> col-3</div>
</div>
```
### Responsive Design Pattern 
- Mostly Fluid
- Column Drop
- Column Shifter
- Off Canvas

