// Function to show loading spinner
function showLoading() {
    // Replace with your loading indicator logic (e.g., show a spinner)
    var loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.textContent = 'Processing...';
    document.body.appendChild(loadingDiv);
}

// Function to hide loading spinner
function hideLoading() {
    // Replace with your loading indicator logic (e.g., hide the spinner)
    var loadingDiv = document.getElementById('loading');
    if (loadingDiv) {
        loadingDiv.parentNode.removeChild(loadingDiv);
    }
}

document.getElementById("projectForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Show loading indicator
    showLoading();

    var topic = document.getElementById("topic").value;
    var description = document.getElementById("description").value;
    var groupMembers = document.getElementById("groupMembers").value;
    var rollNo1 = document.getElementById("rollNo1").value;
    var name1 = document.getElementById("name1").value;
    var rollNo2 = document.getElementById("rollNo2").value;
    var name2 = document.getElementById("name2").value;

    // Validate description length
    var descriptionWords = description.trim().split(/\s+/).length;
    if (descriptionWords < 50) {
        hideLoading(); // Hide loading indicator
        alert("Project/Topic Description must be at least 50 words.");
        return;
    }

    // Validate roll numbers
    if (!isValidRollNo(rollNo1)) {
        hideLoading(); // Hide loading indicator
        alert("Invalid AKTU Roll No for Group Member 1.");
        return;
    }
    if (groupMembers == "2" && !isValidRollNo(rollNo2)) {
        hideLoading(); // Hide loading indicator
        alert("Invalid AKTU Roll No for Group Member 2.");
        return;
    }

    var formData = {
        topic: topic,
        description: description,
        groupMembers: groupMembers,
        member1: {
            rollNo: rollNo1,
            name: name1
        },
        member2: groupMembers == "2" ? {
            rollNo: rollNo2,
            name: name2
        } : null
    };

    fetch('https://script.google.com/macros/s/AKfycbx55irYCgm9LFcZl3irKeqaOP8C-D6FgnZmnpu-xb8uLJf3f446KuioA8OIeJqTSWzbwQ/exec', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => response.json())
      .then(data => {
          hideLoading(); // Hide loading indicator
          if (data.result === "success") {
              alert("Form submitted successfully!");
              location.reload(); // Reload the webpage
          } else {
              alert("There was an error submitting the form.");
          }
      })
      .catch(error => {
          hideLoading(); // Hide loading indicator
          alert("There was a network error. Please try again.");
      });
});
