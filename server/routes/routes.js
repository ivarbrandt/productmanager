const productController = require("../controllers/controller.js");

module.exports = app => {
  app.get("/api/products", productController.index);
  app.post("/api/products", productController.add);
  app.get("/api/products/:id", productController.find);
  app.put("/api/products/:id", productController.update);
  app.delete("/api/products/:id", productController.delete);
};
