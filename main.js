import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import qr from "qr-image";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("/Users/levi/Desktop/Testing/public"))
app.use(express.static("/Users/levi/Desktop/Testing/node_modules/bootstrap"))

app.get("/", (req, res) => {
    res.sendFile("/Users/levi/Desktop/Testing/index.html")
})


app.post("/", (request, response) => {
    const url = request.body.url;
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('/Users/levi/Desktop/Testing/public/images/url.png'));
    response.sendFile("/Users/levi/Desktop/Testing/QR_code.html")
})



app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})