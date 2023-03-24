"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = {
    getAllProduct: 'SELECT * FROM products',
    addNewProduct: 'INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: 'SELECT * FROM products WHERE Id = @Id',
    deleteProduct: 'DELETE FROM [webstore].[dbo].[products] WHERE Id = @Id',
    getTotalProducts: 'SELECT COUNT(*) FROM [webstore].[dbo].[products]',
    updateProductById: 'UPDATE products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id',
};
