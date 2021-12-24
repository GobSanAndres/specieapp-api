const { Schema, model } = require('mongoose');

const NumberFishermenSchema = Schema({
    residents: {
        type: String,
        required: true
    },
    foreign: {
        type: String,
        required: true
    },
    continental: {
        type: String,
        required: true
    }
});

const NumberCrewSchema = Schema({
    residents: {
        type: String,
        required: true
    },
    foreign: {
        type: String,
        required: true
    },
    continental: {
        type: String,
        required: true
    }
});

const GeneralInformationSchema  = Schema({
    register_number: {
        type: String,
        required: true
    },
    type_fishshop: {
        type: String,
        required: true
    },
    landing_site: {
        type: String,
        required: true
    },
    arrival_date: {
        type: Number,
        required: true
    },
    sailing_date: {
        type: Number,
        required: true
    },
    boat_name: {
        type: String,
        required: true
    },
    captain_name: {
        type: String,
        required: true
    },
    permit_holder: {
        type: String,
        required: true
    },
    patent_number: {
        type: String,
        required: true
    },
    expiration_date: {
        type: Number,
        required: true
    },
    field_recorder: {
        type: String,
        required: true
    },
    number_fishermen: {
        type: NumberFishermenSchema,
        required: true
    },
    number_crew: { 
        type: NumberCrewSchema,
        required: true
    },
});

const FishingAreasSchema = Schema({
    description: {
        type: String,
        required: true
    },
    number_days: {
        type: String,
        required: true
    }
});

const DivingSchema = Schema({
    number_pangas_perday: {
        type: String,
        required: true
    },
    number_divers_perpanga: {
        type: String,
        required: true
    },
    effort_diver_perday: {
        type: String,
        required: true
    }
});

const LobsterPotSchema = Schema({
    number_lines_perdays: {
        type: String,
        required: true
    },
    number_lingadas_perlines: {
        type: String,
        required: true
    },
    number_nasa_perlingada:{
        type: String,
        required: true
    },
    effort: {
        type: String,
        required: true
    }
});

const FishPotSchema = Schema({
    type: {
        type: String,
        required: true
    },
    number_pots_perday: {
        type: String,
        required: true
    },
    effort_pots_perday: {
        type: String,
        required: true
    }
});


const SubgroupSchema = Schema({
    type: {
        type: String,
        required: true
    },
    number_sets_perday: {
        type: String,
        required: true
    },
    number_sets: {
        type: String,
        required: true
    },
    hook_type: {
        type: String,
        required: true
    },
    hook_gauge: {
        type: String,
        required: true
    },
    effort_hook_perday: {
        type: String,
        required: true
    }
});

const ReelSchema = Schema({
    type: {
        type: String,
        required: true
    },
    number_reel_perday: {
        type: String,
        required: true
    },
    number_hooks: {
        type: String,
        required: true
    },
    hook_type: {
        type: String,
        required: true
    },
    hook_gauge: {
        type: String,
        required: true
    },
    effort_reel_perday: {
        type: String,
        required: true
    }
});

const EffortCharacteristicArtMethodSchema = Schema({
    diving: {
        type: DivingSchema,
        required: true
    },
    lobster_pots: {
        type: LobsterPotSchema,
        required: true
    },
    fish_pots: {
        type: FishPotSchema,
        required: true
    },
    long_line: {
        type: String,
        required: true
    },
    subgroup: [{ type: SubgroupSchema, require: true }],
    reel: [{ type: ReelSchema, require: true }],
});

const BringsTransshipmentSchema = Schema({
    product: {
        type: String,
        required: true
    },
    weight_kg: {
        type: String,
        required: true
    },
    boat: {
        type: String,
        required: true
    }
});

const ProductTransshipmentSchema = Schema({
    product: {
        type: String,
        required: true
    },
    weight_kg: {
        type: String,
        required: true
    },
    boat: {
        type: String,
        required: true
    }
});

const TransshipmentControlSchema = Schema({
    brings_transshipment: [{
        type: BringsTransshipmentSchema,
        required: true
    }],
    product_transshipment: [{
        type: ProductTransshipmentSchema,
        required: true
    }]
});

const NumberSealsSchema = Schema({
    seal: {
        type: String,
        required: true
    }
});

const ControlSampleLobsterSchema = Schema({
    total_bags_landed: {
        type: String,
        required: true
    },
    total_sealed_bags: {
        type: String,
        required: true
    },
    number_seals: [{ type: NumberSealsSchema, require: true }],
});


const IndustrialVesselInspectionSchema = Schema(
    {
        approval_date: {
            type: Number,
            required: true
        },
        create_by: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        general_information: {
            type: GeneralInformationSchema,
            required: true
        },
        fishing_areas: [{ type: FishingAreasSchema, require: true }],
        effort_characteristics_arts_methods: {
            type: EffortCharacteristicArtMethodSchema,
            required: true
        },
        transshipment_control: {
            type: TransshipmentControlSchema,
            required: true
        },
        control_sample_lobster: {
            type: ControlSampleLobsterSchema,
            required: true
        },
        observations: {
            type: String,
            required: true
        },
        signatureRegister: {
            type: String,
            required: true
        },
        signatureCaptainOrRepresentative: {
            type: String,
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

module.exports = model('IndustrialVesselInspection', IndustrialVesselInspectionSchema);