<!DOCTYPE html>
<html>
<head>
	<title>Vue js Training</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div id="app">

	<section id="navbar"></section>

	<div class="product">
		<div class="product-image">
			<img v-bind:src="image">
		</div>

		<div class="product-info">
			<h1>{{ product }}</h1>
		</div>

	</div>

</div>



<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src="vue.js"></script>
</body>
</html>