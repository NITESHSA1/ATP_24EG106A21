import express from 'express';
// Step out of backend1 (..) and into API folder
import { productapp } from './API/product.js'; 

const app = express();
const port = 3200;

app.use(express.json()); // Required to read req.body

// Mount the router under the '/api' prefix
app.use('/api', productapp);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
