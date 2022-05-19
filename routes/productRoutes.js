import express from 'express'
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productController.js'

import { admin, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export const productRoutes = router