document.getElementById("logButton").addEventListener("click", function () {


  




  fetch("data.json") // Replace 'data.json' with the actual path to your JSON file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      for (var i = 0; i < data.data.length; i++) {
        var site = data.data[i];

        var paragraph = document.createElement("p");

        paragraph.textContent = site.text;

        var targetElement = document.getElementById("data")

        targetElement.appendChild(paragraph);
      }
     
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON data:", error);
    });
});

