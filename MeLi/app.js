const express= require('express');
const app = express();
const path= require('path');
//Middleware
const publicPath = path.resolve(__dirname, '../Public');
app.use(express.static(publicPath));
app.listen(process.env.PORT||3000,function(){console.log('listening on port 3000');});
//rUTAS:
app.get('/', function(req, res) {
    let htmlpath=path.join(__dirname,'Vews/home.html');
    res.sendFile(htmlpath);
});
app.get('/', function(req, res) {
    let htmlregisterpath=path.join(__dirname,'Vews/register.html');
    res.sendFile(htmlregisterpath);
});
app.get('/', function(req, res) {
    let htmlloginpath=path.join(__dirname,'Vews/login.html');
    res.sendFile(htmlloginpath);
});



















//agregar register!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
