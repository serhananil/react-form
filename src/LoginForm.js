import './Vendors';
import FormHeader from './component/FormHeader';
import {Formik, Form, Field} from 'formik';
import ReactIsCapsLockActive from "@matsun/reactiscapslockactive";

function LoginForm() {
    const validateUserName = (value) => {
        let error;
        if (!value)
            error = '*Required';
        else if (value.length < 3)
            error = '*Too Short';
        else if (value.length > 15)
            error = '*Too Long';
        return error;
    }

    const validatePassword = (value) => {
        const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        let error;

        if (!value)
            error = '*Required';
        else if (!value.match(strongPassword))
            error = '*Weak Password!'
        return error;

    }

    return (
        <div className={'d-flex justify-content-center container'}>
            <div className="card text-center">
                <FormHeader/>
                <div className="card-body">
                    <Formik
                        initialValues={{
                            userName: '',
                            password: '',

                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <div className="row justify-content-center">
                                    <div className="col-6 mb-4">
                                        {/*Username*/}
                                        <div className="form-group ">
                                            <label htmlFor="userName" className=" form-label">Username
                                                {errors.userName && touched.userName ? (
                                                    <span
                                                        className={'ms-2 fw-light text-danger'}>{errors.userName}</span>
                                                ) : null}
                                            </label>
                                            <Field id={'userName'} name={'userName'} className={'form-control'}
                                                   validate={validateUserName}/>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        {/*Password*/}
                                        <div className="form-group ">
                                            <label htmlFor="password" className="form-label">Password
                                                {errors.password && touched.password ? (
                                                    <span className="fw-light ms-2 text-danger">{errors.password}</span>
                                                ) : null}
                                            </label>
                                            <Field id={'password'} name={'password'} type={'password'}
                                                   className={'form-control'} validate={validatePassword}/>
                                        </div>
                                    </div>
                                </div>
                                <ReactIsCapsLockActive>
                                    {active => active ? (
                                        <div className={'mb-4'}>Caps Lock is <span
                                            className={'text-danger text-uppercase fw-bold'}>active</span></div>
                                    ) : null}
                                </ReactIsCapsLockActive>
                                <button type={'submit'} className="btn btn-outline-primary me-4">Login</button>
                                <label htmlFor="rememberMe" className="form-check-label">
                                    <Field id={'rememberMe'} name={'remember-me'} type={'checkbox'} className={'form-check-input'}/> Remember Me
                                </label>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;