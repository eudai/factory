Factory.js
========================

Quickly create HTML Elements using CSS Selectory Strings


Installation
------------

Clone the repository or download the as a zip file.s

```
	git clone https://github.com/eudai/factory.git
```

Include the dependencies:

```html
<head>
	<script src='jquery.min.js'></script>
	<script src='css-selector-parser.js'></script>
	<script src='factory.jquery.js'></script>
</head>	
```

Usage
-----

```javascript
	$(document.body).create('h1.header[textContent=Factory.js]')
	var container = $(document.body).create('.container .nested-container')
	var button = container.create('button.btn[textContent=Hello]')
	button.click(function(){
		alert('hello!')
	})
```

Produces:

```html
	<h1 class="header">Factory.js</h1>
	<div class="container">
		<div class='nested-container'></div>
		<button class="btn">Hello</button>
	</div>	
```
