var express = require('express');


const app = express();

app.get('/', (req, res) => res.send('Hello backend'));
app.listen(4000, () => console.log('Express server running'));