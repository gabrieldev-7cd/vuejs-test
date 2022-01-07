<template>
  <div>
        <div v-for="todo in todos" :key="todo.id" data-test="todo">
            {{todo}}
        </div>

        <form data-test="form" @submit.prevent="createTodo" >
            <input data-test="new-todo" v-model="newTodo" />
        </form>
  </div>
</template>

<script>
export default {
    name: 'TodoApp',
    data (){
        return {
            newTodo: "",
            todos: [
                {
                    id: Date.now(),
                    text: 'Learn Vue Testing',
                    completed: false
                }
            ]
        }
    },
    props:{
        msg: String
    },
    methods:
    {
        createTodo()
        {
            this.todos.push({
                id: Date.now(),
                text: this.newTodo,
                completed: false,
            })
        }
    }
}
</script>

<style>

</style>