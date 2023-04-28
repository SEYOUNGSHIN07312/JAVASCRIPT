async function getData(){
    const obj = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(obj)
    console.log(obj.data)
    console.log(obj.data.title)
}

getData()