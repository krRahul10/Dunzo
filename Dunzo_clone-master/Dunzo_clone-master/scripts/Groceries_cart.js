let before_element = document.getElementById('products1').querySelector('button');
    let before_div = 0;

    let CovidEssentials = [
    {
        name:''
    },  
    {
        name: "Dettol Liquid Hand Wash Refill Pouch",
        volume: "185 Ml",
        price: "138",
        img: "https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1645186928875_product_5bc87ae10d298a283c297402_1.jpg",
    }, {
        name: "Dettol Skincare Hand Wash Pump",
        volume: "250 Ml",
        price: "90",
        img: "https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/TmtPMHR3T3paUk43R3QzZHhFRDM1QT09-product_image.jpg",
    }, {
        name: "Godrej Master Blaster Blue Handwash Refill Pack",
        volume: "800 Ml",
        price: "115",
        img: "https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615700650955_product_5bf85868269a0f1dd3c37b8e_1.jpg",
    }, {
        name: "Lifebuoy Total 10 Hand Sanitizer",
        volume: "500 Ml",
        price: "250",
        img: "https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1625237400505_product_5bf85868269a0f1dd3c37bc0_1.jpg",
    }, {
        name: "Lizol Neem Disinfectant Surface Cleaner",
        volume: "2 LTRS",
        price: "362",
        img: "https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/UlRmY1ZYblN1Uk9rWHIwcGlOMnNWQT09-product_image.jpg",
    }, ];

    let covidEssentials = [CovidEssentials];
    localStorage.setItem('covidEssentials',JSON.stringify(covidEssentials));



    function display(arr) {
        let main_div = document.getElementById("prds");

        arr.forEach(function(type) {
            type.forEach(function(products,index) {
                    if(index === 0){
                        let h2 = document.createElement('h2');
                        h2.innerText = products.name;
                        h2.style.fontWeight = 'bold';
                        main_div.append(h2);
                    }else{
                        var div = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("id","img")
                        var details = document.createElement("div");
                        var name = document.createElement("h4")
                        var quantity = document.createElement("p");
                        var price = document.createElement("h5");
                        var button = document.createElement("button");
                        
                        img.src = products.img;
                        name.textContent=products.name;
                        quantity.textContent=products.volume;
                        price.textContent=`₹ ${products.price}`;
                        button.innerText="+ADD"
                        details.append(name,quantity,price);
                        quantity.setAttribute("class","quantity");
                        name.setAttribute("class","name");
                        price.setAttribute("class","name")
                        details.setAttribute("id","details")
                        div.append(img,details,button);
                        div.setAttribute("id","divs")
                        document.getElementById("prds").append(div);
                        button.addEventListener('click',moveToCart);
                        div.addEventListener('mouseenter',function(){
                            div.querySelector('h4').style.color = 'green';
                            div.setAttribute('class','transform');
                        })
                        div.addEventListener('mouseleave',function(){
                            div.querySelector('h4').style.color = 'black';
                            div.setAttribute('class','transformBack');
                        })
                    }
                    
            })
        });
        before_div = document.getElementById('prds');
    }

    function displayitems(e,id){
        before_element.style = "none";
        console.log(before_div)
        
        while (before_div.firstChild) {
            before_div.removeChild(before_div.lastChild);
        }

        let btn = e.target;
        btn.style.fontSize = "large";
        btn.style.fontWeight = "bold";
        btn.style.color="rgb(0, 179, 122)";
        before_element = btn;

        let itemsHead = document.getElementById('heading');
        itemsHead.innerText = btn.innerText;
        let data = JSON.parse(localStorage.getItem(id));

        if(data == null){
            let main_div = document.getElementById("prds");
            let h2 = document.createElement('h2');
            h2.innerText = "Sorry! Not Available Now";
            main_div.append(h2);
        }else{
            display(JSON.parse(localStorage.getItem(id)));
        }
       
    }
    


    display(JSON.parse(localStorage.getItem('covidEssentials')));
    

    function moveToCart() {
        location.reload();
        let cart = [];
        let isThere = false;
        
        let price = event.target.parentNode.querySelector('h5').innerText;
        let arr = price.split(" ");
        price = Number(arr[1]);

        let item = {
            name:event.target.parentNode.querySelector('h4').innerText,
            img:event.target.parentNode.querySelector('img').src,
            volume:event.target.parentNode.querySelector('p').innerText,
            price:price,
            qty:1
        };
        console.log(item);

        cart = JSON.parse(localStorage.getItem('dunzo_Cart')); 

        if(cart === null){
            console.log('set the cart');
            cart = [item];
            localStorage.setItem('dunzo_Cart',JSON.stringify(cart));
        }else{
            cart.forEach(function(prd){
                if(prd.name === item.name){
                    prd.qty = prd.qty + 1;
                    isThere = true;
                } 
            });

            if(isThere == false){
                cart[cart.length]=item;
                localStorage.setItem('dunzo_Cart',JSON.stringify(cart));
                isThere = false;
            }else{
                localStorage.setItem('dunzo_Cart',JSON.stringify(cart));
            }
            
        }
        if(JSON.parse(localStorage.getItem('dunzo_Cart')) != null){
            displayCartItems();
        }
       
    }


    function displayCartItems() {
        let total_price = 0;
        let main_div = document.getElementById('products3')
        main_div.style.overflow = 'scroll';
        let cart = JSON.parse(localStorage.getItem('dunzo_Cart'));
        console.log(cart);
    
            while (main_div.firstChild) {
            main_div.removeChild(main_div.lastChild);
            }

            let p = document.createElement('p');
            p.innerText = 'Your Cart';
            let ul = document.createElement('ul');
            main_div.append(p);

            cart.forEach(function(prd){
                let li = document.createElement('li');
                li.style.display = 'flex';
                li.style.marginBottom = '15px'

                let div1 = document.createElement('div');
                div1.style.width = '42%'
                let h3 = document.createElement('h3');
                h3.innerText = prd.name;
                h3.style.fontWeight = 'lighter';
                let h5 = document.createElement('h5');
                h5.style.fontWeight = 'lighter';
                h5.innerText = prd.volume;

                let div2 = document.createElement('div');
                div2.id = "box";
                div2.style.width = '15%'
                let btn1 = document.createElement('button');
                btn1.id = 'minus';
                btn1.addEventListener('click',function(){
                    let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                    let cart = JSON.parse(localStorage.getItem('dunzo_Cart'));

                    cart.forEach(function(prd,index){
                        if(prd.name == name){
                            prd.qty = prd.qty-1;
                            if(prd.qty == 0){
                                cart.splice(index,1)
                               
                            }
                            total_price -= prd.price;
                        }
                    });
                    localStorage.removeItem('dunzo_Cart')
                    localStorage.setItem('dunzo_Cart',JSON.stringify(cart));
                    location.reload();
                    if(JSON.parse(localStorage.getItem('dunzo_Cart')).length === 0){
                        localStorage.removeItem('dunzo_Cart')
                    }

                })


                let span = document.createElement('span');
                span.id ='val';


                let btn2 = document.createElement('button');
                btn2.id = 'plus';
                btn2.addEventListener('click',function(){
                    let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                    let cart = JSON.parse(localStorage.getItem('dunzo_Cart'));

                    cart.forEach(function(prd){
                        if(prd.name == name){
                            prd.qty = prd.qty+1;
                            total_price += prd.price;
                        }
                    });
                    localStorage.removeItem('dunzo_Cart')
                    localStorage.setItem('dunzo_Cart',JSON.stringify(cart));
                    location.reload();
                })
                
                span.innerText = prd.qty;
                btn1.innerText = '-';
                btn2.innerText = '+';

                let div3 = document.createElement('div');
                div3.style.width = '20%'
                let h4 = document.createElement('h4');
                h4.innerText = '₹'+ prd.price * prd.qty;

                total_price += prd.price*prd.qty;

                div1.append(h3,h5);
                div2.append(btn1,span,btn2);
                div3.append(h4)
                li.append(div1,div2,div3);
                ul.append(li)
                
            })
                let div4 = document.createElement('div');
                div4.id = 'checkout';
                let checkout_btn = document.createElement('button');
                checkout_btn.innerText = `checkout ₹${total_price}`;
                checkout_btn.setAttribute("class","checkout")
                div4.append(checkout_btn);
            main_div.append(ul,div4);
           
    }

    if(JSON.parse(localStorage.getItem('dunzo_Cart')) != null){
        displayCartItems();
    } 
    document.getElementById("location").innerText=JSON.parse(localStorage.getItem("location"));
    document.getElementById("set_location").addEventListener("click",getLoc);
        function getLoc(){
            var input = prompt("Please enter your location.");
            if(localStorage.getItem("location")==null){
                localStorage.setItem("location",JSON.stringify(input));
            }else if(localStorage.getItem("location")!=null){
            var data = localStorage.getItem("location");
            data = JSON.parse(data);
            if(data!=input){
                localStorage.setItem("location",JSON.stringify(input));
            } 
        }
    }
    document.getElementById("cart").addEventListener("click",cart);
        document.getElementById("head").querySelector("p").innerText=`India > ${JSON.parse(localStorage.getItem("location"))}`

        if(JSON.parse(localStorage.getItem('dunzo_Cart')) != null){
            var circle = document.getElementById('circle');

            let arr = JSON.parse(localStorage.getItem('dunzo_Cart'));
            let qty = 0;

            arr.forEach(function(prd){
                qty += prd.qty;
            });

            circle.innerText = qty;
        }else{
            document.getElementById('circle').style.display = "none";
        }