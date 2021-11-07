// Numbers: 48-57
// SmallLetters: 97-122
// UpperLetters: 65-90
// specialChar: 33-47 && 58-64 && 91-96 && 123-126
// This is a basic random password generator API based on ASCII 128 Chars

const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors())


app.get("/", (req, res) => {
    res.status(200).send("Hello from the API. The PWD is "+ getRandomPwd())
})


const getRandomPwd = () => {
    return "checkPwd"
}


app.listen(port, () => {
    console.log("Server is running")
})