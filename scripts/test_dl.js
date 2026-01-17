const fs = require('fs');
const https = require('https');

const url = "https://cdn.simpleicons.org/amazonaws/FF9900";
const dest = "public/images/tech/test_aws.svg";

const file = fs.createWriteStream(dest);
const request = https.get(url, function (response) {
    console.log("Status:", response.statusCode);
    response.pipe(file);
    file.on('finish', function () {
        file.close(() => console.log("Done"));
    });
}).on('error', function (err) {
    fs.unlink(dest, () => { });
    console.error("Error:", err.message);
});
