const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav ul");

// Toggle menu open/close on click
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking any nav link
    document.querySelectorAll(".main-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}
    



//Function to open the lightbox
function openLightBox(imageSrc) {
    //Get the lightbox container
    const lightbox = document.getElementById("lightbox");

    //Get the large image
    const lightboxImage = document.getElementById("lightboxImage")

    //Set the large image to the clicked image
    lightboxImage.src = imageSrc;

    //Display LightBox
    lightbox.style.display = "flex";

}

//Function to close the lightbox
function closeLightBox() {
    //Hide the lightbox
    document.getElementById("lightbox").style.display = "none";

}




//Step 1: Selecting all the accordion button

/*
document.querySelectorAll() searches the HTML document 
and it selects every element with the class accordion

//we store all the accordion buttons in a constant variable called "accordion"

querySelectorAll() returns a NodeList which is a collection of elements

*/

const accordions = document.querySelectorAll(".accordion");

//Step 2: Looping through each button
accordions.forEach((accordion) =>  //ForEach allows us to go through every accordion button that we selected in Step 1
{
    //Step 3: Add a click event
    accordion.addEventListener("click", () => {
        //Step 4: Find the content panel 
        //NextElementSibling selects the HTML element that appears after the button
        //In our code that is the class called 'panel'
        //We store thr panel in a variable called 'panel'
        //This tells JavaScript which content belongs to the button that was clicked
        const panel = accordion.nextElementSibling;

        //Step 5: Check if the panel is Open
        //ClassList.contains() check whether an HTML element has a particular CSS class
        //here we check if the clicked button has the class "active"
        //If the class exists, the results are true
        //If the class does not exist the results are fake.

        const isOpen =
            accordion.classList.contains("active");

        //Step 6: Close all accordions
        accordions.forEach((item) => {  //this loop will go through the accordion buttons again

            item.classList.remove("active");  //removes the active CSS class form the current accordion button 

            item.setAttribute("aria-expanded", "false");
            //aria-expanded tells screen readers whether the accordion is open or closed
            //false means the content is closed

            const itemPanel = item.nextElementSibling

            itemPanel.classList.remove("open")
            itemPanel.style.maxHeight = null;

        });

        //Step 7: Open the clicked Accordion
        //only if it was previously closed

        if (!isOpen) {

            accordion.classList.add("active");

            accordion.setAttribute("aria-expanded", "true");

            panel.classList.add("open")

            panel.style.maxHeight = panel.scrollHeight + 30 + "px";

        }

    });

});



      var form = document.getElementById("contact-form");
      var fullNameInput = document.getElementById("fullname");
      var emailInput = document.getElementById("email");
      var nameErrorSpan = document.getElementById("nameError");
      var emailErrorSpan = document.getElementById("emailError");

      // Add an event listener to the form's submit button
      if(form){
      form.addEventListener("submit", function(event) {
        // Prevent the default form submissision (so we can validate first)
        event.preventDefault();

        // Assume the form is valid initially
        var isValid = true;

        // Clear previous error messages
        nameErrorSpan.innerHTML ="";
        emailErrorSpan.innerHTML = "";

        // 1 Validate the full name field
        if (fullNameInput.value.trim() === "") { // after removing spaces from the beginning and end of what the user typed is the result empty
            nameErrorSpan.innerHTML = "Name is required.";
            isValid = false;
        }

        // 2 Validate the email field
        // A simple Regex to check for a basic email pattern 
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailInput.value.trim()=== "") {
            emailErrorSpan.innerHTML = "Email is Required!";
            isValid = false;

        } else if (!
            emailPattern.test(emailInput.value)){
            emailErrorSpan.innerHTML = "Please enter a valid email address.";
            isValid = false;

        }


        // if the form is valid you can submit it or process the data 
        if(isValid){

        
            //Step 1: Get the information entered by the student
            var fullName = fullNameInput.value.trim();
            var email = emailInput.value.trim();

            //Step 2: Specify the email recipient
            var recipient ="ST10516252@myemeris.edu.za";

            //Step 3: Create the email subject
            var subject ="Student information Form";

            //Step 4: Create the email message
            var body ="Good day,\n\n" +
            "My information is as follows:\n\n" +
            "Full Name:" + fullName + "\n" +
            "Email:" + email + "\n\n" + 
            "Kind regards,\n" +
            fullName;

            //Step 5: Create the mailto link
            var mailtoLink = "mailto:" +
            recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

            //Step 6: Open the users default email application
            window.location.href = mailtoLink;

        }

        //Here you would typically use myForm.submit() to send the data to a server
        //For this example we will just show the alert and not the submit
        
      });

    }


