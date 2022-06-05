//document.getElementById('sign-button').addEventListener("submit",formSubmit)
let userValidOtp=[]
function formSubmit(){
var mobile=document.getElementById('mobile_Num').value

if(mobile=="" ){
    alert("please Enter your mobile number")
}

else{
    var otp=Math.floor(100000+Math.random()*99999)
    alert(`This is your OTP    ${otp}`)
    window.location.href="/otp.html"
    
}
userDetails={
    mbl:mobile,
    validOTP:otp,
}
userValidOtp.push(userDetails)
localStorage.setItem("userOTP",JSON.stringify(userValidOtp))
}




