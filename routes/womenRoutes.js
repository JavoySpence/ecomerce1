import express from'express';
import paginate  from 'express-paginate';
import {getAllWomenItems, getAllWomenCount } from '../data/database.js'


const womenRoutes = express.Router();


womenRoutes.get('/allWomenItems', paginate.middleware(6, 50), async (req, res) => {
    const limit = req.query.limit;
    const offset = req.skip;

    const womenItemList = await getAllWomenItems(limit, offset);
    const itemCount = await getAllWomenCount();
    
    const pageCount = Math.ceil(itemCount / limit)

    res.render('women/women', {
        data: womenItemList,
        pageCount: pageCount, 
        itemCount: itemCount, 
        pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)});
});


// mealRoutes.get('/mealPage', paginate.middleware(6, 50), isAuthenticated, async (req, res) => {
//     const limit = req.query.limit;
//     const offset = req.skip; 
    
//       const itemList = await getAllMeals(limit, offset);
//       const itemCount = await getTotalMealsCount();
  
//       const pageCount = Math.ceil(itemCount / limit)
    
//       res.render('meals/meals_page', {
//         data: itemList,
//         pageCount: pageCount,
//         itemCount: itemCount,
//         pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
//       });
//   })
  




womenRoutes.get('/womenInputs', async (req, res) => {
    res.render('women/womenItemsInputs');
});


womenRoutes.get('/womenPage', async (req, res) => {
    const data = await getAllWomenItems()
    console.log(data)
    res.render('women/womenPage', {data});
})




export default womenRoutes;