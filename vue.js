var app = new Vue({
	el:'#app',
	data: {
		name: 'LP Australia',
		brand: 'LoneyPlanet',
		variantindex:0,
		variants:[
			{
				id:1,
				color:'black',
				image:'./img/product.jpg',
				quantity:2,
			},
			{	
				id:2,
				color:'blue',
				image:'./img/product2.jpg',
				quantity:3,
			},
		],
		cartQuantity:0,
	},
	methods: {
		addToCart: function() {
			this.cartQuantity += 1;
			this.variants[this.variantindex].quantity -= 1;
			// alert('Item Added to Cart');
		},
		changeColor(index) {
			this.variantindex = index;
		}
	},
	computed: {
		productTitle()
		{
			return this.name + '(' + this.brand + ')';
		},
		image()
		{
			return this.variants[this.variantindex].image;
		},
		totalQuantity() {
			return this.variants[this.variantindex].quantity;
		},
		outOfStock(){
			if(this.variants[this.variantindex].quantity <= 0) {
				return true;
			} else {
				return false;
			}
		}
	}
});