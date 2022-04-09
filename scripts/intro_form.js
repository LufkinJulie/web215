function getInfo() 
{
	var firstName = "First Name: " + document.getElementById("firstName").value;
	var lastName = "Last Name: " + document.getElementById("lastName").value;
	var personal_background = "Personal Background: "  + document.getElementById("personal_background").value;
	var academic_background = "Academic Background: " + document.getElementById("academic_background").value;
	var subject_background = "Background in this subject: " + document.getElementById("subject_background").value;
	var computer = "Primary Computer Platform: " + document.getElementById("computer").value;
	var courses = "Courses I'm Taking, & Why: " + document.getElementById("courses").value;
	var remember_me = "Something to Remember Me By: " + document.getElementById("remember_me").value;
	var sharing = "I'd Also Like to Share: " + document.getElementById("sharing").value;
    var favorite_season = "Your favorite season: " + document.querySelector('input[name="favorite_season"]:checked');
    var pets = "Your pets: " + document.querySelector('input[name="pets"]:checked');

	// create array to forward information.
	const newInfo = [firstName, lastName, personal_background, professional_background, academic_background, subject_background, computer, courses, remember_me, sharing, favorite_season, pets];
	// place array information in new function name
	getBackground(newInfo);
}
function getBackground(newInfo)
{
	for (let i = 0; i < newInfo.length; i++)
	{
		// creating the list element
		var newList = document.createElement("li");
		
		// text output
		var newTextOutput = document.createTextNode(newInfo[i]);
			
		// append info
		newList.appendChild(newTextOutput);
			
		// where to place on page
		var place = document.getElementsByTagName("ul")[0];
		place.appendChild(newList);
	}
}

