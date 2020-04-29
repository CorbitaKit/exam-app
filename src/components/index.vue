<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 my-auto">
					<div class="card col align-self-center">
						
							<div class="card-body">
								<transition name="fade">
									<h1 v-if="show">
										<p>Agile Principle {{ current_principle }}</p>
										<p v-if="! principle"> Fetching Datas</p>
										<p v-else><q>{{ principle }}</q></p>
									</h1>
								</transition>
							</div>
						
					</div>
				</div>

				<div class="col-md-2 prev">
					<button v-if="current_principle > 1" @click="getPreviousPrinciple" type="button" class="btn btn-primary pull-left">Previous Principle</button>
				</div>
				<div class="col-md-10 next">
					<button v-if="current_principle < 12" @click="getNextPrinciple" type="button" class="btn btn-primary">Next Principle</button>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {mapActions,mapState} from "vuex";
	export default{
		name : "index",
		data(){
			return{
				current_principle : 1,
				principle : "",
				show : true
			};
		},
		computed : {
			...mapState({
				principles : state => state.principles
			})
		},

		methods : {
			...mapActions({
				getPrinciples : "getPrinciples"
			}),

			setPrinciple(){
				for(var i in this.principles){
					if(this.current_principle == this.principles[i].id){
						this.principle = this.principles[i].name;
					}
				}
			},

			getNextPrinciple(){
				this.current_principle += 1;
				this.show = false;
				setTimeout(()=>{
					this.setPrinciple();
					this.show = true;
				},500);
				
			},

			getPreviousPrinciple(){
				this.current_principle -= 1;
				this.show = false;
				setTimeout(()=>{
					this.setPrinciple();
					this.show = true;
				},500);
			}
		},
		created(){
			this.getPrinciples();
			setTimeout(()=>{
				this.setPrinciple(this.current_principle);
			},1000);
			
			
		}
	};
</script>
<style>
	.prev{
		margin-top:10px;
	}

	.next{
		margin-top:10px;
		padding-left:800px;
	}

	.fade-enter-active, .fade-leave-active{
		transition: opacity .5s;
	}

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>