import mongoose from "mongoose";

type ConnectionObject = {
    isConnected ?: number;
}

const connection : ConnectionObject = {}

export default async function dbConnect() : Promise<void>{
    // Checking whether connection already exist - precents db choking
    if(connection.isConnected){
        console.log("Already connected to DB");
        return ;
    }
    // new DB connection
    try {
        const db = await mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017");
        connection.isConnected = db.connections[0].readyState;
        console.log("DB connected successfully to : ", db.connection.host);
    } catch (error) {
        console.log("DB connection failed - ", error);
        // Gracefully exiting the process on error
        process.exit(1)
    }
}


dbConnect();