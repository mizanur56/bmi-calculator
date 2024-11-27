// Select necessary elements
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateButton = document.getElementById("button");
const resultHeader = document.querySelector(".result h2");

// Add event listener to the Calculate button
calculateButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get height and weight values
  const height = parseFloat(heightInput.value) / 100; // Convert height to meters
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultHeader.textContent = "Please enter valid height and weight!";
    return;
  }

  // Calculate BMI
  const bmi = (weight / (height * height)).toFixed(2);

  // Determine BMI category
  let category = "";
  if (bmi < 18.6) {
    text = "Underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    text = "Normal weight";
  } else {
    text = "Overweight";
  }

  // Display the BMI and category
  resultHeader.textContent = `Your BMI is ${bmi} (${text})`;
});
