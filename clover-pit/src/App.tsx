import s from './App.module.css';
import { Route, Routes, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Automat from './components/Automat/Automat'
import Dedlain from './components/Dedlain/Dedlain'
import Store from './components/Store/Store'

const App = () => {
  
  return (
    <div className={s.appWrapper}>
      <Routes>

        <Route path='/automat/*' element={<Automat />} />
        <Route path='/dedlain/*' element={<Dedlain />} />
        <Route path='/store/*' element={<Store />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
