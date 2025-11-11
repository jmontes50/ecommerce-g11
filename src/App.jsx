import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Navbar from './modules/ui/Navbar'
import HomeView from './modules/Home/HomeView'
import RegisterView from './modules/Auth/RegisterView'
import LoginView from './modules/Auth/LoginView'
import CheckOutView from './modules/Cart/CheckOutView'

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/cart" element={<CheckOutView />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
