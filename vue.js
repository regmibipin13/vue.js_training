Vue.component('product', {
	props:{
		shipping:{
			type:Boolean,
			required:true,
		}
	},
	template:`
	<div>
		<section id="navbar"></section>
		<div class="product">
			<div class="product-image">
				<img v-bind:src="image">
			</div>
			<div class="product-info">
				<h1>{{ productTitle }}</h1>
				<ul>
					<h3>Specifications</h3>
					<li>
						<span v-show="outOfStock" style="color: red;">Out of stock</span><br/>	
						<span>Total Quantity Left: {{ totalQuantity }}</span>
					</li>
					<li v-for="(variant, index) in variants" 
						:key="variant.id" 
						@mouseover="changeColor(index)" class="colorBox" 
						:style="{ backgroundColor:variant.color }">
					</li>
					<li>Shipping :{{ freeShipping }}</li>
				</ul>
				<button class="btn add-to-cart" @click="addToCart" :disabled="outOfStock" :class="{ disableButton: outOfStock }">Add To Cart</button>
				<button class="btn remove-from-cart" @click="removeFromCart" :disabled="emptyCart" :class="{disableButton: emptyCart}"> Remove This From Cart</button>
			</div>
		</div>
	</div>
	`,
	data() {
		return {
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
		};
	},
	methods: {
		addToCart: function() {
			this.$emit('add-to-cart',this.variants[this.variantindex].id);
			this.variants[this.variantindex].quantity -= 1;
		},
		changeColor(index) {
			this.variantindex = index;
		},
		removeFromCart() {
			this.$emit('remove-from-cart',this.variants[this.variantindex].id);
			this.variants[this.variantindex].quantity += 1;
		},
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
		},
		emptyCart() {
			this.$emit('empty-cart',this.variants[this.variantindex].id);
		},
		freeShipping() {
			if(this.shipping) {
				return "FREE";
			}
			return "13.99$";
		}
	}
});
var app = new Vue({
	el:'#app',
	data:{
		shipping:true,
		cart:[],
	},
	methods:{
		updateCart(id)
		{
			this.cart.push(id);
		},
		removeFromCart(id) {
			this.cart.filter(function(item){
				return item !== id;
			});
		},
		emptyCart(id) {
			if(this.cart.includes(id)) {
				return false;
			}
			return true;
		}
	}
});


