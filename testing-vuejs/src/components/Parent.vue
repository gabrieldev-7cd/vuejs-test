<template>
    <div>
        <Child/>
    </div>
</template>

<script>
import Child from "./Child.vue"
export default {
    name: 'Parent',
    props:{
        msg: String
    },
    components:
    {
        Child,
    }
}
</script>

<style>

</style>
