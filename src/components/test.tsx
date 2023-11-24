import { useTranslation } from 'react-i18next'

function Test() {
  const { t } = useTranslation()

  return <h1>{t('title')}</h1>
}

export default Test
