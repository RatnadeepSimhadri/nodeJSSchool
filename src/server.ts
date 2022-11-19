import express from 'express'

const app = express();

app.get('/',(req, res) => {
    console.log("Hello from Express");
    res.statusCode = 200;
    res.json({
        message: 'hello'
    })
})

export default app;