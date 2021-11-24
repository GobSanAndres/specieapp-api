const { Schema, model } = require('mongoose');

const ItemBannerSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        banner_id: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "Banner"
        },
        data_provider: {
            type: Object,
            required: false
        },
        is_active: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('ItemBanner', ItemBannerSchema);