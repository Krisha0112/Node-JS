const http = require('http');

const port = 8000;

const fs = require('fs');

const server = http.createServer((req, res) => {
    let fileName = "";
    switch (req.url) {
        case './home':
            fileName = './home.html'
            break;
        case './about':
            fileName = './about.html'
            break;
        case './services':
            fileName = './services.html'
            break;
        case './contact':
            fileName = './contact.html'
            break;
        default:
            fileName = './404.html'

    }

    fs.readFile(fileName, (err, pageName) => {
        if (err) {
            console.log(err);
            return false;

        }
        res.end(pageName)
    })
})
server.listen(port, (err) => {
   if(!err){
    console.log(`Server is running on port :- http://localhost:${port}`);
   }
});