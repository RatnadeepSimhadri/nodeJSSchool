import { Router } from 'express';
import { body , check, oneOf, validationResult} from 'express-validator';
import { handleInputErrors } from './modules/middleware'
const router = Router();

/**
 * Routes for Product 
 */
router.get('/product',(req,res) => {
    res.json({
        message: req['secret']
    })
})
router.get('/product/:id',() => {})
router.put('/product/:id', body('name').isString(), handleInputErrors , (req, res) => {
    
})
router.post('/product', body('name').isString(), handleInputErrors, (req,res) => {
    res.status(200)
    res.json({
        message: `Thanks for sharing your updates will create the product ${req.body.name} for you in the database`
    })
})
router.delete('/product/:id',() => {})

/**
 * update Routes
 */
router.get('/update',() => {})
router.get('/update/:id',() => {})
router.put('/update/:id',() => {})
router.post('/update',() => {})
router.delete('/update/:id',() => {})

/**
 * updatepoint Routes
 */
 router.get('/updatepoint',() => {})
 router.get('/updatepoint/:id',() => {})
 router.put('/updatepoint/:id',() => {})
 router.post('/updatepoint',() => {})
 router.delete('/updatepoint/:id',() => {})

export default router;