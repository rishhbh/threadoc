import 'dotenv/config';
import app from "./app.js";
import connectDB from "./config/connectDB.js";

const PORT = process.env.PORT || 3000;

await connectDB();

app.listen(PORT, () => {
    console.log(`The development API is running on PORT: ${PORT}`);
});
