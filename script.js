// Coupon 

let btn = document.getElementById('couponclose')
btn.addEventListener('click',closecoupon)

var coup = document.getElementById('coupon');

function closecoupon(){
    coup.style.display = 'none';   
}
// Mode change

let button = document.getElementById('togglebtn');
button.addEventListener('click',toggle);
var logo = document.querySelector('#log');

function toggle(){

    if( button.textContent == "Light"){
        button.textContent = "Dark";
        logo.width = "70"
        logo.height = "20"
        logo.src = "images/flipkart1.png"    
    }
    else{
        button.textContent = "Light";
        logo.width = "69.3"
        logo.height = "20"
        logo.src = "images/logodark2.jpg"   
    }
    document.body.classList.toggle('darktheme');
}

// Weather 

let x = document.getElementById('out');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        x.innerText="Geo Not Supported"  
    }
}
function showPosition(data){
    console.log(data)
    sessionStorage.setItem('data',data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

    /// api Calling 
    fetch(url,{method:'GET'})
    // return promise
    .then((res) => res.json())
    // return data
    .then((data) => {
        let weather = data.list[0].temp.day
        x.textContent = `${weather} °C`
    })
}