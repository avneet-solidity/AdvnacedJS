
const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url => {                   //returns an array
    return fetch(url).then(resp => resp.json())
}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})
.catch(() => console.log('Error'))


const getData = async function () {
    try{
        const [posts, comments, users] = await Promise.all(urls.map(
            async url => {
                const resp = await fetch(url);
                return resp.json();
            }
        ))
        console.log('users : ', users);
        console.log('posts : ', posts);
        console.log('comments : ', comments);
    }
    catch (err){
        console.log('error: ', err)
    }
    
}
getData();




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(resp => resp.json())
// .then(resp => console.log(resp))
// .catch((e) => console.log(e))

// async function fetchApi(){
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await resp.json();
//     console.log(data);
// }
// fetchApi(); 