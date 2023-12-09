import { ref, onMounted } from 'vue';
import axios from 'axios';

export default function usePosts() {
  const posts = ref([]);
  const input = ref('');
  const value = ref('HelloWorld');
  const date = ref(new Date());

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      posts.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getDay = () => {
    return date.value.getDay();
  };

  const getMonth = () => {
    return date.value.getMonth();
  };

  const addDay = (numberOfDays) => {
    const newDate = new Date(date.value);
    newDate.setDate(date.value.getDate() + numberOfDays);
    date.value = newDate;
  };

  const addMonth = (numberOfMonths) => {
    const newDate = new Date(date.value);
    newDate.setMonth(date.value.getMonth() + numberOfMonths);
    date.value = newDate;
  };

  const changeTheWorld = () => {
    value.value = input.value;
  };

  onMounted(fetchPosts);

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
}
