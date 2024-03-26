import express from 'express';
import morgan from 'morgan';
import ejs from 'ejs';


const app = express();
const PORT = 3015;

app.set('view engine', 'ejs');

import pagesRoutes from './routes/pagesRoutes.js'; 
import womenRoutes from './routes/womenRoutes.js';
import menRoutes from './routes/menRoutes.js';
import uploadRoutes from './routes/upLoadRoutes.js'
import childrenRoutes from './routes/childrenRoutes.js'

 
app.use(express.json({limit: '1kb'}))
app.use(express.urlencoded({extended: true, limit: '1kb'}));
app.use('/public', express.static('public'));

app.use(morgan('dev'));

app.use('/', pagesRoutes);
app.use('/', womenRoutes);
app.use('/', uploadRoutes);
app.use('/', menRoutes);
app.use('/', childrenRoutes);

app.use('/', express.static('public'));
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
