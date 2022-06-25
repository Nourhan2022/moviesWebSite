
////////////////////////////////////////sidebar nav/////////////////////////////////////
let widthOfMenu = $(".menu").outerWidth();
console.log(widthOfMenu)
if (widthOfMenu > 0) {
    $("nav").css({
        left: `${-widthOfMenu}px`,//2shan awl ma aft7 t7'tfy el category menu
        transition:`all 1s`,
    })
    $(".fa-bars").fadeIn(100);
    $(".fa-xmark").fadeOut(100);
}

$("#showMenu").click(function () {
    let positionOfNav = $("nav").offset().left;
    if (positionOfNav < 0) {
        $("nav").css({
            left: `0px`,
            transition : `all 1s`
        })
        $("#showMenu").fadeOut(100);
        $("#closeMenu").fadeIn(100);
        $(".category").animate({opacity:"1",paddingTop:"25px"},1000)
        $(".item1").animate({ opacity: "1", paddingTop: "25px" }, 1000);
        $(".item2").animate({ opacity: "1", paddingTop: "25px" }, 1100);
        $(".item3").animate({ opacity: "1", paddingTop: "25px" }, 1200);
        $(".item4").animate({ opacity: "1", paddingTop: "25px" }, 1300);
        $(".item5").animate({ opacity: "1", paddingTop: "25px" }, 1400);
        $(".item6").animate({ opacity: "1", paddingTop: "25px" }, 1500);
    }
})
$("#closeMenu").click(function () {
    let positionOfNav = $("nav").offset().left;
    if (positionOfNav == 0) {
        $("nav").css({left: `${-widthOfMenu}px`, transition:`all 1s`})
        $(".fa-bars").fadeIn(100);
        $(".fa-xmark").fadeOut(100);
        $(".category").animate({opacity:"0",paddingTop:"500px"},500)

      
    } 
})
////////////////////////////////////////validation////////////////////////////////////////////////////////////
let userName = document.getElementById("userName");
let nameAlert = document.getElementById("nameAlert");
let userEmail = document.getElementById("userEmail");
let EmailAlert = document.getElementById("EmailAlert");
let userPhone = document.getElementById("userPhone");
let phoneAlert = document.getElementById("phoneAlert");
let userAge = document.getElementById("userAge");
let ageAlert = document.getElementById("ageAlert");
let userPassword = document.getElementById("userPassword");
let passwordAlert = document.getElementById("passwordAlert");
let userRepassword = document.getElementById("userRepassword");
let rePasswordAlert = document.getElementById("rePasswordAlert");
let submitBtn = document.getElementById("submitBtn");
let users;
let pass;
//////////////////////////////local storage///////////////////////////////

if (localStorage.getItem("usersInfo") == null) {
    users = [];
} else {
    users =JSON.parse (localStorage.getItem("usersInfo"));
}

submitBtn.addEventListener("click", function () {
    let userDetails = {
        name: userName.value,
        email: userEmail.value,
        phone: userPhone.value,
        age: userAge.value,
        password: userPassword.value,
        repassword: userRepassword.value,
    
    };
    // console.log(userDetails)
    users.push(userDetails);
    // console.log(users);
    localStorage.setItem("usersInfo",JSON.stringify(users))

})
function userNameValidation() {
    let regexname = /^[a-zA-Z]{3,10}[0-9]{0,}$/  //start with any letter folowwed by any number
    if (regexname.test(userName.value) == true && userName.value != "") {
                userName.classList.add('is-valid');
                userName.classList.remove('is-invalid');
                nameAlert.style.display = "none";
                return true;
        
            } else {
                userName.classList.remove('is-valid');
                userName.classList.add('is-invalid');
                nameAlert.style.display = "block";
                return false
            } 
}
function userEmailValidation() {
    let regexEmail = /^[a-zA-Z]{3,10}[0-9]{0,}@gmail.com$/  //start with any letter folowwed by any number
    if (regexEmail.test(userEmail.value) == true && userEmail.value != "") {
        userEmail.classList.add('is-valid');
        userEmail.classList.remove('is-invalid');
                EmailAlert.style.display = "none";
                return true;
        
            } else {
                userEmail.classList.remove('is-valid');
                userEmail.classList.add('is-invalid');
                EmailAlert.style.display = "block";
                return false
            } 
}
function userPhoneVAlidation() {
    let regexPhone = /^01[0125][0-9]{8}$/  //start with any letter folowwed by any number
    if (regexPhone.test(userPhone.value) == true && userPhone.value != "") {
        userPhone.classList.add('is-valid');
        userPhone.classList.remove('is-invalid');
        phoneAlert.style.display = "none";
                return true;
        
            } else {
                userPhone.classList.remove('is-valid');
                userPhone.classList.add('is-invalid');
                phoneAlert.style.display = "block";
                return false
            } 

}
function userAgeVAlidation() {
    if (userAge.value>17 &&userAge.value<81 && userAge.value != "") {
        userAge.classList.add('is-valid');
        userAge.classList.remove('is-invalid');
        ageAlert.style.display = "none";
                return true;
        
            } else {
                userAge.classList.remove('is-valid');
                userAge.classList.add('is-invalid');
                ageAlert.style.display = "block";
                return false
            } 

}
function userPasswordValidation() {
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  
    if (regexPassword.test(userPassword.value) == true && userPassword.value != "") {
        userPassword.classList.add('is-valid');
        userPassword.classList.remove('is-invalid');
        passwordAlert.style.display = "none";
        pass = userPassword.value;
        
                return true;
        
            } else {
                userPassword.classList.remove('is-valid');
                userPassword.classList.add('is-invalid');
                passwordAlert.style.display = "block";
                return false
            } 

}
function userRePasswordValidation() {
    let regexRePassword = pass;
    if ( pass === userRepassword.value && userRepassword.value !="") {
        userRepassword.classList.add('is-valid');
        userRepassword.classList.remove('is-invalid');
        rePasswordAlert.style.display = "none";
        return true;
    } 
        else {
            userRepassword.classList.remove('is-valid');
            userRepassword.classList.add('is-invalid');
        rePasswordAlert.style.display = "block";
            return false
        } 
}

