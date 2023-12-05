import { Model } from 'mongoose'

export interface IResume extends Document {
    style: {
        record: string
        layout: string
        colors: string[]
        background: string
        fontBody: string
        fontHeading: string
        fontSize: string
        isMetaDataDisabled: boolean
        marginOption: number
        pageMarginOption: number
    }
    header: {
        enabled: boolean
        name: string
        title: string
        email: string
        location: string
        phone: string
        link: string
        extra_link: string
        extra_field: string
        show_title: boolean
        show_phone: boolean
        show_link: boolean
        show_email: boolean
        show_location: boolean
        show_extraLink: boolean
        show_extraField: boolean
        uppercase_name: boolean
        show_photo: boolean
        photo_style: string
        photoUrl: string
        height: number
    }
    summerySection: {
        name: string
        record: string
        enabled: boolean
        items: Array<{
            summery: string
            placeholder: string
        }>
    }
    experienceSummary: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            enabled: boolean
            position: string
            bold_position: boolean
            workplace: string
            location: string
            show_location: boolean
            date: {
                from: string
                to: string
                is_present: boolean
            }
            description: {
                text: string
                italic_description: boolean
                enabled: boolean
            }
            bulets: {
                enabled: boolean
                bulet_items: boolean
                italic_items: boolean
                name: string
                items: Array<{
                    text: string
                    placeholder: string
                }>
            }
        }>
    }
    skills: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            title: string
            placeholder: string
            show_title: boolean
            bold_title: boolean
            italic_title: boolean
            underline_key: boolean
            italic_key: boolean
            bold_key: boolean
            keys: Array<{
                keyItem: string
            }>
        }>
    }
    projects: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            name: string
            bold_name: boolean
            show_link: boolean
            link: string
            link_icon: boolean
            extra_link: string
            show_extra_link: boolean
            date: {
                record: string
                from: string
                to: string
                is_present: boolean
                date_icon: boolean
            }
            description: {
                text: string
                italic_description: boolean
                enabled: boolean
            }
            bulets: {
                enabled: boolean
                bulet_items: boolean
                italic_items: boolean
                name: string
                items: Array<{
                    text: string
                }>
            }
        }>
    }
    strengths: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            enabled: boolean
            name: string
            placeholder: string
            icon: string
            show_icon: boolean
            description: {
                placeholder: string
                italic_description: boolean
                enabled: boolean
                text: string
            }
        }>
    }
    languages?: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            name: string
            placeholder: string
            level: string
            show_label: boolean
            score: {
                count: number
                slide_type: string
            }
        }>
    }
    educations: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            enabled: boolean
            name: string
            placeholder: string
            icon: string
            show_icon: boolean
            institution: {
                name: string
                placeholder: string
                gpa: string
                placeholder_gpa: string
                gpa_score: string
                placeholder_gpa_score: string
                gpa_max: string
                placeholder_gpa_max: string
                enabled_gpa: boolean
            }
            location: string
            show_location: boolean
            show_location_icon: boolean
            show__institution: boolean
            date: {
                record: string
                placeholder: string
                from: string
                to: string
                is_present: boolean
                date_icon: boolean
            }
            bulets: {
                enabled: boolean
                bulet_items: boolean
                italic_items: boolean
                name: string
                items: Array<{
                    text: string
                }>
            }
        }>
    }
    declaration: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            description: string
            name: string
        }>
    }
    references: {
        record: string
        name: string
        enabled: boolean
        items: Array<{
            name: string
            placeholder: string
            show_email: boolean
            show_phone: boolean
            show_address: boolean
            email: string
            phone: string
            address: string
        }>
    }
    uid: string
}

export type ResumeModel = Model<IResume, Record<string, unknown>>
