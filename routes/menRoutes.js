import express from'express';
import paginate  from 'express-paginate';
import {getAllMenItems, getAllMenCount, singleMenItem} from '../data/database.js';


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
});


menRoutes.get('/singleMenItem/:id', async (req, res) => {
    const id = req.params.id;
    const singleItem = await singleMenItem(id);
    res.render('men/viewMenItem', {item: singleItem});
})


export default menRoutes;