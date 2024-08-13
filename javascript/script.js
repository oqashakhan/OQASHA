let icon = document.getElementById("icon");
let con = document.getElementById("con");
let ul = document.getElementById("ul");

icon.addEventListener("click" ,()=>{
   
    con.classList.toggle("show");
    ul.classList.toggle("z-in");
     
    if(con.className == "show")
    {
        icon.classList = "bi bi-x-lg"
    }
    else{
        
        icon.classList = "bi bi-list"
    }
})

// preloader 
let loader = document.getElementById("preloader");
window.addEventListener("load" ,(e) =>{
     loader.style.display= "none";
})
// preloader endd



