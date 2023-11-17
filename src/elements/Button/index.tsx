import S from './styles'

type Props = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className: string
}

function Button<K extends Props>(props: K) {
  const { children, onClick, className } = props
  return (
    <S.Button type='button' onClick={onClick} className={className}>
      {children}
    </S.Button>
  )
}

export default Button
