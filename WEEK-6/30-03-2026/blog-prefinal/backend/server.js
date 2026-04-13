import exp from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import { empAPP } from './emp-api/api.js'

const app = exp();
app.use(exp.json()); 
app.use(cors({origin: 'http://localhost:5176'}));

app.use("/emp", empAPP);

let db_address = 'mongodb://localhost:27017/mern_test';
let port = 6767;

try {
    await connect(db_address);
    console.log(`The DataBase is connected!`);
    app.listen(port, () => console.log(`Server listening at port : ${port} ...`));
} catch (err) {
    console.log("Connection refused :", err);
}

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: "An error Occurred :<", error: err.message });
});