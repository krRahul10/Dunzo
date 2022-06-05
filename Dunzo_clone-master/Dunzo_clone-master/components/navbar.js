function navbar(){
    return `
    <div class="first-div">
        <div>
            <img class="dunzo-img" onclick="window.location.href=''" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png" alt="">
        </div>
        <div class="location-div">
        <span>
            <img id="location-icon" src="https://www.pinclipart.com/picdir/big/391-3913630_new-training-location-green-location-icon-png-clipart.png" alt=""></span>
            <p class="location-tag" onclick="window.location.href=''">Set Location</p>
        </div>
    </div> 
    <div class="second-div">
    <div class="partners-div">
        <p class="Hover-class">Dunzo for partners</p>
    </div>
    <div class="business-div">
        <p class="Hover-class">Business with Dunzo</p>
    </div>
    <div class="search-div">
        <img id="search-icon" src="https://media.istockphoto.com/vectors/icon-search-logo-design-universal-business-social-media-vector-id995577016?k=6&m=995577016&s=170667a&w=0&h=CmeJfTL2uLuleqE-gmJ7nFC1zKE3q9QakSCZXAf0Wzs=" alt="">
        <p class="Hover-class">Search</p>
    </div>
    <div class="cart-div">
        <img id="cart-icon" src="https://cdn-icons-png.flaticon.com/128/419/419910.png" alt="">
        <p class="Hover-class">Cart</p>
    </div>
    <div class="signin-div">
    <a href="./signin.html"><button id="signIn-button">Sign in</button></a>
    </div>
    </div>
    
    `
}
export default navbar