/*STUDENT NAME - KUSHAL PATEL
STUDENT ID - 103890
 */

//QUESTION-3
//PART-1 add.js file

const fs = require("fs");

if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}

process.chdir("logs");

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;

  fs.writeFile(fileName, "some text", (err) => {
    if (err) {
      throw err;
    }
  });

  console.log(fileName);
}
