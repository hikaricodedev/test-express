const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');


// Inisialisasi Express
const app = express();
app.use(bodyParser.json());

// Rute
app.use('/api', routes);

// Sync Database dan Jalankan Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
