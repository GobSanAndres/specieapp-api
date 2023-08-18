const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const FishingAreasSchema = Schema({
  description: {
    type: String,
    required: true,
  },
  number_days: {
    type: String,
    required: true,
  },
});

const ReelSchema = Schema({
  type: {
    type: String,
  },
  number_reel_perday: {
    type: String,
  },
  number_hooks: {
    type: String,
  },
  hook_type: {
    type: String,
  },
  hook_gauge: {
    type: String,
  },
  effort_reel_perday: {
    type: String,
  },
});

const LongLineSchema = Schema({
  sets_number_perday: {
    type: String,
    required: true,
  },
  sets_number: {
    type: String,
    required: true,
  },
  sets_hook_type: {
    type: String,
    required: true,
  },
  sets_hook_gauge: {
    type: String,
    required: true,
  },
  sets_effort_hook_perday: {
    type: String,
    required: true,
  },
});

const TransshipmentControlSchema = Schema({
  product: {
    type: String,
  },
  weight_kg: {
    type: String,
  },
  boat: {
    type: String,
  },
});

const TransshipmentProductControlSchema = Schema({
  data: {
    type: Number,
  },
  product: {
    type: String,
  },
  weight_kg: {
    type: String,
  },
  boat: {
    type: String,
  },
});

const NumberSealsSchema = Schema({
  seal: {
    type: String,
    required: true,
  },
});

const IndustrialVesselInspectionSchema = Schema(
  {
    create_by: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    register_number: {
      type: String,
      required: true,
      default: function () {
        return uuidv4();
      },
    },
    type_fishshop: {
      type: String,
      required: true,
      enum: ["caracol", "langosta", "blanca"],
    },
    landing_site: {
      type: Schema.Types.ObjectId,
      ref: "FishingSite",
      required: true,
    },
    arrival_date: {
      type: Number,
      required: true,
    },
    sailing_date: {
      type: Number,
      required: true,
    },
    boat_name: {
      type: Schema.Types.ObjectId,
      ref: "Boat",
      required: true,
    },
    captain_name: {
      type: String,
      required: true,
    },
    permit_holder: {
      type: String,
      required: true,
    },
    patent_number: {
      type: String,
      required: true,
    },
    expiration_date: {
      type: Number,
      required: true,
    },
    field_recorder: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    number_fishermen_resident: {
      type: String,
      required: true,
    },
    number_fishermen_foreign: {
      type: String,
      required: true,
    },
    number_fishermen_continental: {
      type: String,
      required: true,
    },
    number_crew_resident: {
      type: String,
      required: true,
    },
    number_crew_foreign: {
      type: String,
      required: true,
    },
    number_crew_continental: {
      type: String,
      required: true,
    },
    fishing_areas: [{ type: FishingAreasSchema, required: true }],
    diving_number_pangas_perday: {
      type: String,
      required: false,
    },
    diving_number_divers_perpanga: {
      type: String,
      required: false,
    },
    diving_effort_diver_perday: {
      type: String,
      required: false,
    },
    lobster_pots_number_lines_perdays: {
      type: String,
      required: false,
    },
    lobster_pots_number_lingadas_perlines: {
      type: String,
      required: false,
    },
    lobster_pots_number_nasa_perlingada: {
      type: String,
      required: false,
    },
    lobster_pots_effort: {
      type: String,
      required: false,
    },
    fish_pots_type: {
      type: String,
      required: false,
    },
    fish_pots_number_pots_perday: {
      type: String,
      required: false,
    },
    fish_pots_effort_pots_perday: {
      type: String,
      required: false,
    },
    long_line: {
      type: String,
      required: true,
    },
    longLine: [{ type: LongLineSchema, require: true }],
    reel: [{ type: ReelSchema, require: true }],
    //
    transshipment_control: [
      {
        type: TransshipmentControlSchema,
        required: true,
      },
    ],
    transshipment_product_control: [
      {
        type: TransshipmentProductControlSchema,
        required: true,
      },
    ],
    control_total_bags_landed: {
      type: String,
      required: true,
    },
    control_total_sealed_bags: {
      type: String,
      required: true,
    },
    number_seals: [{ type: NumberSealsSchema, required: true }],
    observations: {
      type: String,
      required: false,
    },
    signatureRegister: {
      type: String,
      required: true,
    },
    signatureCaptainOrRepresentative: {
      type: String,
      required: true,
    },
    issue_date: {
      type: Number, //epoch
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model(
  "IndustrialVesselInspection",
  IndustrialVesselInspectionSchema
);
