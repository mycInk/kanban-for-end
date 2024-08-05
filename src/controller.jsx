import { Router, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
    const Controller = () => {
      return (
        <Router>
          <div>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </Router>
      );
    };
export default Controller;