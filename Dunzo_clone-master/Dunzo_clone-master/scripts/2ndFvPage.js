let Fruits_Data=[
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/YVIzdnJwRm4rM2M2YVVmT1VjUDhxQT09-product_image.jpg",
       name:'Fresh Coconut',
       pc:'1 PC',
       price:32,
       Dprice:42
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844132032_product_5bd323493cd51519e935400c_1.jpg",
       name:'Orange',
       pc:'6 PC',
       price:59,
       Dprice:87
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844008116_product_5c0916970ac44c06a6f15e0d_1.jpg",
       name:'Washington Apple',
       pc:'4 PC',
       price:181,
       Dprice:87
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844135183_product_5c35dbf1b1e6c12dfdc86725_1.jpg",
       name:'Apple Royal Gala',
       pc:'6 PC',
       price:239,
       Dprice:298
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844135293_product_5c35dbf1b1e6c12dfdc86747_1.jpg",
       name:'Sweet Lime - Mosambi',
       pc:'4 PC',
       price:68,
       Dprice:76
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844010337_product_5c790174d661476ccea6355f_1.jpg",
       name:'Muskmelon',
       pc:'1 PC',
       price:50,
       Dprice:62
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844136632_product_5c80d9cbd8b2f755a2d44052_1.jpg",
       name:'Pineapple',
       pc:'1 PC',
       price:51,
       Dprice:63
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844133820_product_5c0e70078d92d07fdfc24835_1.jpg",
       name:'Pomegranate',
       pc:'2 PC',
       price:81,
       Dprice:120
    },
    {
       img_url:"https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1644844010855_product_5caef825de0f3b0443a7d9d7_1.jpg",
       name:'Papaya',
       pc:'1 PC',
       price:56,
       Dprice:62
    },
]

localStorage.setItem('Fruits_Data',JSON.stringify(Fruits_Data))


let cartArr = JSON.parse(localStorage.getItem('cartArr'));
console.log('data:',cartArr)


cartArr.forEach(el => {
let div = document.createElement('div');
let div1 = document.createElement('div');
  //shop img mapping
let main_img = document.createElement('img');
main_img.setAttribute("src",el.Main_img_url);
main_img.setAttribute('class','main_img')
     
//shop name mapping
let div2 = document.createElement('div');
div2.setAttribute('id','div2')
let name = document.createElement('h2');
name.textContent = el.name;

//Location maping
let location = document.createElement('p');
location.textContent = el.location;
location.setAttribute('class','location_T')

let c_img = document.createElement('img');
c_img.setAttribute("src",el.c_img);
c_img.setAttribute("class",'cimg_T');//classcreating for clock img

//min mapping
let min = document.createElement('span');
min.textContent = el.min;
min.setAttribute('class','min_t')

div1.append(main_img);
div2.append(name,location,c_img,min)
div.append(div1,div2);
document.getElementById("Product_container").append(div)

//searchbar
search_input = document.createElement('input');
search_input.setAttribute('class','input_search')
search_input.placeholder=`Search in ${el.name}`

document.getElementById("searchbarDiv").append(search_input)

});
//first bottom div
let p1 = document.createElement('p');
p1.addEventListener("click",function(){
    freshFood()
 });
p1.innerHTML='Fresh Fruits'

let p2 = document.createElement('p')
p2.innerText='Fresh Vegetable...';

let p3 = document.createElement('p');
p3.innerText='Fresh Herbs An...';

let p4 = document.createElement('p');
p4.innerText='Cuts And Sp...';

let p5 = document.createElement('p');
p5.innerText='Frozen Vegeta...';



document.getElementById('last_first_div_T').append(p1,p2,p3,p4,p5)


//  bydefault items
Fruits_Data = JSON.parse(localStorage.getItem('Fruits_Data'));
console.log('fruitarr:',Fruits_Data)

