import {Link} from 'react-router-dom';
import '../Vendors';

function FormHeader() {
    return (
        <div className="card-header">
            <div className="d-flex justify-content-between">
                <Link className={'text-decoration-none'} to={'/login'}>Login</Link>
                <Link className={'text-decoration-none'} to={'/'}>Homepage</Link>
                <Link className={'text-decoration-none'} to={'/signup'}>Sign Up</Link>
            </div>
        </div>
    )
}

export default FormHeader;