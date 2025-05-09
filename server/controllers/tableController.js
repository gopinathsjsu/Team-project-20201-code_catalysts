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

// @desc    Get tables for a specific restaurant
// @route   GET /api/restaurants/:restaurantId/tables
// @access  Private (Restaurant Manager)
exports.getRestaurantTables = async (req, res) => {
  const { restaurantId } = req.params;
  const managerId = req.user.id;

  try {
    // Verify ownership of the restaurant first
    const ownershipCheck = await checkRestaurantOwnership(restaurantId, managerId);
    if (!ownershipCheck.exists) {
        return res.status(404).json({ success: false, message: ownershipCheck.message });
    }
    if (!ownershipCheck.owned) {
        return res.status(403).json({ success: false, message: ownershipCheck.message });
    }

    const [tables] = await db.query(
      'SELECT * FROM tables WHERE restaurant_id = ? ORDER BY table_number',
      [restaurantId]
    );
    res.json({ success: true, tables });
  } catch (err) {
    console.error('Error fetching tables:', err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
