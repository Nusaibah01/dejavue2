
// basic example
function fetchData() {
    let container = document.querySelector('[table-data]');
    fetch("https://nusaibah01.github.io/onlineStore/data/")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let tableHTML = `
            <table class="table">
                <caption>Our Products</caption>
                <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            `;
        data.results.forEach((product) => {
            tableHTML += `
                <tr>
                    <td>${product.Name}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.image}" width="65px" height="65px"></td>
                    <td>${product.description}</td>
                    <td>${product.amount}</td>
                </tr>
            `;
        });
        tableHTML += `</table>`;
        container.innerHTML = tableHTML;
    })
    .catch((err) => {
        console.log(err);
    });
}

fetchData();

function  openCategory(){
    
}
// creating an asynchronus function
// async function  fetchData() {
//     let res = await  fetch("https://nusaibah01.github.io/onlineStore/data/")
//    Destructuring
//     let { results } = await res.json()
//     results.forEach(procuct => {
//         container.innerHTML += `
//                         <div class='card'>
//                             <h2>${product.productName}</h2>
//                             <h4>
//                                 ${product.category}
//                             </h4>
//                             <img src='${product.img_url}' loading='lazy'>
//                             <p>
//                                 <span>Description: ${product.description}
//                                 </span>
//                             </p>
//                             <p>
//                                 <span>Price: R${product.amount}
//                                 </span>
//                             </p>
//                             <div class='button-wrapper'>
//                                 <button>Add to cart</button>
//                             </div>
//                         </div>
//                     `
//                 })
//             }
// fetchData()