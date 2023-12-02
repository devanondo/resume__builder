/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { GroupItem } from '@/components/shared/wrapper'
import { TypographyInput } from '../components/Typography'
import LanguageItems from './language-items'

const LanguageSection = () => {
    const name = 'languages.items'

    return (
        <GroupItem popoverKey="languages">
            <TypographyInput
                name={'languages.name' as const}
                placeholder="Languages"
                type="title"
            />

            <LanguageItems name={name} />
        </GroupItem>
    )
}

export default LanguageSection