// Enquiry Form      

var form = document.getElementById("enquiry-form")
var fullNameInput2 = document.getElementById("fullname2");
var nameError2 = document.getElementById("nameError2");
var emailInput2 = document.getElementById("email2");
var emailError2 = document.getElementById("emailError2");
var selectProduct = document.getElementById("selectProduct");
var productError = document.getElementById("productError");
var enquiry = document.getElementById("enquiryInput");
var enquiryError = document.getElementById("enquiryError");
var responseBox = document.getElementById("responseBox");

// Add an event listener to the form's submit button

      if (form) {
      form.addEventListener("submit", function(event) {
        // Prevent the default form submissision (so we can validate first)
        event.preventDefault();

        // Assume the form is valid initially
        var isValid = true;

        // Clear previous error messages
        nameError2.innerHTML ="";
        emailError2.innerHTML = "";
        productError.innerHTML = "";
        enquiryError.innerHTML = "";
        responseBox.innerHTML = "";


         // 1 Validate the full name field
        if (fullNameInput2.value.trim() === "") { // after removing spaces from the beginning and end of what the user typed is the result empty
            nameError2.innerHTML = "Name is required!";
            isValid = false;
        }

        // 2 Validate the email field
        // A simple Regex to check for a basic email pattern 
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailInput2.value.trim()=== "") {
            emailError2.innerHTML = "Email is Required!";
            isValid = false;

        } else if (!
            emailPattern.test(emailInput2.value)){
            emailError2.innerHTML = "Please enter a valid email address!";
            isValid = false;

        }

        // 3 Validate the select product
        if(selectProduct.value.trim() === "") {
            productError.textContent = "Please select a menu item!";
            isValid = false;

        }

        // 4 Validate the enquiry
        if  (enquiry.value.trim() === "") {
            enquiryError.innerHTML = "Please enter your enquiry!";
            isValid = false;
        }

       if (isValid) {
        // 5 Displaying the feedback on the Menu HTML screen 
        if (selectProduct.value === "menuItem1") {
        responseBox.innerHTML = "Chicken and Bacon Caesar Salad is available today. The price is R76.";

        } else if (selectProduct.value === "menuItem2") {
            responseBox.innerHTML = "Crispy Chicken Strips are out of stock today.";

        } else if (selectProduct.value === "menuItem3") {
            responseBox.innerHTML = "Classic Burger is available today. The price is R80.";

        } else if (selectProduct.value === "menuItem4") {
            responseBox.innerHTML = "Fillet Steak is out of stock.";

        } else if (selectProduct.value === "menuItem5") {
            responseBox.innerHTML = "Chocolate Brownies are available today. The price is R34.";

        } else if (selectProduct.value === "menuItem6") {  
            responseBox.innerHTML = "Chocolate Volcano is available today. The price is R79.";
    
        }
    
    }
    });

}

// Search Section

// Select the search input field 
const searchInput = document.getElementById("searchInput");

// Select all the menu cards
const menuCards = document.querySelectorAll(".menu-card");

// Select the no result message
const noResults = document.getElementById("noResults");

// Run the code whenever the user types  
if (searchInput) {
searchInput.addEventListener("input", () => {

  // Get the search text and covert it to lowercase 
  const searchText = searchInput.value.toLowerCase().trim();

  //count how many destinations match the search 
  let matchCount = 0;

  // Loop through every menu card
  menuCards.forEach((card) => {

    // Get the menu card
    const menuItemName = card.querySelector("h3").textContent.toLowerCase();

    // Get the course 
    const courseName = card.querySelector("h2").textContent.toLowerCase();

 
     //Check whether the search matches the name or province

    if(menuItemName.includes(searchText) || courseName.includes(searchText)){

        //Display matching cards
        card.hidden = false;

        //Increase matching count
        matchCount++;

    } else {

        //Hide the cards that do not match
        card.hidden = true;
    }


  });

  // Show or hide the no results message
    noResults.style.display = matchCount === 0 ? "block" : "none";


});

}




