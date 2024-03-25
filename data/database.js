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

export const getAllWomenItems = async () => {
   
        const result = await pool.query('SELECT * FROM women');
        console.log(result)
        return result[0];
  
};

export const addWomenItem = async (oWomen) => {
    const result = await pool.query ('INSERT INTO women (item_name, brand, size, image, discount, price, arrival_status) VALUES(?, ?, ?, ?, ?, ?, ?)',
    [oWomen.item_name, oWomen.brand, oWomen.size, oWomen.image, oWomen.discount, oWomen.price, oWomen.arrival_status]
    );
    return result[0];
}


export const getAllMenItems = async () => {
    const result = await pool.query('SELECT * FROM men')
    console.log(result)
    return result[0];
}