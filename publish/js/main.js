//menu line
const line = document.querySelector('.menuline');
const items = document.querySelectorAll('.menubar .item');

function linedraw(e) {
    line.style.left = e.offsetLeft+'px';
    line.style.width = e.offsetWidth+'px';
    line.style.opacity='1';
}
function lineremove(e){
    line.style.opacity='0';
}

items.forEach(link => {
    link.addEventListener('mouseover', (e)=>{
        linedraw(e.target);
    })
})
items.forEach(link => {
    link.addEventListener('mouseout', (e)=>{
        lineremove(e.target);
    })
})

//submenu
const intro = document.querySelector(".intro");
const blog = document.querySelector(".blog");
const language = document.querySelector(".language");

const submenus = document.querySelectorAll(".submenu");
const subitems = document.querySelectorAll("#lk");

const facaretup = document.querySelector(".fa-caret-up");
const facaretdown = document.querySelector(".fa-caret-down");

console.log(subitems);

subitems.forEach(link =>{
    link.addEventListener('mouseover', (e)=>{
        if(e.target == subitems[0]) {
            intro.style.opacity="1";
        }else if (e.target == subitems[1]){
            blog.style.opacity="1";
        }else if (e.target == subitems[3]) {
            language.style.opacity = "1";
            facaretup.style.display = "inline";
            facaretdown.style.display = "none";
        }
    })
})
subitems.forEach(link =>{
    link.addEventListener('mouseout', (e)=>{
        if(e.target == subitems[0]) {
            intro.style.opacity="0";
        }else if (e.target == subitems[1]){
            blog.style.opacity="0";
        }else if (e.target == subitems[3]) {
            language.style.opacity = "0";
            facaretup.style.display = "none";
            facaretdown.style.display = "inline";
        }
    })
})


//up&down button
//pazingNumber

//header darkmode
    //header(darkmode), page(dark-mode), footer(dark) 없애야함