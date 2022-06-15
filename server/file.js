const Express = require('express');

 const app =Express();



 app.get('/', (req , res)=>{
    res.send("hello kamlesh");
    console.log('working');
 })



 app.listen(3030,console.log('serving on port 3030'));