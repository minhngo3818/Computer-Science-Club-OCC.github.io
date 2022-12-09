const mongoose = require("mongoose")
const { Schema } = mongoose

const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        immutable: true,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
        default: Date.now(),
    },
    images: {
        type: [{ type: String }],
    },
})

module.export = {
    NewsModel: mongoose.model("news", newsSchema),
    newsSchema,
}
