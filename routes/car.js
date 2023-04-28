var express = require('express');
const car_controlers= require('../controllers/car');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET cars */
router.get('/', car_controlers.car_view_all_Page );
router.get('/detail', secured,car_controlers.car_view_one_Page);
router.get('/create',secured, car_controlers.car_create_Page);
/* GET create update page */
router.get('/update', secured,car_controlers.car_update_Page);
/* GET delete costume page */
router.get('/delete',secured, car_controlers.car_delete_Page);
module.exports = router;