import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

const languages = ['en', 'ru', 'tm']

export const MainPage = () => {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language

    const onChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <main className='w-screen h-screen flex flex-col space-y-4 items-center justify-center'>
            <div>{t('hello')}</div>
            <div className='space-x-2'>
                {languages.map((lng) => {
                    return <button onClick={() => onChangeLanguage(lng)} className={clsx('bg-[#146a76] text-white px-4 py-2 rounded-md', {
                        'bg-opacity-100': lng === currentLanguage,
                        'bg-opacity-30': lng !== currentLanguage
                    })}>{lng.toUpperCase()}</button>
                })}
            </div>
            <a href='https://github.com/ecomnazar/react-i18n-boilerplate' target='_blank' className='text-[#0c8492]'>https://github.com/ecomnazar/react-i18n-boilerplate</a>
        </main>
    )
}
