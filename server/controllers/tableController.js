// server/controllers/tableController.js
const { validationResult } = require('express-validator');
const db = require('../config/database');

// Helper function to check if the user owns the restaurant associated with the table
const checkTableOwnership = async (tableId, userId) => {
  const [tables] = await db.query(
    `SELECT t.id, r.manager_id 
     FROM tables t 
     JOIN restaurants r ON t.restaurant_id = r.id 
     WHERE t.id = ?`,
    [tableId]
  );
  if (tables.length === 0) {
    return { owned: false, exists: false, message: 'Table not found' };
  }
  if (tables[0].manager_id !== userId) {
    return { owned: false, exists: true, message: 'User does not own the restaurant associated with this table' };
  }
  return { owned: true, exists: true };
};
// Helper function to check if the user owns the restaurant before adding a table
const checkRestaurantOwnership = async (restaurantId, userId) => {
    const [restaurants] = await db.query(
      'SELECT manager_id FROM restaurants WHERE id = ?',
      [restaurantId]
    );
    if (restaurants.length === 0) {
        return { owned: false, exists: false, message: 'Restaurant not found' };
    }
    if (restaurants[0].manager_id !== userId) {
        return { owned: false, exists: true, message: 'User does not own this restaurant' };
    }
    return { owned: true, exists: true };
};
