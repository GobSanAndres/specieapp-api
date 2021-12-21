const { Schema, model } = require('mongoose');

const ProductionExpensesSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    totalCycle: {
        type: String,
        required: true
    },
    lastSixMonth: {
        type: String,
        required: true
    },
});

const CultivationSalesSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    sale_quantity: {
        type: String,
        required: true
    },
    sales_revenue: {
        type: String,
        required: true
    },
});

const TotalProductSalesSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    unit:{
        type: String,
        required: true
    },
    quantity_sold: {
        type: String,
        required: true
    },
    total_sales_income: {
        type: String,
        required: true
    },
});

const IncomeDifferentProductsSchema  = Schema({
    description: {
        type: String,
        required: true
    },
    different_income:{
        type: String,
        required: true
    },
});

const CostsAndIncomeSchema = Schema(
    {
        propertyName: {
            type: String,
            required: true
        },
        registryNumber: {
            type: String,
            required: true
        },
        personType: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        nit: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        identification_type: {
            type: String,
            required: true
        },
        production_expenses: [{ type: ProductionExpensesSchema, require: true }],
        cultivation_sales: [{ type: CultivationSalesSchema, require: true }],
        total_product_sales: [{ type: TotalProductSalesSchema, require: true }],
        income_different_products: [{ type: IncomeDifferentProductsSchema, require: true }],
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

module.exports = model('CostsAndIncome', CostsAndIncomeSchema);