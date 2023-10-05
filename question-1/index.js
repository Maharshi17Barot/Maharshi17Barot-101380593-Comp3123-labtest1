/*STUDENT NAME - Maharshi Barot
STUDENT ID - 101380593
 */
function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(inputArray)) {
      reject("Given input is not Array");
      return;
    }

    // Filtering the non-string and lower case the remaining words
    const filteringcase = inputArray
      .filter((item) => typeof item === "string")
      .map((word) => word.toLowerCase());

    if (filteringcase.length === 0) {
      reject("No valid words ");
    } else {
      resolve(filteringcase);
    }
  });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log("Lowercased words:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
