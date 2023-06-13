document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('rememberMe').checked;
  
    // Perform validation
    if (username === 'admin' && password === 'password') {
      if (rememberMe) {
        // Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Clear stored username and password from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
      alert('Login successful!');
      // Redirect to dashboard.html
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password!');
    }
  });
  
  // Check if rememberMe checkbox was previously checked
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    document.getElementById('username').value = localStorage.getItem('username');
    document.getElementById('password').value = localStorage.getItem('password');
    document.getElementById('rememberMe').checked = true;
  }
  
  document.getElementById('forgotLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    alert('Please contact the administrator to reset your username/password.');
  });
  

  document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'page2.html';
  });
  
  document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'page3.html';
  });

  document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'page4.html';
  });

  document.getElementById('page-3').addEventListener('click', function() {
    window.location.href = 'page3.html';
  });

 document.getElementById('inputPassword').addEventListener('click',function(e){
  alert('thank you!')
 })

 // script.js

const confirmButton = document.querySelector('.Confime');

confirmButton.addEventListener('click', handleConfirmClick);

function handleConfirmClick(event) {
  
  console.log('Confirm button clicked!');
  
}

// script-nextpage.js

document.addEventListener('DOMContentLoaded', handleNextPageLoad);

function handleNextPageLoad() {
  
  console.log('Next page loaded!');
  
}


  const issueLink = document.getElementById('issue-link');

  issueLink.addEventListener('click', handleLinkClick);

  function handleLinkClick(event) {
    event.preventDefault();


    console.log('Link clicked, but no navigation occurred');
  }


  function handleLinkClick(event) {
    event.preventDefault(); 
    const linkText = event.target.textContent;
    console.log(`Link clicked: ${linkText}`);
}


    // Add event listeners to the links
    document.getElementById('issue-link').addEventListener('click', handleIssueClick);
    document.getElementById('return-link').addEventListener('click', handleReturnClick);

    function handleIssueClick(event) {
        event.preventDefault();
        console.log('Issue link clicked!');
    }

    function handleReturnClick(event) {
        event.preventDefault(); 
        console.log('Return link clicked!');
    }

    // Add event listeners to the links
    document.getElementById('issue-link').addEventListener('click', handleIssueClick);
    document.getElementById('return-link').addEventListener('click', handleReturnClick);

    function handleIssueClick(event) {
        event.preventDefault(); 
        console.log('Issue link clicked!');
    }

    function handleReturnClick(event) {
        event.preventDefault();
        console.log('Return link clicked!');
    }

    function handleLinkClick(event) {
      event.preventDefault(); // Prevent the default link behavior
    
      const linkText = event.target.textContent;
      console.log(`Link clicked: ${linkText}`);
    
      // Check if it's a back or forward action
      if (linkText === 'Back') {
        window.history.back(); 
      } else if (linkText === 'Forward') {
        window.history.forward(); 
      } else {
       
      }
    }

if ("Notification" in window) {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        // Create a new notification
        const notification = new Notification("Access Restricted", {
          body: "Access is restricted to admin",
        });
      }
    })
    .catch((error) => {
      console.error("Error requesting notification permission:", error);
    });
}

  