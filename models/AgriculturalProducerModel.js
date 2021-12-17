const { Schema, model } = require('mongoose');

const LivestockInventorySchema  = Schema({
    total_bovine: {
        type: String,
        required: true
    },
    bovine_1: {
        type: String,
        required: true
    },
    bovine_2: {
        type: String,
        required: true
    },
    bovine_3: {
        type: String,
        required: true
    },
    bovine_4: {
        type: String,
        required: true
    },
    total_pigs: {
        type: String,
        required: true
    },
    total_birds: {
        type: String,
        required: true
    },
    total_chicken: {
        type: String,
        required: true
    },
    total_hen: {
        type: String,
        required: true
    },
    total_sheep: {
        type: String,
        required: true
    },
    total_goats: {
        type: String,
        required: true
    },
    total_equines: {
        type: String,
        required: true
    },
    milk: {
        type: String,
        required: true
    },
    average_day_milk: {
        type: String,
        required: true
    },
    last_six_months_milk: {
        type: String,
        required: true
    },
    pig_meat: {
        type: String,
        required: true
    },
    average_cicle_pig: {
        type: String,
        required: true
    },
    last_six_months_pig: {
        type: String,
        required: true
    },
    chicken_eggs: {
        type: String,
        required: true
    },
    average_day_chicken: {
        type: String,
        required: true
    },
    last_six_months_chicken: {
        type: String,
        required: true
    },
    broilers: {
        type: String,
        required: true
    },
    average_cicle_chicken: {
        type: String,
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
        type: String,
        required: true
    },
    harvest: {
        type: String,
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
            type: String,
            required: true,
            enum: ['0', '1']
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
            type: String,
            required: true,
            enum: ['0', '1', '2']
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
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        self_consumption: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        income_generation: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        form_ternure: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        surface: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        water_resource: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
        },
        cultivation_system: {
            type: String,
            required: true,
            enum: ['0', '1', '2', '3']
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