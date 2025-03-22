function copyToClipboard(button) {
	// Find the input field associated with the button
	const inputField = button.previousElementSibling;
  
	// Select the text inside the input field
	inputField.select();
	inputField.setSelectionRange(0, 99999); // For mobile devices
  
	// Copy the selected text to the clipboard
	navigator.clipboard.writeText(inputField.value).then(() => {
	//   alert("Copied to clipboard: " + inputField.value);
	}).catch((err) => {
	  console.error("Failed to copy text: ", err);
	});
  }