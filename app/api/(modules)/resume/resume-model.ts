import { Schema, model, models } from 'mongoose'
import { IResume, ResumeModel } from './resume-interface'

const ResumeSchema = new Schema<IResume, ResumeModel>(
    {
        style: {
            record: String,
            layout: String,
            colors: [String],
            background: String,
            fontBody: String,
            fontHeading: String,
            fontSize: String,
            isMetaDataDisabled: Boolean,
            marginOption: Number,
            pageMarginOption: Number,
        },
        header: {
            enabled: Boolean,
            name: String,
            title: String,
            email: String,
            location: String,
            phone: String,
            link: String,
            extra_link: String,
            extra_field: String,
            show_title: Boolean,
            show_phone: Boolean,
            show_link: Boolean,
            show_email: Boolean,
            show_location: Boolean,
            show_extraLink: Boolean,
            show_extraField: Boolean,
            uppercase_name: Boolean,
            show_photo: Boolean,
            photo_style: String,
            photoUrl: String,
            height: Number,
        },
        summerySection: {
            name: String,
            record: String,
            height: Number,
            enabled: Boolean,
            items: [
                {
                    summery: String,
                    height: Number,
                    placeholder: String,
                },
            ],
        },
        experienceSummary: {
            height: Number,
            record: String,
            name: String,
            enabled: Boolean,
            items: [
                {
                    height: Number,
                    enabled: Boolean,
                    position: String,
                    bold_position: Boolean,
                    workplace: String,
                    location: String,
                    show_location: Boolean,
                    date: {
                        from: {
                            type: Date,
                            default: Date.now(),
                        },
                        to: {
                            type: Date,
                            default: Date.now(),
                        },
                        is_present: Boolean,
                    },
                    description: {
                        text: String,
                        italic_description: Boolean,
                        enabled: Boolean,
                    },
                    bulets: {
                        enabled: Boolean,
                        bulet_items: Boolean,
                        italic_items: Boolean,
                        name: String,
                        items: [
                            {
                                text: String,
                                placeholder: String,
                            },
                        ],
                    },
                },
            ],
        },
        skills: {
            record: String,
            name: String,
            enabled: Boolean,
            height: Number,
            items: [
                {
                    title: String,
                    height: Number,
                    placeholder: String,
                    show_title: Boolean,
                    bold_title: Boolean,
                    italic_title: Boolean,
                    underline_key: Boolean,
                    italic_key: Boolean,
                    bold_key: Boolean,
                    keys: [
                        {
                            keyItem: String,
                        },
                    ],
                },
            ],
        },
        projects: {
            record: String,
            name: String,
            height: Number,
            enabled: Boolean,
            items: [
                {
                    name: String,
                    bold_name: Boolean,
                    show_link: Boolean,
                    link: String,
                    link_icon: Boolean,
                    extra_link: String,
                    show_extra_link: Boolean,
                    height: {
                        type: Number,
                        default: 92,
                    },
                    date: {
                        record: String,
                        from: {
                            type: Date,
                            default: Date.now(),
                        },
                        to: {
                            type: Date,
                            default: Date.now(),
                        },
                        is_present: Boolean,
                        date_icon: Boolean,
                    },
                    description: {
                        text: String,
                        italic_description: Boolean,
                        enabled: Boolean,
                    },
                    bulets: {
                        enabled: Boolean,
                        bulet_items: Boolean,
                        italic_items: Boolean,
                        name: String,
                        items: [
                            {
                                text: String,
                            },
                        ],
                    },
                },
            ],
        },
        strengths: {
            record: String,
            name: String,
            enabled: Boolean,
            height: Number,
            grid: {
                type: Number,
                default: 1,
                required: true,
            },
            items: [
                {
                    enabled: Boolean,
                    name: String,
                    placeholder: String,
                    icon: String,
                    height: Number,
                    show_icon: Boolean,
                    description: {
                        placeholder: String,
                        italic_description: Boolean,
                        enabled: Boolean,
                        text: String,
                    },
                },
            ],
        },
        languages: {
            record: String,
            height: Number,
            name: String,
            enabled: Boolean,
            grid: {
                type: Number,
                default: 1,
                required: true,
            },
            items: [
                {
                    name: String,
                    height: Number,
                    placeholder: String,
                    level: String,
                    show_label: Boolean,
                    score: {
                        count: {
                            type: Number,
                        },
                        slide_type: {
                            type: String,
                        },
                    },
                },
            ],
        },
        educations: {
            record: String,
            height: Number,
            name: String,
            enabled: Boolean,
            grid: {
                type: Number,
                default: 1,
                required: true,
            },
            items: [
                {
                    enabled: Boolean,
                    height: Number,
                    name: String,
                    placeholder: String,
                    icon: String,
                    show_icon: Boolean,
                    institution: {
                        name: String,
                        placeholder: String,
                        gpa: String,
                        placeholder_gpa: String,
                        gpa_score: String,
                        placeholder_gpa_score: String,
                        gpa_max: String,
                        placeholder_gpa_max: String,
                        enabled_gpa: Boolean,
                    },
                    location: String,
                    show_location: Boolean,
                    show_location_icon: Boolean,
                    show__institution: Boolean,
                    date: {
                        record: String,
                        placeholder: String,
                        from: {
                            type: Date,
                            default: Date.now(),
                        },
                        to: {
                            type: Date,
                            default: Date.now(),
                        },
                        is_present: Boolean,
                        date_icon: Boolean,
                    },
                    bulets: {
                        enabled: Boolean,
                        bulet_items: Boolean,
                        italic_items: Boolean,
                        name: String,
                        items: [
                            {
                                text: String,
                            },
                        ],
                    },
                },
            ],
        },
        declaration: {
            record: String,
            name: String,
            height: Number,
            enabled: Boolean,
            items: [
                {
                    description: String,
                    height: Number,
                    name: String,
                },
            ],
        },
        references: {
            record: String,
            name: String,
            enabled: Boolean,
            height: Number,
            items: [
                {
                    name: String,
                    height: Number,
                    placeholder: String,
                    show_email: Boolean,
                    show_phone: Boolean,
                    show_address: Boolean,
                    email: String,
                    phone: String,
                    address: String,
                },
            ],
        },
        uid: {
            type: String,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Resume =
    models['resume'] || model<IResume, ResumeModel>('resume', ResumeSchema)
