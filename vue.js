var app = new Vue({
	el:'#app',
	data: {
		name: 'LP Australia',
		image:'./img/product.jpg',
		details:[
			{
				inStock:true,
				totalQuantity:15,
			}
		],
		variants:[
			{
				id:1,
				color:'blue',
				image:'./img/product2.jpg'
			},
			{
				id:2,
				color:'black',
				image:'./img/product.jpg'
			}
		],
		cartQuantity:0,
	},
	methods: {
		addToCart: function() {
			this.cartQuantity += 1;
			alert('Item Added to Cart');
		},
		changeColor(img) {
			this.image = img;
		}
	}
});