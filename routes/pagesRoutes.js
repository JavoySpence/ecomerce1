import express from'express'
import ejs from 'ejs'
import { getAllWomenItems} from '../data/database.js';


const pagesRoutes = express.Router();


pagesRoutes.get('/homePage', async (req, res) => {
    const data = await getAllWomenItems()
    console.log(data)
    res.render('pages/home', {data});
});


export default pagesRoutes;


