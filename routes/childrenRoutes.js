import express from'express';
import paginate  from 'express-paginate';
import {getAllChildren, getAllChildrenCount} from '../data/database.js';


const childrenRoutes = express.Router();



childrenRoutes.get('/allChildrenItems', paginate.middleware(6, 50), async (req, res) => {
    const limit = req.query.limit;
    const offset = req.skip;

    const childrenItemList = await getAllChildren(limit, offset);
    const itemCount = await getAllChildrenCount();
    
    const pageCount = Math.ceil(itemCount / limit)

    res.render('children/children', {
        data: childrenItemList,
        pageCount: pageCount, 
        itemCount: itemCount, 
        pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)});
});


childrenRoutes.get('/childrenInputs', async (req, res) => {
    res.render('children/childrenItemInputs');
});



childrenRoutes.get('/childrenPage', async (req, res) => {
    const menItemList = await getAllMenItems()
    console.log(menItemList)
    res.render('children/childrenPage', {data: menItemList});
})


export default childrenRoutes;