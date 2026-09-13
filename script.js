// Function to get a random quote
function getQuote() {

    fetch("https://dummyjson.com/quotes/random")

        // Convert response into JSON
        .then(function(response) {
            return response.json();
        })

        // Get quote data
        .then(function(data) {

            displayQuote(data.quote, data.author);

        })

        // Handle errors
        .catch(function(error) {

            console.log("Error:", error);

            displayQuote(
                "Unable to fetch quote. Please try again.",
                ""
            );
        });
}


// Function to display the quote
function displayQuote(quoteText, authorName) {

    document.getElementById("quote").textContent =
        `"${quoteText}"`;

    document.getElementById("author").textContent =
        `— ${authorName}`;
}


// Function for button click
function newQuote() {

    getQuote();

}


// Add click event to button
document.getElementById("quoteBtn")
    .addEventListener("click", newQuote);