'use client'

import './styles.css'

import FlagSelect from "react-flags-select"
import { useTranslation } from 'react-i18next'

export default function LanguageSelect(){ 
    const { t, i18n } = useTranslation()   
    
    function onSelect(lang: string){
        const mapLang = {
            'BR': 'pt',
            'US': 'en'
        }
        
        i18n.changeLanguage(mapLang[lang])
    }
    
    const mapLang = {
        'pt': 'BR',
        'en': 'US'
    }

    return (
        <div className="react-flags-select">
            <FlagSelect
                countries={["BR", "US"]}
                customLabels={{
                    BR: t('LANGUAGE.PORTUGUESE') ?? 'Portuguese',
                    US: t('LANGUAGE.ENGLISH') ?? 'English'
                }}
                showSelectedLabel={false}
                placeholder="Selecione um idioma"
                searchable={false}
                onSelect={onSelect}
                selected={mapLang[i18n.language]}
                className="w-full py-2 px-7 max-sm:-mr-2"
                selectButtonClassName='input input-bordered'
            />
        </div>
    )
} 

