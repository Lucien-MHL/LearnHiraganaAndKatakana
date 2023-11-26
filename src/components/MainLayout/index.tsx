type Props = {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return <div className='h-[calc(100vh-28px)]'>{children}</div>
}

export default MainLayout
