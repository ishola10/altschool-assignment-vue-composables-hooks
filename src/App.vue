<template>
<div>
  {{ value }}
  <br />
  Date: {{ date }}
  <br />
  Day: {{ getDay() }}
  <br />
  Month: {{ getMonth() }}
  <br />
  <input type="text" v-model="input" />
  <button @click="changeTheWorld">Change The World</button>
  <br />
  <button @click="addDay(1)">Add Day</button>
  <button @click="addMonth(1)">Add Month</button>
</div>
</template>

<script>
import usePosts from './use-post.js';

export default {
setup() {
  const {
    posts,
    input,
    value,
    date,
    getDay,
    getMonth,
    addDay,
    addMonth,
    changeTheWorld,
  } = usePosts();

  return {
    posts,
    input,
    value,
    date,
    getDay,
    getMonth,
    addDay,
    addMonth,
    changeTheWorld,
  };
},
};
</script>

<style>

</style>
