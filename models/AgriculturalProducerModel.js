const { Schema, model } = require('mongoose');

const LivestockInventorySchema  = Schema({
    total_bovine: {
        type: Number,
        required: true
    },
    bovine_1: {
        type: Number,
        required: true
    },
    bovine_2: {
        type: Number,
        required: true
    },
    bovine_3: {
        type: Number,
        required: true
    },
    bovine_4: {
        type: Number,
        required: true
    },
    total_pigs: {
        type: Number,
        required: true
    },
    total_birds: {
        type: Number,
        required: true
    },
    total_chicken: {
        type: Number,
        required: true
    },
    total_hen: {
        type: Number,
        required: true
    },
    total_sheep: {
        type: Number,
        required: true
    },
    total_goats: {
        type: Number,
        required: true
    },
    total_equines: {
        type: Number,
        required: true
    },
    milk: {
        type: Number,
        required: true
    },
    average_day_milk: {
        type: Number,
        required: true
    },
    last_six_months_milk: {
        type: Number,
        required: true
    },
    pig_meat: {
        type: Number,
        required: true
    },
    average_cicle_pig: {
        type: Number,
        required: true
    },
    last_six_months_pig: {
        type: Number,
        required: true
    },
    chicken_eggs: {
        type: Number,
        required: true
    },
    average_day_chicken: {
        type: Number,
        required: true
    },
    last_six_months_chicken: {
        type: Number,
        required: true
    },
    broilers: {
        type: Number,
        required: true
    },
    average_cicle_chicken: {
        type: Number,
        required: true
    },
});

const CropsProducedSchema  = Schema({
    crop: {
        type: Schema.Types.ObjectId,
        ref: 'Cultivo',
        required: true
    },
    sown_area: {
        type: Number,
        required: true
    },
    harvest: {
        type: Number,
        required: true
    }
});

const AgriculturalProducerFormSchema = Schema(
    {
        register_number: {
            type: String,
            required: true
        },
        kind_person: {
            type: Number,
            required: true,
            enum: [0, 1]
        },
        gender: {
            type: String,
            required: true,
            enum: ['M','F']
        },
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        nit: {
            type: String,
            required: true
        },
        location: {
            type: Number,
            required: true,
            enum: [0, 1, 2]
        },
        identification_type: {
            type: String,
            required: true
        },
        property_name: {
            type: String,
            required: true
        },
        principal_activity: {
            type: Number,
            required: true,
            enum: [0, 1, 2, 3]
        },
        self_consumption: {
            type: Number,
            required: true,
            enum: [0, 1, 2, 3]
        },
        income_generation: {
            type: Number,
            required: true,
            enum: [0, 1, 2, 3]
        },
        form_ternure: {
            type: Number,
            required: true,
            enum: [0, 1, 2, 3]
        },
        surface: {
            type: Number,
            required: true,
            enum: [0, 1, 2, 3]
        },
        water_resource: {
            type: Number,
            required: true,
            enum: [0, 1, 2, 3]
        },
        cultivation_system: {
            type: Number,
            required: true,
            enum: [0, 1, 2, 3]
        },
        crops_produced: [
            { 
                type: CropsProducedSchema,
                required: true
            }
        ],
        livestock_inventory: {
            type: LivestockInventorySchema,
            require: true
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

module.exports = model('AgriculturalProducerForm', AgriculturalProducerFormSchema);