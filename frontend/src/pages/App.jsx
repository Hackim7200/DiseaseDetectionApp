// which ever page has the outlet comp becomes the layout design
// import Header from './components/Header'
import { Outlet } from 'react-router-dom'
// import Hero from './components/Hero'

function App() {
  return (
      // where output is used you can use it to set the general design of the website e.g., header,footer
    <>
    {/* <Header/>  */}
    <div>
      <Outlet/> 

    </div>
    </>



  )
}

export default App