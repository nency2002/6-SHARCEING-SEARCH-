let products= JSON.parse(localStorage.getItem("products")) || [];

const ui =(products)=>{
    document.getElementById("output").innerHTML="";
    products.map((product)=>{
        let main = document.createElement("main")
        main.setAttribute("class","main")

        let div = document.createElement("div")
        div.setAttribute("class","book")
        let img = document.createElement("img")
        img.src=product.img
        img.setAttribute("class","imgeses")
        let title = document.createElement("h2")
        title.innerHTML=product.title
        let price = document.createElement("h3")
        price.innerHTML=product.price
        let categorly = document.createElement("h3")
        categorly.innerHTML=product.categorly
        let add = document.createElement("button")
        add.innerHTML="Add To Cart"
        add.setAttribute("class","buttons")


        div.append(img,title,price,categorly,add);
        main.append(div);
        document.getElementById("output").append(main)
    })
}

ui(products);

const productdata = (e) =>{
    e.preventDefault();

    let product = {
        img : document.getElementById("img").value,
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        categorly : document.getElementById("categorly").value,
    }
    console.log(products);
    products.push(product)
    localStorage.setItem("products",JSON.stringify(products))
    ui(products);
}
document.querySelector("form").addEventListener("submit" ,productdata)

// sorting by price

const handlelth = () =>{
    let data = products.sort((a,b) => a.price - b.price);
    ui(data);
}
document.getElementById('lth').addEventListener('click',handlelth)


const handlehtl = () =>{
    let data = products.sort((a,b) => b.price - a.price);
    ui(data);
}
document.getElementById('htl').addEventListener('click',handlehtl)


// filter products by categorly

const handelcategory =(cat) =>{
    let data = products.filter((value)=>value.categorly==cat);
    ui(data);
}

let cat = ["men" ,"women" ,"kids"]

for(let i=0 ; i< cat.length ; i++){
    let btn = document.createElement("button")
    btn.innerHTML =cat[i];
    btn.setAttribute('id',cat[i]);
    document.getElementById("btns").append(btn)
}

for(let i=0 ; i < cat.length ; i++){
    document.getElementById(cat[i]).addEventListener("click",()=>handelcategory(cat[i]));

}
// document.getElementById("women").addEventListener("click",()=>handelcategory("women"));
// document.getElementById("men").addEventListener("click",()=>handelcategory("men"));
// document.getElementById("kids").addEventListener("click",()=>handelcategory("kids"));


// search by product name
const find = () =>{
    let value = document.getElementById("value").value
    let data = products.filter((val)=>val.title.includes(value.toLowerCase()));
    ui(data);

}

document.getElementById('search').addEventListener("click",find)

document.getElementById("value").addEventListener("keypress",(e)=>{
    if(e.key == "Enter")
    find();
})



