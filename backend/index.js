const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:5173'],
        credentials:true
    }
))



//routes
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require("./src/orders/order.route")
const userRoutes = require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")


app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/auth",userRoutes)
app.use("/api/admin",adminRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/',(req,res) =>
        {
            res.send('Book Server!');
        });
}

//SJHP0QbkXl6ZWpF6

main().then(() => console.log("Mongodb connected successfully!")).catch(err => console.log(err)); 

app.listen(port,()=>{
    console.log(`Book App listening on port ${port}`)
})
