import exp from 'express'

import {connect} from 'mongoose'

import {config} from 'dotenv'
config()

const app = exp()
const port = process.env.PORT || 3000

//_____________________start server_______________________________
app.listen(port,()=>console.log(`Server running on port ${port}`))
//================================================================


//_________________connect to DB server___________________________
async function connectDB()
{
    try
    {
        await connect(process.env.MONGO_DB_URI);
        console.log("DB connection established")
    }
    catch(err)
    {
        console.log(err)
    }
}
connectDB()