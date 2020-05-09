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
				<li>
					<span v-show="details.outOfStock" style="color: red;">Out of stock</span><br/>	
					<span>Total Quantity Left: {{ details.totalQuantity }}</span>
				</li>
				<li v-for="variant in variants" 
					:key="variant.id" 
					@mouseover="changeColor(variant.image)" class="colorBox" 
					:style="{ backgroundColor:variant.color }">
				</li>
			</ul>
			<button class="btn add-to-cart" @click="addToCart" :disabled="details.outOfStock" :class="{ disableButton: details.outOfStock }">Add To Cart</button>
			<button class="btn view-cart" disabled>My Cart :{{ cartQuantity }}</button>
		</div>

	</div>

</div>



<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src="vue.js"></script>
</body>
</html>