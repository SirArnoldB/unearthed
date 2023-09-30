import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

// All gifts endpoint
router.get('/', GiftsController.getGifts)

// Gift by id endpoint
router.get('/:giftId', GiftsController.getGiftById)

export default router