const express = require("express");

const Author = require("../models/author");

const router = express.Router();

const ROOT = "authors";
const VIEW_INDEX = `${ROOT}/index`;
const VIEW_NEW_FORM = `${ROOT}/new`;

// GET all records
router.get("/", async (req, res) => {
    try {
        let searchOptions = {};

        const searchValue = req.query.name;

        if (searchValue != null && searchValue !== "") {
            // search for a partial match. Ignore the casing.
            searchOptions.name = new RegExp(searchValue, "i");
        }

        const authors = await Author.find(searchOptions);

        res.render(VIEW_INDEX, {
            authors: authors,
            searchOptions: searchValue,
        });
    } catch (err) {
        res.redirect(ROOT, {
            errorMessage: err,
        });
    }
});

// GET new record form
router.get("/new", (req, res) => {
    res.render(VIEW_NEW_FORM, { author: new Author() });
});

// POST insert new record
router.post("/", async (req, res) => {
    const author = new Author({
        name: req.body.name,
    });

    try {
        const result = await author.save();

        // res.redirect(`${ROOT}/${result.id}`);

        res.redirect(ROOT);
    } catch (err) {
        res.render(VIEW_NEW_FORM, {
            record: author,
            errorMessage: "Error saving a NEW record. " + err,
        });
    }
});

module.exports = { authorRouter: router, authorRoute: "/authors" };
