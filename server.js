const express = require('express');
const app = express();

app.get('/', function (req, res) {
    
    //console.log(req.headers);
    
    res.send(
        {
            ipaddress: req.headers['x-forwarded-for'],
            language: req.headers['accept-language'].split(',')[0],
            software: req.headers['user-agent'].split('(')[1].split(')')[0]
        }
    );
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
