// a延时跳转
function delayA(e){
	e.preventDefault()
	setTimeout(function(){
		var url=e.target.getAttribute("href")||e.target.parentNode.getAttribute("href")
		location.href=url
	},500)
}

export default ({ app }, inject) => {
    inject('delayA', delayA)
  }


