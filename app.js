var colours=["#52006A","#CD113B","#FF7600","#FFA900","#0A1931","#185ADB","#FFC947","#39A2DB","#A2DBFA","#444444","#C490E4","#F3C583","#E99497","#346751","#C84B31"];
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    const randomcolour = getrandomcolour();
    document.body.style.backgroundColor = colours[randomcolour];
})
function getrandomcolour(){
    return Math.floor(Math.random()*colours.length);
}