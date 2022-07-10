var viewButton=document.getElementById("viwed_button");
var portfolio=document.getElementById("portfolio-container");
viewButton.style.visibility="hidden";
var ans=0;
function checkVisiblity(){
  //visiblity
  var topCoordinate=portfolio.getBoundingClientRect().top;
  var bottomCoordinate=portfolio.getBoundingClientRect().bottom;
  var totalPortfolioHeight=portfolio.offsetHeight;
  var windowHeight=window.innerHeight;
  if(topCoordinate-windowHeight<=0){
    viewButton.style.visibility="visible";
    // console.log("visible");
    //calculation for persentage
    if(topCoordinate>=0){
      ans=((Math.abs(Math.abs(topCoordinate)-windowHeight)/totalPortfolioHeight)*100).toFixed(0);
    }else{
      ans=((Math.abs(Math.abs(topCoordinate)+windowHeight)/totalPortfolioHeight)*100).toFixed(0); 
    }
    if(ans>100){
      ans=100;
    }
    viewButton.textContent=ans+"% viewed";
  }else if(topCoordinate-windowHeight>0){
    viewButton.style.visibility="hidden";
    var ans=0;
    // console.log("hidden");    
  }
  return;
  //if visible->
  //else return;
}
checkVisiblity();
window.addEventListener("scroll",checkVisiblity);