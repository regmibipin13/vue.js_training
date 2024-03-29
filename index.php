<!DOCTYPE html>
<html>
<head>
	<title>Vue js Training</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div id="app">
	<div class="btn view-cart">My Cart :{{ cart.length }}</div>
	<product 
		:shipping="shipping" 
		@add-to-cart="updateCart" 
		@remove-from-cart="removeFromCart"
		@empty-cart="emptyCart">
		
	</product>
</div>



<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript" src="vue.js"></script>
</body>
</html>