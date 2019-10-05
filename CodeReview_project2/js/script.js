let btn = document.getElementById("calcBtn")
let output = document.getElementById("output")

btn.addEventListener("click", function(e) {
	calculateInsurance()
	e.preventDefault()
})

function calculateInsurance() {
	let name = document.getElementById("name").value
	let age = parseInt(document.getElementById("age").value)
	let hp = document.getElementById("hp").value
	let country = document.getElementById("country").value
	

	let result

	

	switch(country) {
			case "austria":
			result = hp*100/age + 50
			output.textContent = `${name}, you should pay ${result.toFixed(2)} €.`
			break
			
			case "hungary":
			result = hp*120/age + 100
			output.textContent = `${name}, you should pay ${result.toFixed(2)} €.`
			break
			
			case "greece":
			result = hp*150/(age + 3) + 50
			output.textContent = `${name}, you should pay ${result.toFixed(2)} €.`
			break
	}
}