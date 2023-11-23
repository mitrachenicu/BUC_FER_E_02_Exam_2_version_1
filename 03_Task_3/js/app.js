/**
 * Write your code below!
 */

class Product {
    constructor(name, price, inStock, quantity) {
      this.name = name;
      this.price = price;
      this.inStock = inStock;
      this.quantity = quantity;
    }
  
    isInStock() {
      return this.inStock ? "Product available" : "Out of stock";
    }
  
    order(quantity) {
      if (this.quantity < quantity) return false;
  
      this.quantity -= quantity;
      if (this.quantity === 0) this.inStock = false;
  
      return this.price * quantity;
    }
  }
  
  const initialSizes = [35, 36, 37, 39, 41, 42, 44];
  
  class Shoes extends Product {
    constructor(name, price, inStock, quantity, colors = [], sizes = initialSizes) {
      super(name, price, inStock, quantity);
      this.colors = colors;
      this.sizes = sizes;
    }
  
    addColor(color) {
      this.colors = [...this.colors, color];
    }
  
    removeSize(size) {
      this.sizes = this.sizes.filter((item) => item !== size);
    }
  }
  
  const adidas = new Shoes("Adidas", 299.99, true, 40);
  
  console.log(adidas.isInStock()); // Product available
  console.log(adidas.order(30)); // 8999.7
  console.log(adidas.order(30)); // false
  console.log(adidas.order(10)); // 2999.9
  console.log(adidas.isInStock()); // Out of stock
  
  adidas.addColor("red");
  adidas.addColor("blue");
  adidas.addColor("green");
  console.log(adidas.colors); // ["red", "blue", "green"]
  
  adidas.removeSize(38);
  adidas.removeSize(40);
  adidas.removeSize(43);
  console.log(adidas.sizes); // [35, 36, 37, 39, 41, 42, 44]