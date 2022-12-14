```css

body {
    background-color: aliceblue;
}

a {
    text-decoration: none;
}

/* for classes use . before items' class name */
.boxes {
    /* property: value; */
    display: flex;
}

.box {
    width: 120px;
    height: 120px;
    background-color: aquamarine;
    margin: 10px;
    padding: 50px;
    text-align: center;
    vertical-align: center;
    border: 2px dashed darkblue;
    box-shadow: 10px -5px teal;
}

.btn {
    color:rgb(10, 10, 250);
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    background-image: linear-gradient(to right, aquamarine 0%, teal 100%);
}

/* for ids use # before the item's id */
#differentFont {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #333;
    text-shadow: 1px 1px 10px black;
}

#box-model {
    background-color: rgb(164, 212, 244);
}


/* 

SELECTORS: select element(s) to apply custom style

*               all elements
div             all div tags
div,p           all divs and paragraphs
div p           paragraphs inside divs
div > p         all p tags, one level deep in div
div + p         p tags immediately after div
div ~ p         p tags preceded by div
.classname      all elements with class
#idname         element with ID
div.classname   divs with certain classname
div#idname      div with certain ID
#idname *       all elements inside #idname
*/

#box-model div {
    padding: 1px 10px 9px;
    text-align: center;
    line-height: 18px;
}

#selector-example div p {
    font-family: 'Courier New', Courier, monospace;
}

div ~ p {
    color: darkred;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#selector-example div > p {
    color: darkgoldenrod;
}

#selector-example div + p {
    color: blueviolet;
}

/* 
PSEUDO CLASSES
When the state of component changes.
Apply different style

a:active            link in clicked state
a:hover             link with mouse over it
a:visited           visited link
p::before           add content before p
input:checked       checked inputs
input:disabled      disabled inputs
input:enabled       enabled inputs
input:focus         input has focus
input:in-range      value in range
input:out-of-range  input value out of range
*/

a:hover {
    color: #fff;
}

a:active {
    color: #333;
}

#block-text {
    border-left: teal 2px solid;
    border-top: darkviolet 3px dashed;
    border-right: turquoise 5px double;
    border-bottom: goldenrod 8px ridge;
    background-color: whitesmoke;
    color: #333;
}

/* Media Query */
@media screen and (max-width: 720px) {
    .boxes {
        display: inline;
    }
}
```