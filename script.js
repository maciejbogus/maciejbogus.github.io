const author_nav_element = document.querySelectorAll(".author_nav_element");
const line = document.querySelectorAll(".line");
const author_content = document.querySelectorAll(".author_content");
const link_logo = document.querySelector(".linklogo");

function author_nav(n){
    author_nav_element.forEach(element => {
        element.classList.remove("nav_focused");
    });
    line.forEach(element => {
        element.style.width="0";
    });
    author_content.forEach(element => {
        element.style.opacity="0";
    });
    author_nav_element[n].classList.add("nav_focused")
    line[n].style.width = "20%";

    author_content[n].style.opacity="1";

}

link_logo.addEventListener("click", function(){
    logo = document.createElement("img");
    logo.src = "logo.png";
    logo.classList = "ueklogo";
    document.body.appendChild(logo);
    cover = document.createElement("div");
    cover.classList = "logocover";
    document.body.appendChild(cover);
    document.querySelector(".logocover").addEventListener("click", ()=>{
        document.body.removeChild(document.querySelector(".ueklogo"));
        document.body.removeChild(document.querySelector(".logocover"));
    })
});