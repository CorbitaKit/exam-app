import Vue from "vue";
import Vuex from "vuex";

const fb = require(".././firebase/firebaseConfig.js");

Vue.use(Vuex);


export const store = new Vuex.Store({
	state : {
		principles : [],
		principle : ""
	},

	mutations : {
		setPrinciples(state,datas){
			state.principles = datas;
		},


	},

	actions : {
		getPrinciples({commit}){
			const principleCollection = fb.db.collection("principles");
			principleCollection.onSnapshot((principles)=>{
				const datas = [];
				principles.forEach((doc)=>{
					datas.push(doc.data());
				});
				commit("setPrinciples",datas);
			});
		},


	},

	strict : true
});