userName.addEventListener("input", userNameValidation);
userEmail.addEventListener("input", userEmailValidation);
userPhone.addEventListener("input", userPhoneVAlidation);
userAge.addEventListener("input", userAgeVAlidation);
userPassword.addEventListener("input", userPasswordValidation);
userRepassword.addEventListener("input", userRePasswordValidation);

document.getElementById("contact").addEventListener("keyup", function () {
    if (userNameValidation() == true
        && userEmailValidation() == true &&
        userPhoneVAlidation() == true &&
        userAgeVAlidation() == true &&
        userPasswordValidation() == true &&
        userRePasswordValidation() ) {
        submitBtn.removeAttribute("disabled")

    }
    else {
        submitBtn.setAttribute("disabled","0")
    }
       }
        
)
//======================================================FETCH APi=====================================================
async function fetchApi(klma) {
    let API = `https://api.themoviedb.org/3/movie/${klma}?api_key=4f5c95a850dac9550074b948eac5e163&language=en-US`
    let myhttp = await fetch(API);
    let response = await myhttp.json();
    let result = response.results;
    console.log("resultArry", result);
    displayMovies(result);
    
}
//=========================================================displayMovies()============================================
// let movie;
// let moviesArray;
function displayMovies(x) {
    //x is parameter which is equal to result from fetch function
    // console.log(x)
    // let moviesArray = [];
    cartona = ``;
        for (let index = 0; index < x.length; index++) {
        cartona +=`<div class="col-md-4 p-2">
        <div class="box position-relative overflow-hidden">
            <img src="https://image.tmdb.org/t/p/w500${x[index].poster_path}" class="w-100" alt="">
            <div
                class="details p-4 text-center position-absolute top-100 w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                <h4>${x[index].title}</h4>
                <p>${x[index].overview}</p>
                <span>rate: ${x[index].vote_average}</span>
                <span>${x[index].release_date}</span>
            </div>
        </div>

    </div>`
        //  movie = `${x[index].title}`
        // moviesArray.push(movie)
    }
    document.getElementById("data").innerHTML = cartona;
    // console.log(moviesArray)
    // return moviesArray;

}
// console.log(moviesArray)
//==================================================display with nav menu=============================================
let categoryLink = document.querySelectorAll(".nav-category")//btrgy nodelist
let categoryArray = [...categoryLink]// 7wltha l array b spread operator[...]
// console.log(categoryArray.length)//5
for (let i = 0; i < categoryArray.length; i++){
    // console.log(i)
    categoryArray[i].addEventListener("click", function (e) {
        let categoryLowerCase = e.target.innerHTML.toLowerCase()
        let categoryApi = categoryLowerCase.replace(" ", "_");
        if (categoryApi == "trending") {
            // console.log("ay7aga")
            async function fetchApitrending() {
                let APItrending = `https://api.themoviedb.org/3/trending/all/day?api_key=4f5c95a850dac9550074b948eac5e163&language=en-US`
                let myhttpTrending = await fetch(APItrending);
                let response = await myhttpTrending.json();
                let result = response.results;
                // console.log("resultArry", result);
                displayMovies(result);
            }
            fetchApitrending();
            } else { 
            fetchApi(categoryApi)
    
        }
            
      
    })
}
fetchApi("now_playing")
//========================================SEARCH By Word============================================================
let searchWordInput = document.getElementById("searchWordInput");

async function searchFetch(y) {
    let searchApi = `https://api.themoviedb.org/3/search/movie?api_key=4f5c95a850dac9550074b948eac5e163&query=${y}`;
    let mylink = await fetch(searchApi);
    let data = await mylink.json();
    let searchresult = data.results;
    // console.log(searchresult);
    displayMovies(searchresult);
}

searchWordInput.addEventListener("keyup", function () {
    let searchByWord = searchWordInput.value;
    searchFetch(searchByWord)
})
//================================================SEARCH IN PAGE===============================================================
let searchInPage = document.getElementById("searchInPage")
searchInPage.addEventListener("keyup", function () {
    // console.log("hello")
    let movieName = searchInPage.value;


    
})
////////////////////////////////////////////////////////////////////FETCH TAGS//////////////////////////////////////////
async function fetchTag() {
    let http = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=4f5c95a850dac9550074b948eac5e163&language=en-US`)
    let response = await http.json();
    let res = response.genres;
    // console.log(res)
    displayTags(res);


}
let genreArr=[]
function displayTags(p) {
    let cartona = ``;
    for (let i = 0; i < p.length; i++){
        cartona += `<button class="btn btn-outline-light genrebtn">${p[i].name}</button>`;
            }
    document.getElementById("tags").innerHTML = cartona;
}
fetchTag()




