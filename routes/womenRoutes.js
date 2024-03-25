import express from'express'
import {getAllWomenItems} from '../data/database.js'


const womenRoutes = express.Router();


womenRoutes.get('/allWomenItems', async (req, res) => {
    const womenItemList = await getAllWomenItems()
    console.log(womenItemList)
    res.render('women/women', {data: womenItemList})
});

womenRoutes.get('/womenInputs', async (req, res) => {
    res.render('women/womenItemsInputs');
});







export default womenRoutes;