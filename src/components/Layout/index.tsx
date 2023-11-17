import S from './styles'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return <S.Layout>{children}</S.Layout>
}

export default Layout
