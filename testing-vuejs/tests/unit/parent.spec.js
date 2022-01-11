import { shallowMount, mount} from "@vue/test-utils"
import Parent from "@/components/Parent.vue"

describe("Parent.vue", () => {
    it("integration with child component", () => {

        const wrapper = mount(Parent);
        expect(wrapper.text()).toContain("Parent");
        // expect(wrapper.text()).toContain("Child");
    });
});