const http = require("http");
const PORT = 9007;
const app = require("./main")

http.createServer(app).listen(PORT, ()=>{
    console.log(`Listening at PORT ${PORT}`);
})