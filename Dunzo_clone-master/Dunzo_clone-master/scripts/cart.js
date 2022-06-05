let second_cartArray = JSON.parse(localStorage.getItem("second_cartArray"));
console.log('data',second_cartArray);



second_cartArray.map(function (data){
    let div = document.createElement('div')

let img = document.createElement('img');
img.src = data.img_url

let name = document.createElement('h2');
name.innerText = data.name;

let pc  = document.createElement('p');
pc.innerText = data.pc;

let price = document.createElement('p')
price.innerText = `₹${data.price}`

button = document.createElement("button")
button.setAttribute('id','btn_fruit');
button.innerText='- 1 +'

div.append(img,name,pc,price,button)
document.getElementById('cart_items').append(div)

})

let s_c = JSON.parse(localStorage.getItem("second_cartArray"));

s_c.map(function (data){
let total_div1 = document.createElement('div');

let p1 = document.createElement('p');
p1.textContent= 'Item total'

let p2 = document.createElement('p');
p2.textContent= `₹${data.price}`;

total_div1.append(p1,p2)

let total_div2 = document.createElement('div');

let p3 = document.createElement('p');
p3.textContent= 'Tax'

let p4 = document.createElement('p');
p4.textContent= `₹0`;

total_div2.append(p3,p4);


let total_div3 = document.createElement('div');

let p5 = document.createElement('p');
p5.textContent= 'Packing'

let p6 = document.createElement('p');
p6.textContent= `₹0`;

total_div3.append(p5,p6)

let total_div4 = document.createElement('div');

let p7 = document.createElement('p');
p7.textContent= 'Partent delivery fee'

let p8 = document.createElement('p');
p8.textContent= `₹0`;

total_div4.append(p7,p8);


let total_div5 = document.createElement('div');

let h1 = document.createElement('h2');
h1.textContent= 'To Pay'

let h2 = document.createElement('h2');
h2.textContent= `₹${data.price}`;

total_div5.append(h1,h2);

let main_total = document.createElement("div");
main_total.setAttribute('id','main_total_t');
main_total.append(total_div1,total_div2,total_div3,total_div4,total_div5);

document.getElementById("Total_div").append(main_total);


})



let add_div = document.getElementById('add_btn');
add_div.addEventListener("click",function(){
    AddAddress()
 })


 AddAddress = () => {
     let add = document.getElementById('textArea').value;

     let display_add = document.getElementById("display_add")
     display_add .append(add);
     add=''

    //  let card_num = document.createElement("input")

     let cheackout = document.createElement('button');
     cheackout.setAttribute("id",'pay_button_t')
     cheackout.innerHTML='Make Payment'
     cheackout.addEventListener("click",function(){
        Thanks()
     })

      

     display_add .append(add,cheackout);

   
 }

 Thanks = () =>{
     window.location.href='./ThankYou.html'
 }



     


