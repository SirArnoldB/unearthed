import { pool } from './database.js'
import './dotenv.js'
import giftData from '../data/gifts.js'

const createGiftsTable = async () => {

    // Create gifts table if it does not exist and drop it if it does exist
    const createTableQuery = `
    DROP TABLE IF EXISTS gifts;

    CREATE TABLE IF NOT EXISTS gifts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePoint VARCHAR(10) NOT NULL,
        audience VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )`

    // Create the gifts table
    try {
        const res = await pool.query(createTableQuery);
        console.log('🚀 Gifts table created successfully!')
    } catch (err) {
        console.error('🚨 Error creating gifts table: ', err.message)
    }
}

// Seed the gifts table with data
const seedGiftsTable = async () => {
    await createGiftsTable();

    giftData.forEach((gift) => {
        const insertQuery = {
            text: 'INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            gift.name,
            gift.pricePoint,
            gift.audience,
            gift.image,
            gift.description,
            gift.submittedBy,
            gift.submittedOn
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('🚨 Error inserting gift', err)
                return
            }

            console.log(`✅ ${gift.name} added successfully`)
        })
    })
}

seedGiftsTable();