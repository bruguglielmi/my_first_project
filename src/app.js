const express = require('express');
const app = express()   
app.get('/', (req,res) => {
    res.send('bru ama manga')
})
app.listen(3000, () => console.log('my server is up'))