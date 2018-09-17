// get all restaurants
// db.restaurants.find();

//limit and sort
//display the first 10 results when restaurants is sorted by name
//db.restaurants.find().sort({name: 1}).limit(10).pretty(); 

//get by _id
// const id = db.restaurants.findOne({})._id;
// db.restaurants.find({_id: id}).pretty();

//get by value
// db.restaurants.find({borough: 'Queens'}).pretty();

//count 
// db.restaurants.find().count();

//count by nested value
// db.restaurants.find({'address.zipcode': '11206'}).pretty();

//delete by id
// const id = db.restaurants.findOne()._id;
// db.restaurants.deleteOne({_id: id});

//update a single document
// const id = db.restaurants.findOne()._id;
// db.restaurants.updateOne({_id: id}, {$set: {name: 'Bizz Bar Bang'}});
// db.restaurants.findOne({_id: id});

//update many documents
db.restaurants.updateMany(
    {'address.zipcode': '10035'},
    {$set: {'address.zipcode':'10036'}}
);
db.restaurants.find({'address.zipcode': '10035'}).count();
db.restaurants.find({'address.zipcode': '10036'}).count();