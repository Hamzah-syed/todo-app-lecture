const fruitsArr = ["apple", "banana", "orange", "cherry"]

// Get ul Element from HTML
let ul = document.querySelector("#fruitsList")


// Method 1
// for (let i = 0; i < fruitsArr.length; i++) {
//     // Create li Element
//     let li = document.createElement("li")
//     // Add content in li method 1
//     li.textContent = fruitsArr[i]

//     // Add content method 2
//     // const text = document.createTextNode(fruitsArr[i])
//     // li.appendChild(text)

//     // Insert li in ul

//     ul.appendChild(li)
// }

const todoInput = document.querySelector("#todoInput")
// Method 2
fruitsArr.forEach((fruit) => {
    // Create li Element
    let li = document.createElement("li")
    // Add content in li method 1
    li.textContent = fruit

    // Add content method 2
    // const text = document.createTextNode(fruitsArr[i])
    // li.appendChild(text)

    li.className = "fruitsItem"
    // Remove li
    li.addEventListener("click",() => {
        ul.removeChild(li)
    })
    // Insert li in ul
    ul.appendChild(li)
})


const addItemHandler = () => { 
    fruitsArr.push("grapes")
    

    
}