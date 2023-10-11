import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

// All gifts endpoint
router.get('/', GiftsController.getGifts)

// Gift by id endpoint
router.get('/:giftId', GiftsController.getGiftById)

// Create gift endpoint
router.post('/', GiftsController.createGift)

// Update gift endpoint
router.put('/:giftId', GiftsController.updateGift)

// Delete gift endpoint
router.delete('/:giftId', GiftsController.deleteGift)


export default router