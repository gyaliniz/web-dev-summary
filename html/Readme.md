## `BASIC HTML TAGS`

```html
<!DOCTYPE html>
<html lang="en">
<!-- After creating blank html file, use ! -->
<!-- and press tab to get template html --> 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML INTRO</title>
    <script src="index.js"></script>
</head>

<body>
    <!-- This is a comment. It has no effects -->
    
    <!-- There a headers with different font sizes (h1 to h6)-->
    <h1> Header 1 </h1>
    <h2> Header 2 </h2>
    <h3> Header 3 </h3>

    <!-- div: block of items -->
    <div>This is a block Element
        <!-- Page -->
        <p> This is a page </p>
        <p> You can have multiple items in a div </p>
    </div>

    <!-- Image -->
    <img src="pierre-jeanneret-dMnIVs4thog-unsplash.jpg" alt="Image From Unsplash" width="180">


    <!-- Line Break -->
    <br>

    <!-- Link -->
    <a href="https://www.google.com" target="_blank" rel="noreferrer">Go to google</a>

    <!-- You can jump to another section by using a tag -->
    <a href="#footer"> Jump to footer</a>

    <!-- Bold text -->
    <p> This is a <strong> strong </strong> tag (Bold text). </p>

    <!-- Italic text -->
    <p> This is an <em> italic </em> text </p>

    <!-- Span -->
    <p>You can use span to apply styling on a part of an item: such as <span style="color:red"> making this text block red </span> </p>

    <!-- Abbreviation -->
    <abbr title="World Wide Web"> WWW </abbr>
    <p> Hover over to see abbreviation </p>

    <p> There are special character codes such as &#128522; &#128064; &#127782; &#127772; </p>
    
    <p>You can create horizontal line using hr tah</p>
    <hr>

    <!-- Quotation -->
    <q> For quotation use q tag </q>

    <blockquote> You can also use blockquote </blockquote>

    <!-- Table -->
    <table>
        <caption> Info Table</caption>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>25</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>23</td>
            </tr>
            <tr>
                <td>Maddy</td>
                <td>28</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </tfoot>
    </table>


    <br>

    <!-- Lists -->
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <ol>
        <li class="">Ordered List Item 1</li>
        <li class="">Ordered List Item 2</li>
        <li class="">Ordered List Item 3</li>
        <li class="">Ordered List Item 4</li>
    </ol>

    <div style="color:blue; font-style:italic; font-size:large">You can apply inline css using style tag</div>

    <br>

    <form action="./gotopage.html" method="post">
        Name <input type="text" name="name" id="name">
        <br>
        Age <input type="text" name="age" id="age">
        <br>
        <select name="gender" id="">
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="others">others</option>
        </select>
        <br>
        <label>Country</label>
        <input checked="true" type="radio" name="country" id="tr">
        <input type="radio" name="country" id="other">
        <input type="submit" value="Submit">
    </form>

    <div id="footer"></div>

    <p>Use lorem abbreviation for gibberish text</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui et labore ex asperiores ducimus quas quos enim, facere culpa, a eligendi est omnis cum? Adipisci cupiditate commodi veritatis deserunt amet?</p>
</body>

</html>
```

## `HTML 5 TAGS`


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <div class="id">Hello HTML5</div>

        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>

        <main>
            <article>
                <h2>Article 1</h2>
                <p>Content of Article 1</p>
            </article>
            <article>
                <h2>Article 1</h2>
                <p>Content of Article 1</p>
            </article>
        </main>

        <section>
            Defines a section of a document, such as header, footer ..
        </section>

        <aside>
            Sidebar
        </aside>

        <footer>&copy 2022</footer>
    </header>
</body>

</html>
```