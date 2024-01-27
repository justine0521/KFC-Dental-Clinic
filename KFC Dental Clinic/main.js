// Show loader initially
document.querySelector('.loader').style.display = 'block';

// Simulate content loading
setTimeout(function () {
    // Hide loader
    document.querySelector('.loader').style.display = 'none';
    
    // Show content
    document.getElementById('content').style.display = 'block';
}, 5000); // Replace 5000 with the duration of your content loading

// Access the navbar element
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
     // Check if the page has been scrolled down
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = 'white';
      navbar.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)'; 
    }
    // Change navbar color back to transparent and remove box shadow
    else {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.boxShadow = 'none'; 
    }
    });

  document.addEventListener('DOMContentLoaded', function () {
    console.log('Function.js is running!');
    const checkbox = document.getElementById('check');
    const menu = document.querySelector('.menu');
  
    checkbox.addEventListener('change', function () {
      menu.classList.toggle('active', this.checked);
    });
  });
  
  const checkbox = document.getElementById('check');
  const menu = document.querySelector('.menu');
  
      checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
              document.body.style.overflow = '';
          }
      });
  
      menu.addEventListener('click', () => {
          checkbox.checked = false;
          document.body.style.overflow = '';
      });

      /*Toggle Service section button*/
      function toggleServiceOne() {
        var serviceDetails = document.querySelector('.service-detailsOne');
        var button = document.querySelector('.service.one button');
    
        // Toggle the 'show' class for the service details
        serviceDetails.classList.toggle('show');
    
        // Toggle the button text based on the current visibility state
        if (serviceDetails.classList.contains('show')) {
            button.textContent = 'Hide Services';
        } else {
            button.textContent = 'Services';
        }
    };
    function toggleServiceTwo() {
      var serviceDetails = document.querySelector('.service-detailsTwo');
      var button = document.querySelector('.service.two button');
  
      // Toggle the 'show' class for the service details
      serviceDetails.classList.toggle('show');
  
      // Toggle the button text based on the current visibility state
      if (serviceDetails.classList.contains('show')) {
          button.textContent = 'Hide Services';
      } else {
          button.textContent = 'Services';
      }
  }
  function toggleServiceThree() {
    var serviceDetails = document.querySelector('.service-detailsThree');
    var button = document.querySelector('.service.three button');
  
    // Toggle the 'show' class for the service details
    serviceDetails.classList.toggle('show');
  
    // Toggle the button text based on the current visibility state
    if (serviceDetails.classList.contains('show')) {
        button.textContent = 'Hide Services';
    } else {
        button.textContent = 'Services';
    }
  }
  function toggleServiceFour() {
    var serviceDetails = document.querySelector('.service-detailsFour');
    var button = document.querySelector('.service.four button');
  
    // Toggle the 'show' class for the service details
    serviceDetails.classList.toggle('show');
  
    // Toggle the button text based on the current visibility state
    if (serviceDetails.classList.contains('show')) {
        button.textContent = 'Hide Services';
    } else {
        button.textContent = 'Services';
    }
  }
  function toggleServiceFive() {
    var serviceDetails = document.querySelector('.service-detailsFive');
    var button = document.querySelector('.service.five button');
  
    // Toggle the 'show' class for the service details
    serviceDetails.classList.toggle('show');
  
    // Toggle the button text based on the current visibility state
    if (serviceDetails.classList.contains('show')) {
        button.textContent = 'Hide Services';
    } else {
        button.textContent = 'Services';
    }
  }
  function toggleServiceSix() {
    var serviceDetails = document.querySelector('.service-detailsSix');
    var button = document.querySelector('.service.six button');
  
    // Toggle the 'show' class for the service details
    serviceDetails.classList.toggle('show');
  
    // Toggle the button text based on the current visibility state
    if (serviceDetails.classList.contains('show')) {
        button.textContent = 'Hide Services';
    } else {
        button.textContent = 'Services';
    }
  }
  function toggleServiceSeven() {
    var serviceDetails = document.querySelector('.service-detailsSeven');
    var button = document.querySelector('.service.seven button');
  
    // Toggle the 'show' class for the service details
    serviceDetails.classList.toggle('show');
  
    // Toggle the button text based on the current visibility state
    if (serviceDetails.classList.contains('show')) {
        button.textContent = 'Hide Services';
    } else {
        button.textContent = 'Services';
    }
  }
  function toggleServiceEight() {
    var serviceDetails = document.querySelector('.service-detailsEight');
    var button = document.querySelector('.service.eight button');
  
    // Toggle the 'show' class for the service details
    serviceDetails.classList.toggle('show');
  
    // Toggle the button text based on the current visibility state
    if (serviceDetails.classList.contains('show')) {
        button.textContent = 'Hide Services';
    } else {
        button.textContent = 'Services';
    }
  }


            /* FAQS FUNCTION */
