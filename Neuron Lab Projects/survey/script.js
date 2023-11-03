document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const education = document.getElementById("education").value;
    const favoriteColor = document.getElementById("favorite-color").value;
    const programmingLang = document.getElementById("programming-lang").value;
    const additionalComments = document.getElementById("additional-comments").value;

    // Handle the form data as needed

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Highest Education Level: " + education);
    console.log("Favorite Color: " + favoriteColor);
    console.log("Favorite Programming Language: " + programmingLang);
    console.log("Additional Comments: " + additionalComments);

    // You can add further processing here, such as sending data to a server.

    document.getElementById("surveyForm").reset();
});
