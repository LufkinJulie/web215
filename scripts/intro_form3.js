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

    // checked box validation
    var checkedSeason =  document.querySelectorAll('input[name="favorite_season"]:checked');
    var cs = []; // emoty array to hold the checked boxes
    checkedSeason.forEach((checkbox) => {cs.push(checkbox.value)});
        
	var season = ("Your favorite season: " + cs);
        

    var pets = "Your pets: " + document.querySelector('input[name="pets"]:checked').value;

	// create array to forward information.
	const newInfo = [firstName, lastName, personal_background, academic_background, subject_background, computer, courses, remember_me, sharing, season, pets];
	// place array information in new function name
	getBackground(newInfo)
}
function getBackground(newInfo)
{
    // removing the list data after clicking submit so it only apprears once
    var words = document.querySelectorAll('li');
    words.forEach((li) => li.remove());

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

