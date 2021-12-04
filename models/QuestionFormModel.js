const { Schema, model } = require('mongoose');

const QuestionFormSchema = Schema(
    {
        description: {
            type: String,
            required: true
        },
        widget_type: {
            type: String,
            required: true
        },
        datatype: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            required: true
        },
        min: {
            type: Number,
            required: false
        },
        max: {
            type: Number,
            required: false
        },
        regex: {
            type: String,
            required: false
        },
        section_form: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'SectionForm'
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

module.exports = model('QuestionForm', QuestionFormSchema);