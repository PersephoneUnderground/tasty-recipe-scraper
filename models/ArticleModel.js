var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// this is the schema for the object containing the info for each event scraped
// will need to adjust to info available but setting up with basic data wanted for now
var articleSchema = new Schema({
    articleTitle: {
        type: String,
        required: true,
        unique: true
        // unique here is to prevent repeated scraping of the same posting
    },
    articleUrl: {
        // double-check that String is correct for url
        type: String,
        required: true,
        unique: true
    },
    articleSummary: {
        type: String,
        required: false
    },
    // content: {
    //     type: String,
    //     required: false
    // },
    // location: {
    //     type: String,
    //     required: true
    // },
    // eventDate: String,
    // eventTime: String,
    scrapedDate: String,
    saved: {
        type: Boolean,
        default: false
    } //"saved" variable tracks whether the user has chosen to save the listing
});

var eventArticle = mongoose.model("eventArticle", articleSchema);

module.exports = eventArticle;