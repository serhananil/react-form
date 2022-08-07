import './Vendors';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="d-flex justify-content-center">
        <Link to={'login'} className={'text-success text-decoration-none'}>Login </Link> /
        <Link to={'signup'} className={'text-danger text-decoration-none'}>Sign Up</Link>
    </div>
  );
}

export default App;