Fruits_Data.forEach(el => {
    
    let div1 = document.createElement('div')

    let img = document.createElement('img');
    img.style.width='60px'
    img.src=el.img_url
    
    div1.append(img)

    let div2 = document.createElement('div')
    let name = document.createElement('h4');
    
    name.innerText=el.name;

    let pcs = document.createElement('p')
    pcs.innerText = el.pc

    let div3 = document.createElement('div');
    div3.setAttribute("id",'T_flex_price');

    let price = document.createElement('p')
    price.innerText = `₹${el.price}`

    let Dprice = document.createElement('p')
    Dprice.innerText = `₹${el.Dprice}`
    Dprice.style.textDecoration = 'line-through'

    div4 = document.createElement('div');

    button = document.createElement("button")
    button.setAttribute('id','btn_fruit');
    button.innerText='- ADD';
    button.addEventListener("click",function(){
    fruit_add_third_div(el)
 })
    
    div4.append(button)
    div3.append(price,Dprice)
    div2.append(name,pcs,div3)

    document.getElementById("last_secondd_div_T").append(div1,div2,div4)
});

//after click on fresh

freshFood=()=>{
let Fruits_Data = JSON.parse(localStorage.getItem('Fruits_Data'));
console.log('fruitarr:',Fruits_Data)

Fruits_Data.forEach(el => {
    
    let div1 = document.createElement('div')

    let img = document.createElement('img');
    img.style.width='60px'
    img.src=el.img_url
    
    div1.append(img)

    let div2 = document.createElement('div')
    let name = document.createElement('h4');
    
    name.innerText=el.name;

    let pcs = document.createElement('p')
    pcs.innerText = el.pc

    let div3 = document.createElement('div');
    div3.setAttribute("id",'T_flex_price');

    let price = document.createElement('p')
    price.innerText = `₹${el.price}`

    let Dprice = document.createElement('p')
    Dprice.innerText = `₹${el.Dprice}`
    Dprice.style.textDecoration = 'line-through'

    div4 = document.createElement('div');

    button = document.createElement("button")
    button.setAttribute('id','btn_fruit');
    button.innerText='- ADD';
    button.addEventListener("click",function(){
    fruit_add_third_div(el)
 })
    
    div4.append(button)
    div3.append(price,Dprice)
    div2.append(name,pcs,div3)

    document.getElementById("last_secondd_div_T").append(div1,div2,div4)
});
}

 let cart_div3_img = document.createElement('img');
 cart_div3_img.style.width='350px';
 cart_div3_img.src = 'https://resources.dunzo.com/web-assets/prod/_next/static/images/no-items-in-cart-7e84056f44993b68d14184f9b2992af7.png';
 document.getElementById("last_third_div").append(cart_div3_img)

 //third div
 fruit_add_third_div =(el)=>{
     console.log('cartArr:',el);
     cart_div3_img.src=''
         
    let div2 = document.createElement('div');
    // div2.addEventListener('id','td_last_div')
    let img = document.createElement('img');
    img.style.width='60px'
    img.style.marginBottom='-20px';
    img.src=el.img_url

    let name = document.createElement('h4');
    name.marginBottom='-20px';
     name.innerText=el.name;

     let price = document.createElement('p')
     price.marginBottom='-20px';
    price.innerText = `₹${el.price}`

    button = document.createElement("button")
    button.setAttribute('id','btn_fruit');
    button.innerText='- 1 +';

    button2 = document.createElement("button")
    button2.setAttribute('id','btn2_fruit');
    button2.innerText=`CheckOut       ₹${el.price}`;
    button2.addEventListener("click",function(){
        AddToCart(el)
     });
   
    

    div2.append(img,name,price,button,);
     
    document.getElementById("last_third_div").append(div2,button2)
        }


       //Redirect into the add to cart page
       let second_cartArray =[]

       AddToCart = (data) => {
           console.log('data:',data)
           second_cartArray.push(data);
           localStorage.setItem("second_cartArray",JSON.stringify(second_cartArray))
           window.location.href="./cart.html"
         
       }

       