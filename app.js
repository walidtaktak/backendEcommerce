const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')

dotenv.config()
const app = express();
const categorieRouter =require("./routes/categories.route")
const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);
app.use('/api/categories', categorieRouter);
const articleRouter =require("./routes/article.route")
app.use('/api/articles', articleRouter);
//BodyParser Middleware
app.use(express.json());
mongoose.set('strictQuery', true)
const connect = async () => {
    try {
    await mongoose.connect(process.env.DATABASEcloud);
    console.log("Connected to mongoDB.");
    } catch (error) {
    throw error;
    }
    };
    mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
    });
    
    app.get("/",(req,res)=>{
    res.send("bonjour");
    });
    app.listen(process.env.PORT, () => {
        connect();
    console.log(`Server is listening on port ${process.env.PORT}`); });


    
