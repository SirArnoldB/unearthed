import express from 'express';
import giftsRouter from './routes/gifts.js'; // why does the giftsRouter name work even though the default export is router?  Answer: The default export is router, but we can name the import anything we want.  We are naming the import giftsRouter because it is the router for the gifts resource.  We could name the import anything we want, such as router, gifts, or anything else.  The name of the import does not have to match the name of the export.

const app = express();

// Set up the port
const PORT = process.env.PORT || 3002;

// Set up express.static to serve static files such as images, HTML pages, and JavaScript files from the client\public directory:
app.use('/public', express.static('public'));

// Set up the middleware to serve files from client\public\scripts 
app.use('/scripts', express.static('client/public/scripts'));

// add the giftsRouter middleware to the application
app.use('/gifts', giftsRouter);

// Define the root route
app.get('/', (req, res) => {
    res.status(200).send(
        `<h1 style="text-align: center; margin-top: 50px; ">Unearthed API!</h1>`
    )
})

// Listen on the port
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`);
})

