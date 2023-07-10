let products = {
    data: [
      {
        productName: "Living Room 1",
        category: "Lv",
        price: "30",
        image: "assets2/IMAGE Project/livingroom/livingled1.png",
      },
      {
        productName: "Living Room 2",
        category: "Lv",
        price: "49",
        image: "assets2/IMAGE Project/livingroom/deco1.png",
      },
      {
        productName: "Living Room 3",
        category: "Lv",
        price: "99",
        image: "assets2/IMAGE Project/livingroom/livingWooden2.png",
      },
      {
        productName: "Bed Room 1",
        category: "BedR",
        price: "29",
        image: "",
      },
      {
        productName: "Bed Room 2",
        category: "BedR",
        price: "129",
        image: "",
      },
      {
        productName: "Bath Room 1",
        category: "BathR",
        price: "89",
        image: "",
      },
      {
        productName: "Bath Room 2",
        category: "BathR",
        price: "189",
        image: "",
      },
      {
        productName: "Drawing 1",
        category: "Drawing",
        price: "49",
        image: "",
      },
      {
        productName: "Drawing 1",
        category: "Drawing",
        price: "49",
        image: "",
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };



for (let i of products.data){
//Create Card
let card = document.createElement ("div") ;
// category
card.classList.add("card", "i.category") ;
//image div
let imgContainer = document.createElement ("div");
imgContainer.classList.add("image-container") ;
//img tag
let image = document.createElement ("img") ;
image.setAttribute("src", i.image) ;
imgContainer.appendChild(image) ; 
card.appendChild(imgContainer);
//container
let container = document.createElement("div");
container.classList.add("container");
//product name
let name = document.createElement("h5");
name.classList.add("product-name");
name.innerText = i.productName.toUpperCase();
container.appendChild(name);

let price = document.createElement("h6");
price.innerText= "$" + i.price;
container.appendChild(price);




card.appendChild(container)

document.getElementById("products").appendChild(card);
 
}
function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
let elements = document.querySelectorAll(".card");
elements.forEach((element)=>{
    if(value == "all"){
        element.classList.remove("hide");
    }
    else{
      if(element.classList.contains(value)){
        element.classList.remove("hide");
      }  
      else{
        element.classList.add("hide");
      }
    }
});
}
//search button
document. getElementById ("search") .addEventListener
("click",() =>{
//initializations
let searchInput = document.getElementById
("search-input").value;
let element = document.querySelectorAll(".product-name");

let cards = document.querySelectorAll(".card");

element.forEach((element,index)=>{
    if(element.innerText.includes(searchInput.toUpperCase())){
        cards[index].classList.remove("hide");

    }
    else{
        cards[index].classList.add("hide");
    }
})
});


//display all products
window.onload = () => {
    filterProduct("all");
}