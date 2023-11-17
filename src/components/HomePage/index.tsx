import { useState, useEffect } from 'react'
import S from './styles'
import Button from '../../elements/Button'

type Item = {
  name: 'main' | 'sub'
  text: string
  key: string
}

// TODO: remove this after data is setting
const list: Item[] = [
  {
    name: 'main',
    text: '平假名',
    key: 'hiragana',
  },
  {
    name: 'main',
    text: '片假名',
    key: 'katakana',
  },
  {
    name: 'sub',
    text: '清音',
    key: 'seion',
  },
  {
    name: 'sub',
    text: '濁音',
    key: 'dakuon',
  },
]

function setClassName(isMatch: boolean) {
  return isMatch ? 'selected' : ''
}

function HomePage() {
  const [dataKey, setDataKey] = useState<Record<string, string>>({})
  const [display, setDisplay] = useState<string>() // TODO: 刪除或修改此處，待完成 '拿到資料後' 的邏輯時。

  const onButtonClick = (key: string, name: string) => {
    setDataKey((prev) => ({ ...prev, [name]: key === prev[name] ? '' : key }))
  }

  useEffect(() => {
    const values = Object.values(dataKey)
    if (values.includes('') || values.length < 2) return
    setDisplay(`${dataKey.main}-${dataKey.sub}`) // TODO: 需修改此行，待完成 '拿到資料後' 的邏輯時。
  }, [dataKey])

  // TODO: 需刪除，待完成 '拿到資料後' 的邏輯時。
  if (display) {
    return <h1>{display}</h1>
  }

  return (
    <S.Layout>
      <S.Section>
        {list.map((opt) => (
          <Button
            key={opt.key}
            className={setClassName(opt.key === dataKey[opt.name])}
            onClick={() => onButtonClick(opt.key, opt.name)}
          >
            {opt.text}
          </Button>
        ))}
      </S.Section>
    </S.Layout>
  )
}

export default HomePage
