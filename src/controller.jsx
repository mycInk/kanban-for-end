import { Router, Route, Link, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
    const Controller = () => {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/signin">SignIn</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </Router>
      );
    };
export default Controller;