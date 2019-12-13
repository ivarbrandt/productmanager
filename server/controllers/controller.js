const Product = require("../models/product.js");

module.exports.index = function(req, res) {
  Product.find()
    .then(products => {
      console.log(products);
      return res.json(products);
    })
    .catch(err => res.json(err));
};

module.exports.find = function(req, res) {
  Product.findOne({ _id: req.params.id })
    .then(oneproduct => res.json(oneproduct))
    .catch(err => res.json(err));
};

module.exports.add = function(req, res) {
  console.log(req.body);
  // console.log(req);
  // task.title = req.body.title;
  // task.description = req.body.description;
  // task.completed = req.body.completed;
  Product.create(req.body)
    .then(newproduct => res.json(newproduct))
    .catch(err => console.log(err));
};

module.exports.update = function(req, res) {
  Product.updateOne({ _id: req.params.id }, req.body)
    .then(updatedproduct => res.json(updatedproduct))
    .catch(err => res.json(err));
};

module.exports.delete = function(req, res) {
  Product.deleteOne({ _id: req.params.id }).then(deletedproduct =>
    res.json(deletedproduct)
  );
};
