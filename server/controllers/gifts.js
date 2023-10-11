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

// create a gift
const createGift = async (req, res) => {
    const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body
    const insertQuery = `INSERT INTO gifts (name, pricepoint, audience, image, description, submittedby, submittedon) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`
    const values = [name, pricepoint, audience, image, description, submittedby, submittedon]

    try {
        const result = await pool.query(insertQuery, values)
        res.status(201).json(result.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// update a gift
const updateGift = async (req, res) => {
    const giftId = parseInt(req.params.giftId)
    const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body
    const updateQuery = `UPDATE gifts SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedby = $6, submittedon = $7 WHERE id = ${giftId} RETURNING *`
    const values = [name, pricepoint, audience, image, description, submittedby, submittedon]

    try {
        const result = await pool.query(updateQuery, values)
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// delete a gift
const deleteGift = async (req, res) => {
    const giftId = parseInt(req.params.giftId)
    const deleteQuery = `DELETE FROM gifts WHERE id = ${giftId} RETURNING *`

    try {
        const result = await pool.query(deleteQuery)
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getGifts,
    getGiftById,
    createGift,
    updateGift,
    deleteGift
}