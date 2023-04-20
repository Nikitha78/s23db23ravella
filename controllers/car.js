var car = require('../models/car');
// List of all cars

 //res.send('NOT IMPLEMENTED: car list');
 // List of all cars
exports.car_list = async function(req, res) {
    try{
    thecars = await car.find();
    res.send(thecars);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   




// Handle car create on POST.
//res.send('NOT IMPLEMENTED: car create POST');
 // Handle car create on POST.
exports.car_create_post = async function(req, res) {
 console.log(req.body)
 let document = new car();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"car_name":"goat", "car_model":"x24", "car_price":12}
 document.car_name = req.body.car_name;
 document.car_model = req.body.car_model;
 document.car_price = req.body.car_price;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};

// Handle car delete form on DELETE.
exports.car_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function(req, res) {
 try{
 thecars = await car.find();
 res.render('car', { title: 'car Search Results', results: thecars });
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};
// for a specific car.
exports.car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await car.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // Handle car update form on PUT.
   exports.car_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await car.findById( req.params.id)
    // Do updates of properties
    if(req.body.car_name)
    toUpdate.car_name = req.body.car_name;
    if(req.body.cost) toUpdate.car_model = req.body.car_model;
    if(req.body.size) toUpdate.car_price = req.body.car_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };
// Handle car delete on DELETE.
exports.car_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await car.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.car_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await car.findById( req.query.id)
    res.render('cardetail',
    { title: 'car Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    exports.car_create_Page = function(req, res) {
        console.log("create view")
        try{
        res.render('carcreate', { title: 'car Create'});
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
       };
    
       // Handle building the view for updating a car.
    // query provides the id
    exports.car_update_Page = async function(req, res) {
        console.log("update view for item "+req.query.id)
        try{
        let result = await car.findById(req.query.id)
        res.render('carupdate', { title: 'car Update', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
       };
    
       exports.car_delete_Page = async function(req, res) {
        console.log("Delete view for id " + req.query.id)
        try{
        result = await car.findById(req.query.id)
        res.render('cardelete', { title: 'car Delete', toShow:
       result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
       };
        