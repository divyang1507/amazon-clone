const Category = require('../models/category.model');


const addCategory = async (req, res) => {
    try {
      const category = new Category(req.body);
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

    const getCategories = async (req, res) => {
        try {
        const categories = await Category.find({});
        res.status(200).json(categories);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }


    module.exports = { getCategories, addCategory };

    