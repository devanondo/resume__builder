export type FontSizeType = 'small' | 'medium' | 'large' | 'extraLarge'

export const getFontSize = (level: FontSizeType) => {
    switch (level) {
        case 'small':
            return {
                heading: '18px',
                title: '16px',
                subHeading: '14px',
                subTitle: '13px',
                paragraph: '12px',
            }

        case 'medium':
            return {
                heading: '22px',
                title: '18px',
                subHeading: '16px',
                subTitle: '15px',
                paragraph: '14px',
            }
        default:
            return {
                heading: '18px',
                title: '16px',
                subHeading: '14px',
                subTitle: '13px',
                paragraph: '12px',
            }
    }
}

export const getFontLevel = (level: number) => {
    switch (level) {
        case 1:
            return 'small'
        case 2:
            return 'medium'
        case 3:
            return 'large'
        case 4:
            return 'extraLarge'
        default:
            return 'small'
    }
}
