const { Schema, model } = require('mongoose');

const PriceRecordStructureSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

const AgriculturalProductSchema  = Schema({
    vegetables_and_fruit: [{ type: PriceRecordStructureSchema, require: true }],
    tubers_roots_and_bananas: [{ type: PriceRecordStructureSchema, require: true }],
    processed_products: [{ type: PriceRecordStructureSchema, require: true }],
    grains_and_cereals: [{ type: PriceRecordStructureSchema, require: true }],
    meats_eggs_and_dairy: [{ type: PriceRecordStructureSchema, require: true }]
});

const MonitoringAgriculturalPricesSchema = Schema(
    {
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        registry_number: {
            type: String,
            required: true
        },
        business_name_establishment: {
            type: String,
            required: true
        },
        person_type:{
            type: String,
            required: true,
            enum: ['Persona natural', 'Persona jurídica']
        },
        localization:{
            type: String,
            required: true,
            enum: ['San andrés', 'Providencia', 'Santa catalina']
        },
        nit: {
            type: String,
            required: true
        },
        identification_informant: {
            type: String,
            required: true
        },
        informant_name: {
            type: String,
            required: true
        },
        identification: {
            type: String,
            required: true
        },
        registration_of_price_of_agricultural_product: {
            type: AgriculturalProductSchema,
            required: true
        },
        issue_date: {
            type: Number,//epoch
            required: true
        },
        is_active: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('MonitoringAgriculturalPrices', MonitoringAgriculturalPricesSchema);