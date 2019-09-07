const express = require('express');
require('./Services/passport');
const app = express();

require('./Routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);