import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Index from "@/components/index.vue";
import {actions} from "@/store";


describe("index.vue", () => {
	
	it("has a created hook",()=>{
		const wrapper = shallowMount(Index);

		expect(wrapper.Index.created).toHaveBeenCalled(actions.getPrinciples);
	});


});
