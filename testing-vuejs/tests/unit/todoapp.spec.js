import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe("TodoApp.vue", () => {
    it("should render todo text", () => {

        const wrapper = mount(TodoApp);
        const todo = wrapper.get('[data-test="todo"]');
        // expect(todo.text()).toBe("Learn Vue Testing");
        expect(todo.text()).toMatch("Learn Vue Testing");
    })

    it("should add new todo", async () => {
        const wrapper = mount(TodoApp);

        expect(wrapper.findAll('[data-test="todo"')).toHaveLength(1);

        await wrapper.get('[data-test="new-todo"]').setValue('New Todo');
        await wrapper.get('[data-test="form"]').trigger('submit');

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
    })
})