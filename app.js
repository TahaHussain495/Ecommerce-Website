// let getValue = document.querySelector('#main')


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data)=>{
//    return data.json()
// })

// .then((data)=>{
//     data.map((a)=>{
        
// getValue.innerHTML += `
    
//     <div class="flex flex-col items-center pb-10">
//         <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://fastly.picsum.photos/id/845/200/200.jpg?hmac=KMGSD70gM0xozvpzPM3kHIwwA2TRlVQ6d2dLW_b1vDQ" alt="Bonnie image"/>
//         <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${a.title} </h5>
//         <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
//         <div class="flex mt-4 md:mt-6">
//             <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
//             <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
//         </div>
//     </div>
// </div>

// `

//     })
// })
// .catch((err)=>{
//     console.log(err);
    
// })




let getValue = document.querySelector('#main');

fetch('https://fakestoreapi.com/products')
  .then((data) => data.json())
  .then((posts) => {
    posts.map((post) => {
      
      getValue.innerHTML += `
      <div class="col-md-4 mb-4 d-flex align-items-stretch">
    <div class="card w-100 text-center">
      <img src="${post.image}" class="card-img-top" alt="Product Image" style="height: 250px; object-fit: contain; background-color: #f8f9fa;">
      <div class="card-body">
        <h3 class="card-title">${post.title}</h3>
        <h5 class="text-muted">${post.category}</h5>
        <p class="card-text">${post.description}</p>
        <h4 class="card-text text-primary">Price: $${post.price}</h4>
        <a onclick="addCart()" href="#" class="btn btn-primary mt-3">Add to Cart</a>
      </div>
    </div>
  </div>`
    });
  })
  .catch((err) => {
    console.log(err);
  });

function addCart(){
  Swal.fire({
  title: "Added to cart",
  text: "Done",
  icon: "success"
});
}

