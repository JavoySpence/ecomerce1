import express from'express';
import paginate  from 'express-paginate';
import {getAllMenItems, getAllMenCount} from '../data/database.js';


const menRoutes = express.Router();



menRoutes.get('/allMenItems', paginate.middleware(6, 50), async (req, res) => {
    const limit = req.query.limit;
    const offset = req.skip;

    const menItemList = await getAllMenItems(limit, offset);
    const itemCount = await getAllMenCount();
    
    const pageCount = Math.ceil(itemCount / limit)

    res.render('men/men', {
        data: menItemList,
        pageCount: pageCount, 
        itemCount: itemCount, 
        pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)});
});


menRoutes.get('/menInputs', async (req, res) => {
    res.render('men/menItemsInputs');
});



menRoutes.get('/menPage', async (req, res) => {
    const menItemList = await getAllMenItems()
    console.log(menItemList)
    res.render('men/menPage', {data: menItemList});
})


export default menRoutes;