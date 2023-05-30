const express = require('express');
const app = express();
var QRCode = require('qrcode')
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.get('/qr', (req, res) => {
    const text = req.query.text;
    QRCode.toString(text, { type: 'svg' }, function (err, url) {
        console.log(url)
        res.json({ 'key': url });
    })

})

app.listen(3000);