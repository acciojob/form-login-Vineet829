function getFormvalue(event) {
    event.preventDefault()
	let form = document.getElementById("form1")
	let str = ""
		for(let item of form.elements){
		if(item.type !== "submit"){
			str += `${item.value} ` 
		}
	}
alert(str.trim())
}
