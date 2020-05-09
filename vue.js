var app = new Vue({
	el:'#app',
	data: {
		name: 'LP Australia',
		brand: 'LoneyPlanet',
		image:'./img/product.jpg',
		details:
		{
			outOfStock:false,
			totalQuantity:5,
		},
		variants:[
			{
				id:2,
				color:'black',
				image:'./img/product.jpg'
			},
			{
				id:1,
				color:'blue',
				image:'./img/product2.jpg'
			},
		],
		cartQuantity:0,
	},
	methods: {
		addToCart: function() {
			this.cartQuantity += 1;
			this.details.totalQuantity -= 1;
			this.checkQuantity();
			// alert('Item Added to Cart');
		},
		checkQuantity()
		{
			if(this.details.totalQuantity  <= 0) {
				this.details.outOfStock = true;
			} else {
				this.details.outOfStock = false;
			}
		},
		changeColor(img) {
			this.image = img;
		}
	},
	computed: {
		productTitle()
		{
			return this.name + '(' + this.brand + ')';
		}
	}
});