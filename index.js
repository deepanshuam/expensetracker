// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const expenseInput = document.getElementById("expense");
    const descriptionInput = document.getElementById("description");
    const categoryInput = document.getElementById("category");

    // Creating a userDetails object
    const userDetails = {
      expense: expenseInput.value,
      description: descriptionInput.value,
      category: categoryInput.value,
    };

    // Saving to local storage with description as the key
    localStorage.setItem(userDetails.description, JSON.stringify(userDetails));

    // Displaying the user details on the screen
    displayUserOnScreen(userDetails);

    // Clearing form fields
    expenseInput.value = "";
    descriptionInput.value = "";
    categoryInput.value = "";
}

// Function to display user details on the screen
function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
       `${userDetails.expense} - ${userDetails.description} - ${userDetails.category}`
      )
    );

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    // Delete functionality
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.description);
    });

    // Edit functionality
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.description);
      document.getElementById("expense").value = userDetails.expense;
      document.getElementById("description").value = userDetails.description;
      document.getElementById("category").value = userDetails.category;
    });
}

// Attach the handleFormSubmit function to the form's submit event
document.getElementById("userForm").addEventListener("submit", handleFormSubmit);
