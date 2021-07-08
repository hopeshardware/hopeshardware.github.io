setRootSize()

window.onresize=setRootSize

function setRootSize(){
    var html=document.documentElement;
    var viewport=html.clientWidth;
    html.style.fontSize=viewport<1200&&viewport/16+"px";
}
