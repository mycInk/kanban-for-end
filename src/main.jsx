import ReactDOM from 'react-dom/client'
import Controller from './controller.jsx'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Controller />
  </BrowserRouter>,
)
