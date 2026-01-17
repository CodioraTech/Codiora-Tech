const fs = require('fs');
const https = require('https');

const icons = [
    { name: "react.svg", url: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "nextjs.svg", url: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "aws.svg", url: "https://cdn.simpleicons.org/amazonaws/FF9900" },
    { name: "nodejs.svg", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "docker.svg", url: "https://cdn.simpleicons.org/docker/2496ED" }
];

const destDir = "public/images/tech";

console.log("Starting debug download...");

const download = (item) => {
    const file = fs.createWriteStream(`${destDir}/${item.name}`);
    https.get(item.url, (res) => {
        console.log(`Response for ${item.name}: ${res.statusCode}`);
        if (res.statusCode === 200) {
            res.pipe(file);
        } else {
            console.log("Failed");
        }
    }).on('error', (e) => {
        console.error(`Error ${item.name}: ${e.message}`);
    });
};

icons.forEach(download);
