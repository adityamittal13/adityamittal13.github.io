const form = document.getElementById("newEventForm");

// form.addEventListener('submit', (event) => {
// 	console.log("submit button clicked");
// 	console.log(form['firstName'].value);
// 	create({form['firstName'].value, form['lastName'].value, form['latitude'].value, form['longitude'].value, form['eventType'].value, form['email'].value, form['difficulty'].value, form['description'].value});
// 	event.preventDefault();
// 	alert("Location Submitted Successfully.");
// 	window.location.replace(".index.html");
// });



async function create(data) {
	const resp = await fetch ('/~/Outdoorsy/open/markers', { 
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
	const ans = await resp.json();
}


async function getall() {
	const resp = await fetch ('/~/Outdoorsy/open/markers?all=true', { 
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
	const ans = await resp.json();
	
	/* This is used to show the answer in the code block. 
	   Delete it when copied over to your code */
	show(ans);
}
