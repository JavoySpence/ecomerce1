import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({path: './config.env'});

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();



// =========================================================================================================================
// Women 
// =========================================================================================================================

export const getAllWomenItems = async (limit = 1, offset = 0) => {

    limit = Number.isInteger(limit) && limit > 0 ? limit : 10;
    offset = Number.isInteger(offset) && offset >= 0 ? offset : 0;
    
    const result = await pool.query('SELECT * FROM women LIMIT ? OFFSET ?', [limit, offset]);
    console.log(result);
    return result[0];
};


export const addWomenItem = async (oWomen) => {
    const result = await pool.query ('INSERT INTO women (item_name, brand, size, image, discount, price, arrival_status) VALUES(?, ?, ?, ?, ?, ?, ?)',
    [oWomen.item_name, oWomen.brand, oWomen.size, oWomen.image, oWomen.discount, oWomen.price, oWomen.arrival_status]
    );
    return result[0];
}



export  const getAllWomenCount = async () => {
    const result =  await pool.query('SELECT COUNT(*) AS itemCount FROM women');
    return result[0].itemCount;
 };




//  ====================================================================================================================
//  menu
//  =====================================================================================================================

export  const getAllMenCount = async () => {
    const result =  await pool.query('SELECT COUNT(*) AS itemCount FROM men');
    return result[0].itemCount;
 };


 export const addMenItem = async (oMen) => {
    const result = await pool.query ('INSERT INTO men (item_name, brand, size, image, discount, price, arrival_status) VALUES(?, ?, ?, ?, ?, ?, ?)',
    [oMen.item_name, oMen.brand, oMen.size, oMen.image, oMen.discount, oMen.price, oMen.arrival_status]
    );
    return result[0];
};


export const getAllMenItems = async () => {
    const result = await pool.query('SELECT * FROM men')
    console.log(result)
    return result[0];
};


export const singleMenItem = async (id) => {
    const result = await pool.query('SELECT * FROM men where id = ?', [id])
    console.log(result)
    return result[0];
}


// ===================================================================================================================
// CHILDREN
// ===================================================================================================================

export const getAllChildren = async (limit = 1, offset = 0) => {
    limit = Number.isInteger(limit) && limit > 0 ? limit : 10;
    offset = Number.isInteger(offset) && offset >= 0 ? offset : 0;
    
    const result = await pool.query('SELECT * FROM children LIMIT ? OFFSET ?', [limit, offset]);
    console.log(result);
    return result[0];
};


export  const getAllChildrenCount = async () => {
    const result =  await pool.query('SELECT COUNT(*) AS itemCount FROM children');
    return result[0].itemCount;
};

export const addChildrenItem = async (oChildren) => {
    const result = await pool.query ('INSERT INTO children (item_name, brand, size, image, discount, price, arrival_status) VALUES(?, ?, ?, ?, ?, ?, ?)',
    [oChildren.item_name, oChildren.brand, oChildren.size, oChildren.image, oChildren.discount, oChildren.price, oChildren.arrival_status]
    );
    return result[0];
};