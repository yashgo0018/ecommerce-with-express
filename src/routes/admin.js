import express from 'express';

const router = express.Router();

router.get('/add-product', (req, res) => {
	res.render('add-product');
});

router.post('/add-product', (req, res) => {
	console.log(req.body);
	res.redirect('/');
});

export default router;
