const PageView = require('../models/PageView'); // Import the PageView model

// Log a page view
exports.logPageView = async (req, res) => {
  const { page } = req.body;

  if (!page) {
    return res.status(400).json({ error: 'Page is required' });
  }

  try {
    const newView = new PageView({ page });
    await newView.save();
    res.status(201).json({ message: 'Page view logged successfully', data: newView });
  } catch (err) {
    console.error('Error logging page view:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all page views
exports.getPageViews = async (req, res) => {
  try {
    const views = await PageView.find();
    res.status(200).json({ message: 'Page views fetched successfully', data: views });
  } catch (err) {
    console.error('Error fetching page views:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get page views by page name
exports.getPageViewsByPage = async (req, res) => {
  const { page } = req.query;

  if (!page) {
    return res.status(400).json({ error: 'Page is required' });
  }

  try {
    const views = await PageView.find({ page });
    res.status(200).json({ message: 'Page views fetched successfully', data: views });
  } catch (err) {
    console.error('Error fetching page views by page:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get page views count by page name
exports.getPageViewsCountByPage = async (req, res) => {
  const { page } = req.query;

  if (!page) {
    return res.status(400).json({ error: 'Page is required' });
  }

  try {
    const count = await PageView.countDocuments({ page });
    res.status(200).json({ message: 'Page view count fetched successfully', data: { page, count } });
  } catch (err) {
    console.error('Error fetching page view count:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
