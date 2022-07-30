const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {


    const fs = require('fs');

    let timeStamp = new Date();
    fs.writeFile(`${timeStamp.getTime()}.txt`, timeStamp.getTime().toString(), "utf-8", (err) => {
        if (err) {
            console.log("Error in creating file ", err);
            res.send({ errorMsg: "Error occurred" });
        }
        else {
            res.send({ msg: `file created successfully name & content as ${timeStamp.getTime()}` })
        }
    })
});

app.listen(PORT, () => console.log('Server Listene to port' + PORT));
