require('dotenv').config()
const cors = require('cors')
    , bodyParser = require('body-parser')
    , express = require('express')
    , massive = require('massive')



const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(`${__dirname}/../public/build`));//so you dont have to use npm start and nodemon just nodemon
const controller = require('./controller')

app.get('/api/shelf/:id', controller.shelf),
app.get('/api/bin/:id', controller.getBin),
app.put('/api/bin/:id', controller.updateBin),
app.delete('/api/bin/:id', controller.deleteBin),
app.post('/api/bin/:id', controller.addBin)

massive(process.env.CONNECTIONSTRING).then( db => {
    app.set('db', db)
    // app.get('db').init.seed_file().then(response=>{
    //     console.log(response)//little trick to see if its connecting to its working database.
    // })
    app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}`)
    })
    
    
})