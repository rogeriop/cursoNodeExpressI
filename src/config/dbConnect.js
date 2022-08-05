import mongoose from "mongoose"

mongoose.connect("mongodb+srv://rogeriop:vouseraguia2000@cluster0.givmi.mongodb.net/");
//                  mongodb+srv://rogeriop:     <password>@cluster0.givmi.mongodb.net/?retryWrites=true&w=majority                   
let db = mongoose.connection;

export default db;