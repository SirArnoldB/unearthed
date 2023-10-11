import express from 'express';
import './config/dotenv.js';
import giftsRouter from './routes/gifts.js'; // why does the giftsRouter name work even though the default export is router?  Answer: The default export is router, but we can name the import anything we want.  We are naming the import giftsRouter because it is the router for the gifts resource.  We could name the import anything we want, such as router, gifts, or anything else.  The name of the import does not have to match the name of the export.
import cors from 'cors';

// Set up the express instance
const app = express();

// Set up the cors middleware
app.use(cors());

// Set up the express middleware to parse incoming requests with JSON payloads
app.use(express.json());

// add the giftsRouter middleware to the application
app.use('/gifts', giftsRouter);

// Define the root route
app.get('/', (req, res) => {
    res.status(200).send(
        `<h1 style="text-align: center; margin-top: 50px; ">Unearthed API!</h1>`
    )
})

// Set up the port
const PORT = process.env.PORT || 3002;

// Listen on the port
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`);
})

