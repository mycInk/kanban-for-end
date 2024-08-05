import { Router, Route } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
const Controller = () => {
  return (
    <div>
      <Router>
        <Route path="signin" Component={SignIn} />
        <Route path="signup" Component={SignUp} />
      </Router>
    </div>
  );
};
export default Controller;