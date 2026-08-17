// fetch data using promise chaining
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     const displayImage = document.createElement("img");
//     displayImage.src = data.message;
//     displayImage.alt = "Random Dog Image";
//     document.getElementById("img-container").appendChild(displayImage);
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching the dog image:", error);
//     throw new Error("Failed to fetch the dog image. Please try again later.");
//   });

// Async function fetch API data
// async function fetchApiData() {
//   const response = await fetch("https://bored-api.appbrewery.com/random");
//   const data = await response.json();

//   console.log(data);
// }

// fetchApiData();

// Using Try and Catch block to handle errors

// try {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   const data = await response.json();
//   const displayImage = document.createElement("img");
//   displayImage.src = data.message;
//   displayImage.alt = "Random Dog Image";
//   document.getElementById("img-container").appendChild(displayImage);
//   console.log(data);
// } catch (error) {
//   console.error("error loading the dog image:", error);
//   throw new Error("Failed to fetch the dog image. Please try again later.");
// } finally {
//   console.log("Execution completed.");
// }

// JSon Response check API
// try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error("Error fetching the data:", error);
// } finally {
//   console.log("Execution completed.");
// }

// promsie constructor

const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
