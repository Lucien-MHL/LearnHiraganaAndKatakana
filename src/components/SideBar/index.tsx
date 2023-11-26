import { CircleDollarSign, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function SideBar() {
  const { t } = useTranslation()

  return (
    <ul className='list-none relative w-20 h-full'>
      <li className='px-1'>
        <div className='flex flex-col items-center px-3 pt-2 rounded-xl  hover:bg-slate-600 relative'>
          <CircleDollarSign className='w-8 h-8' />
          <p className='text-center text-xs py-2'>{t('finance')}</p>
        </div>
      </li>
      <li className='px-1 absolute w-full  bottom-4 left-0 right-0'>
        <div className='border-t-2 mb-3' />
        <div className='flex flex-col items-center px-3 pt-2 rounded-xl  hover:bg-slate-600 relative'>
          <Settings className='w-8 h-8' />
          <p className='text-center text-xs py-2'>{t('settings')}</p>
        </div>
      </li>
    </ul>
  )
}

export default SideBar
