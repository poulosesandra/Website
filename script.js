// Handle form submission
document.getElementById("applicationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from refreshing the page

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const role = document.getElementById("role").value;
  const message = document.getElementById("message").value;

  // Simple confirmation alert
  alert(`Thank you, ${name}! Your application for ${role} has been submitted successfully.`);

  // Optional: Clear the form after submission
  this.reset();
});
