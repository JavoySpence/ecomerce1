import express from'express'
import ejs from 'ejs'
import { getAllWomenItems, getAllMenItems, getAllChildren} from '../data/database.js';


const pagesRoutes = express.Router();


pagesRoutes.get('/homePage', async (req, res) => {
    const data = await getAllWomenItems()
    const menData = await getAllMenItems()
    const childrenData = await getAllChildren()
    console.log(data)
    res.render('pages/home', {data, menData, childrenData});
});


export default pagesRoutes;


