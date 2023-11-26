import TitleBar from '@components/TitleBar'
import SideBar from './components/SideBar'
import MainLayout from './components/MainLayout'

function App() {
  return (
    <>
      <TitleBar />
      <MainLayout>
        <SideBar />
      </MainLayout>
    </>
  )
}

export default App
