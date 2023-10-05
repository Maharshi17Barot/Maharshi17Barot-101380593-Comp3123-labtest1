/*STUDENT NAME - Maharshi Barot
STUDENT ID - 101380593
 */

//QUESTION-3 
//PART-2 remove.js file

const fs = require('fs');
const path = require('path');

if(fs.existsSync("logs")) {
    
    fs.readdir("logs", (err, files) => {
        if (err) throw err;
        for (const file of files) {
            
            const filepath = path.join("logs", file);
            fs.unlink(filepath, err => {
                if (err) throw err;
            });
            console.log(`delete files...${file}`);
        }
        fs.rmdirSync("logs");
    });
}