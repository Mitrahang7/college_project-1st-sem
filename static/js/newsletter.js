function submitForm() {
  const email = document.getElementById('email-address-input').value.trim();

  // Simple email pattern check
  const emailPattern = /^[^\s@]+@gmail\.com$/;

  if (email === "") {
    alert("Please enter your email address.");
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid Gmail address (e.g., yourname@gmail.com).");
  } else {
    alert("Thank you! for signing with us.");
    document.getElementById('email-address-input').value = ""; // Clear the input
  }
}