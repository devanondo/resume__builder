import { Schema, model } from 'mongoose'
import {
    ILayout,
    ILayoutModel,
    Item,
    LayoutGroup,
    TextStyle,
    Typo,
} from './layout-interface'

const TextStyleSchema = new Schema<TextStyle>({
    fontSize: String,
    lineHeight: String,
    fontWeight: { type: Schema.Types.Mixed },
})

const ItemSchema = new Schema<Item>({
    title: String,
    height: Number,
    key: String,
    position: Number,
})

const LayoutGroupSchema = new Schema<LayoutGroup>({
    title: String,
    column: Number,
    items: [ItemSchema],
})

const TypoSchema = new Schema<Typo>({
    small: {
        heading: TextStyleSchema,
        title: TextStyleSchema,
        subheading: TextStyleSchema,
        subtitle: TextStyleSchema,
        paragraph: TextStyleSchema,
    },
    medium: {
        heading: TextStyleSchema,
        title: TextStyleSchema,
        subheading: TextStyleSchema,
        subtitle: TextStyleSchema,
        paragraph: TextStyleSchema,
    },
    large: {
        heading: TextStyleSchema,
        title: TextStyleSchema,
        subheading: TextStyleSchema,
        subtitle: TextStyleSchema,
        paragraph: TextStyleSchema,
    },
    extralarge: {
        heading: TextStyleSchema,
        title: TextStyleSchema,
        subheading: TextStyleSchema,
        subtitle: TextStyleSchema,
        paragraph: TextStyleSchema,
    },
})

const LayoutSchema = new Schema<ILayout, ILayoutModel>(
    {
        title: String,
        isActive: {
            type: Boolean,
            default: false,
        },
        imgUrl: String,
        layoutStyle: String,
        layout: [LayoutGroupSchema],
        typo: TypoSchema,
    },

    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
)

export const Layout = model<ILayout, ILayoutModel>('User', LayoutSchema)
