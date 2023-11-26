import { Minus, Square, X } from 'lucide-react'
import { appWindow } from '@tauri-apps/api/window'
import logo from './logo.svg'

enum TitleBarFeature {
  CLOSE = 'titlebar-close',
  MINIMIZE = 'titlebar-minimize',
  MAXIMIZE = 'titlebar-maximize',
}

function TitleBar() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    switch (target.id) {
      case TitleBarFeature.MINIMIZE:
        appWindow.minimize().catch((err: string) => {
          throw new Error(err)
        })
        break
      case TitleBarFeature.MAXIMIZE:
        appWindow.toggleMaximize().catch((err: string) => {
          throw new Error(err)
        })
        break
      default:
        appWindow.close().catch((err: string) => {
          throw new Error(err)
        })
        break
    }
  }

  const iconStyle: string = 'pointer-events-none text-gray-400'
  const buttonStyle: string =
    'flex items-center justify-center w-7 h-full hover:bg-slate-500 cursor-pointer'

  return (
    <>
      <section
        data-tauri-drag-region
        className=' w-full flex justify-between fixed top-0 left-0 right-0'
      >
        <div id='logo' className='py-2 pl-2'>
          <img src={logo} alt='FUIYOH' className='w-auto h-3' />
        </div>
        <div className='flex'>
          <button
            id={TitleBarFeature.MINIMIZE}
            className={buttonStyle}
            type='button'
            onClick={onClick}
          >
            <Minus className={`w-5 h-5 ${iconStyle}`} />
          </button>
          <button
            id={TitleBarFeature.MAXIMIZE}
            className={buttonStyle}
            type='button'
            onClick={onClick}
          >
            <Square className={`w-4 h-4 ${iconStyle}`} />
          </button>
          <button
            id={TitleBarFeature.CLOSE}
            className={buttonStyle}
            type='button'
            onClick={onClick}
          >
            <X className={`w-5 h-5 ${iconStyle}`} />
          </button>
        </div>
      </section>
      <div className='h-7' />
    </>
  )
}

export default TitleBar
