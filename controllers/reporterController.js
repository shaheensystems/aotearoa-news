const Reporter = require('../models/reporter');

// Display create reporter form
exports.reporterCreateGet = (req, res) => {
  res.render('create-reporter', { title: 'Create Reporter' });
};

// Handle create reporter form submission
exports.reporterCreatePost = async (req, res) => {
  try {
    const { name, email } = req.body;
    const reporter = new Reporter({ name, email });
    await reporter.save();
    res.redirect('/');
  } catch (err) {
    console.error('Error creating reporter:', err);
    res.sendStatus(500);
  }
};
