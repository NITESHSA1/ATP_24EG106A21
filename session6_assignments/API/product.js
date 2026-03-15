import express from 'express';
// Export the router to be used by server.js
export const productapp = express.Router();

const test = []; // Your in-memory data


//CREATE CUSTOM MIDDLEWARE
   /* res.json({message:"this res from middleware"})
    //send res from middleware
    console.log("middled ware is there")
    next();*/
    const myMiddleware = (req, res, next) => {
    console.log("Middleware running - Proceeding to route");
    // Do NOT use res.send() or res.json() here if you want the route to run
    next(); 
};




productapp.use(myMiddleware)

// GET: All products
productapp.get('/test', (req, res) => {
    res.json({ message: "all products", products: test });
});

// GET: Specific brand
productapp.get('/test/:brand', (req, res) => {
    let reqbrand = req.params.brand;
    let brands = test.find((f) => f.brand == reqbrand);
    if (!brands) return res.status(404).json({ message: "Brand not found" });
    res.json({ message: `Brand ${reqbrand} found`, data: brands });
});

// POST: Add product
productapp.post('/test', (req, res) => {
    test.push(req.body);
    res.json({ message: "product is added" });
});

// PUT: Update product
productapp.put('/test', (req, res) => {
    let proindex = test.findIndex((t) => t.id == req.body.id);
    if (proindex == -1) return res.status(404).json({ message: "No product to update" });
    test.splice(proindex, 1, req.body);
    res.json({ message: "updated successfully" });
});

// DELETE: Remove product
productapp.delete('/test/:productid', (req, res) => {
    let proindex = test.findIndex((t) => t.productid == Number(req.params.productid));
    if (proindex == -1) return res.status(404).json({ message: "NO PRODUCT TO DELETE" });
    test.splice(proindex, 1);
    res.json({ message: "product deleted successfully" });
});