let li = document.querySelectorAll(".faq-text li");
  
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    let clickedLi;

    if (e.target.classList.contains("question-arrow")) {
      clickedLi = e.target.parentElement;
    } else {
      clickedLi = e.target.parentElement.parentElement;
    }

    clickedLi.classList.toggle("showAnswer");

    // Toggle the rotation class on the arrow icon
    let arrowIcon = clickedLi.querySelector(".fa-chevron-down");
    if (arrowIcon) {
      arrowIcon.classList.toggle("rotate");
    }
  });
}

// scroll to up button function

document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("scroll-up");

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  scrollButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});


                         // Form Validation for Appointment

        document.getElementById('myForm').addEventListener('submitbtn', function (event) {
            // Prevent the form from submitting
            event.preventDefault();

            // Call your validation function
            if (validateForm()) {
                // If validation is successful, submit the form
                document.getElementById('myForm').submit();
            }
        });

        function validateForm() {
            // Variables
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var phone = document.getElementById('phoneNum').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('Message').value;
            var nameRegex = /^[A-Za-z\s]+$/;
            var selectedDate = new Date(document.getElementById('preferredDate').value);
            var selectedTime = document.getElementById('preferredTime').value;
            var selectedBranch = document.getElementById('Branch').value
            var selectedService = document.getElementById('select-service').value;
            

            // Perform validation checks
            if (firstName === '') {
                alert('Invalid First name');
                return false;
            }
            // Check if the first name contains only letters
            else if (!nameRegex.test(firstName)) {
                alert('First Name should not contain numbers or special characters');
                return false;
            }
            // Check if the last name contains only letters
            else if (!nameRegex.test(lastName)){
                alert('Last Name should not contain numbers or special characters');
                return false;
            }
            // Check if the phone number is not empty and equal to 11 numbers and not a letter
            else if (phone === '' || phone.length !== 11 || !/^\d+$/.test(phone)){
                alert('Please input a valid phone number');
                return false;
            }
            //Check if the time is not in default
            else if(selectedTime === '00:00'){
                alert('Please select your preferred time');
                return false;
            }
            //Check if the Branch is not in default
            else if(selectedBranch === 'select'){
                alert('Please select your preferred branch');
                return false;
            }
            //Check if the date is sunday
            else if ( selectedDate.getDay() === 0) {
                alert('The clinic is closed on sunday');
                return false;
            }
            //Check if the date of the KFC Dental Clinic is not equal to monday, tuesday, wednesday
            else if (selectedBranch === 'KFC DENTAL CLINIC' && (selectedDate.getDay() === 1 || selectedDate.getDay() === 2 || selectedDate.getDay() === 3)) {
                alert('The KFC Dental Clinic is open on thursday to friday');
                return false;
            }
            //Check if the date of the OPD Dental is not equal to thursday, friday, saturday
            else if (selectedBranch === 'OPD DENTAL' && (selectedDate.getDay() === 4 || selectedDate.getDay() === 5 || selectedDate.getDay() === 6)) {
                alert('The OPD Dental Clinic is open on monday to wednesday');
                return false;
            }
            // Check if the Service is not in default
            else if(selectedService === 'select') {
                alert('Please select Service.');
                return false;
            }
            // Panoramic x-ray are not available on KFC Dental Clinic
            else if (selectedBranch === 'KFC DENTAL CLINIC' && selectedService === 'PANORAMIC X-RAY') {
                alert('Panoramic X-ray are not available on KFC Dental Clinic');
                return false;
            }
            
            document.getElementById('myForm').submit();
          
                return true;
            }





            
        



