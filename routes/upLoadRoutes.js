import express from 'express';
import fs from 'fs';
import fileUpload from 'express-fileupload';
import { getRandomHexValues } from '../utils/utils.js';
import path from 'path';
// import paginate from 'express-paginate';
import { addWomenItem, addMenItem, addChildrenItem } from '../data/database.js';

 

export const uploadRoutes = express.Router();


uploadRoutes.use(
    fileUpload({
        limits: {
            fileSize: 2 * 1024 * 1024, 
        },
        abortOnLimit: true,
    })
);



uploadRoutes.post('/newWomenItem', async (req, res) => {
    try {
        const newEntry = {};
        const id = req.body.id;
        let vFile = '';

        if (req.files && req.files.image) {
            const uploadedFile = req.files.image;
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            const fileExtension = path.extname(uploadedFile.name).toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                throw new Error('Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.');
            }

            const fileName = `${getRandomHexValues(8)}_${uploadedFile.name}`;
            const uploadPath = './uploads/' + fileName;

            if (!fs.existsSync('./uploads')) {
                fs.mkdirSync('./uploads');
            }

            uploadedFile.mv(uploadPath, (err) => {
                if (err) {
                    throw err; 
                }
            });

            vFile = fileName;
        } else {
            vFile = 'default-avatar.png';
        }

        newEntry.item_name = req.body.item_name;
        newEntry.brand = req.body.brand;
        newEntry.size = req.body.size;
        newEntry.image = vFile;
        newEntry.discount = req.body.discount;
        newEntry.price = req.body.price;
        newEntry.arrival_status = req.body.arrival_status;

        const result = await addWomenItem(newEntry);

        res.redirect('/allWomenItems');
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
});


uploadRoutes.post('/newMenItem', async (req, res) => {
    try {
        const newEntry = {};
        const id = req.body.id;
        let vFile = '';

        if (req.files && req.files.image) {
            const uploadedFile = req.files.image;
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            const fileExtension = path.extname(uploadedFile.name).toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                throw new Error('Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.');
            }

            const fileName = `${getRandomHexValues(8)}_${uploadedFile.name}`;
            const uploadPath = './uploads/' + fileName;

            if (!fs.existsSync('./uploads')) {
                fs.mkdirSync('./uploads');
            }

            uploadedFile.mv(uploadPath, (err) => {
                if (err) {
                    throw err; 
                }
            });

            vFile = fileName;
        } else {
            vFile = 'default-avatar.png';
        }

        newEntry.item_name = req.body.item_name;
        newEntry.brand = req.body.brand;
        newEntry.size = req.body.size;
        newEntry.image = vFile;
        newEntry.discount = req.body.discount;
        newEntry.price = req.body.price;
        newEntry.arrival_status = req.body.arrival_status;

        const result = await addMenItem(newEntry);

        res.redirect('/allMenItems');
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
});


uploadRoutes.post('/newChildrenItem', async (req, res) => {
    try {
        const newEntry = {};
        const id = req.body.id;
        let vFile = '';

        if (req.files && req.files.image) {
            const uploadedFile = req.files.image;
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            const fileExtension = path.extname(uploadedFile.name).toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                throw new Error('Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.');
            }

            const fileName = `${getRandomHexValues(8)}_${uploadedFile.name}`;
            const uploadPath = './uploads/' + fileName;

            if (!fs.existsSync('./uploads')) {
                fs.mkdirSync('./uploads');
            }

            uploadedFile.mv(uploadPath, (err) => {
                if (err) {
                    throw err; 
                }
            });

            vFile = fileName;
        } else {
            vFile = 'default-avatar.png';
        }

        newEntry.item_name = req.body.item_name;
        newEntry.brand = req.body.brand;
        newEntry.size = req.body.size;
        newEntry.image = vFile;
        newEntry.discount = req.body.discount;
        newEntry.price = req.body.price;
        newEntry.arrival_status = req.body.arrival_status;

        const result = await addChildrenItem(newEntry);

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
});


export default uploadRoutes;