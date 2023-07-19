const Article = require('../models/article');
const Reporter = require('../models/reporter');

// Display list of articles
exports.articleList = async (req, res, next) => {
  try {
    const articles = await Article.find().sort('-date').populate('reporter').exec();
    res.render('index', { title: 'Home', articles });
  } catch (err) {
    console.error('Error fetching articles:', err);
    res.sendStatus(500);
  }
};

// Display create article form
exports.articleCreateGet = async (req, res, next) => {
  try {
    const reporters = await Reporter.find().exec();
    res.render('create-article', { title: 'Create Article', reporters });
  } catch (err) {
    console.error('Error fetching reporters:', err);
    res.sendStatus(500);
  }
};

// Handle create article form submission
exports.articleCreatePost = async (req, res, next) => {
  try {
    const { title, content, reporter, topic } = req.body;
    const article = new Article({ title, content, reporter, topic });
    await article.save();
    res.redirect('/');
  } catch (err) {
    console.error('Error creating article:', err);
    res.sendStatus(500);
  }
};
