import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.render('shop', { products: ['Arduino'] });
});

export default router;
