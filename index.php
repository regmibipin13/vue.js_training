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
			<h1>{{ name }}</h1>
			<ul>
				<h3>Specifications</h3>
				<li v-for="detail in details" :key="detail.quantity">
					<span v-show="detail.inStock">In Stock</span><br/>	
					<span>Total Quantity Left: {{ detail.totalQuantity }}</span>
				</li>
				<li v-for="variant in variants" :key="variant.id" v-on:mouseover="changeColor(variant.image)">
					{{ variant.color }}
				</li>
			</ul>
			<button class="btn add-to-cart" v-on:click="addToCart">Add To Cart</button>
			<button class="btn view-cart" disabled>My Cart :{{ cartQuantity }}</button>
		</div>

	</div>

</div>



<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src="vue.js"></script>
</body>
</html>