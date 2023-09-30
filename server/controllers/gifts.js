import { pool } from '../config/database.js'

// Get all gifts
const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get gift by id
const getGiftById = async (req, res) => {
    try {
        const giftId = req.params.giftId
        const selectQuery = `SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn FROM gifts WHERE id = ${giftId}`
        const results = await pool.query(selectQuery)

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getGifts,
    getGiftById
}