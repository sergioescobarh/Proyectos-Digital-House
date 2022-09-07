const express= require('express');
const app = express();
const path= require('path');
app.get('/', function(req, res) {
    let htmlpath=path.join(__dirname,'Vews/home.html');
    res.sendFile(htmlpath);
});
app.listen(3000,()=>{console.log('listening on port 3000');});
let publicPath = path.resolve(__dirname, '../Public');
app.use(express.static(publicPath));
//agregar register!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
