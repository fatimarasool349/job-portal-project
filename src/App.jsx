import './App.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/common/ScrollToTop'
function App() {

  return (
    
    <BrowserRouter>
    <ScrollToTop />
     <AppRoutes/>
    </BrowserRouter>
  
  )
}

export default App;
