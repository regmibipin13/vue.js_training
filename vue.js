var app = new Vue({
	el:'#app',
	data: {
		product: 'LP Australia',
		image:'./img/product.jpg',
		details:[
			{
				coupon:'no coupon',
				discount: '10%',
				inStock: true,
				quantity:10,
			},
		],
		cartQuantity:0,
	},
	methods: {
		addToCart: function() {
			this.cartQuantity += 1;
			alert('Item Added to Cart');
		}
	}
});