import { Router } from 'express';

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
router.put('/product/:id',() => {})
router.post('/product',() => {})
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