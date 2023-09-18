import express from 'express';
import path from 'path';    // Node.js module for working with file and directory paths
import { fileURLToPath } from 'url'; // The fileURLToPath() method of the URL module converts a file URL to a file path
import giftData from '../data/gifts.js';

// The __dirname and __filename variables are not available in ES6 modules.  They are only available in CommonJS modules. 
// We need to use the __dirname and __filename variables to get the absolute path of the current directory and filename.
// We need the absolute path to the current directory and filename to use the path.join() method to join the absolute path to the current directory with the relative path to the public directory.
// The path.join() method returns the absolute path to the public directory. We need the absolute path to the public directory to use the express.static() method to serve static files such as images, HTML pages, and JavaScript files from the public directory.
// We need to use the express.static() method to serve static files from the public directory to the client.The client will use the static files to render the HTML pages and JavaScript files in the browser.
const __filename = fileURLToPath(import.meta.url); // The __filename represents the filename of the code being executed. It is the resolved absolute path of this code file.
const __dirname = path.dirname(__filename); // The __dirname represents the name of the directory that the currently executing script resides in.

// express router is a class which helps us to create router handlers - that is handles the request that we get from the client at a specific path and a specific method.
const router = express.Router();

// endpoint: /gifts
router.get('/', (req, res) => {
    res.status(200).json(giftData);
}
);

// endpoint: /api/gifts/:id
router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/gift.html'));
}
);

export default router;
