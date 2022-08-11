import './Vendors';
import {Formik, Form, Field} from 'formik';
import ReactIsCapsLockActive from '@matsun/reactiscapslockactive';
import FormHeader from './component/FormHeader';


function SignUpForm() {
    const validateName = (value) => {
        let error;
        if (!value)
            error = '*Required';
        else if (value.length < 2)
            error = '*Too Short';
        else if (value.length > 10)
            error = '*Too Long';
        return error;
    }
    const validateAge = (value) => {
        let error;
        if (!value)
            error = '*Required';
        else if (value < 18)
            error = '*Too Young';
        else if (value > 99)
            error = '*Too Old';
        return error;
    }
    const validatePassword = (value) => {
        let error;
        const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (!value)
            error = '*Required';
        else if (!value.match(decimal))
            error = '*Weak Password';
        return error;

    }
    const validateEmail = (value) => {
        let error;
        const emailValidate = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

        if (!value)
            error = '*Required';
        else if (!value.match(emailValidate))
            error = '*Invalid Email';
        return error;
    }
    const validateGender = (value) => {
        let error;
        if (value === '')
            error = '*Required';
        return error;

    }
    return (
        <div className={'d-flex justify-content-center container'}>
            <div className="card text-center">
                <FormHeader/>
                <div className="card-body">
                    <Formik
                        initialValues={{
                            firstName: '',
                            secondName: '',
                            surname: '',
                            age: '',
                            email: '',
                            gender: '',
                            genderTwo: 'male',
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
                                        {/*First Name*/}
                                        <div className="form-group ">
                                            <label htmlFor="firstName" className=" form-label">First Name
                                                {errors.firstName && touched.firstName ? (
                                                    <span
                                                        className={'ms-2 fw-light text-danger'}>{errors.firstName}</span>
                                                ) : null}
                                            </label>
                                            <Field id={'firstName'} name={'firstName'} className={'form-control'}
                                                   validate={validateName}/>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        {/*Second Name*/}
                                        <div className="form-group ">
                                            <label htmlFor="secondName" className=" form-label">Second Name</label>
                                            <Field id={'secondName'} name={'secondName'} className={'form-control'}/>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        {/*Surname*/}
                                        <div className="form-group ">
                                            <label htmlFor="surname" className="form-label">Surname
                                                {errors.surname && touched.surname ? (
                                                    <span className="ms-2 fw-light text-danger">{errors.surname}</span>
                                                ) : null}
                                            </label>
                                            <Field id={'surname'} name={'surname'} className={'form-control'}
                                                   validate={validateName}/>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        {/*Age*/}
                                        <div className="form-group ">
                                            <label htmlFor="age" className="form-label">Age
                                                {errors.age && touched.age ? (
                                                    <span className="ms-2 fw-light text-danger">{errors.age}</span>
                                                ) : null}
                                            </label>
                                            <Field className={'form-control'} name={'age'} id={'age'} type={'number'}
                                                   validate={validateAge}/>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-4">
                                        {/*Email*/}
                                        <div className="form-group ">
                                            <label htmlFor="email" className=" form-label">Email
                                                {errors.email && touched.email ? (
                                                    <span className="ms-2 fw-light text-danger">{errors.email}</span>
                                                ) : null}
                                            </label>
                                            <Field type={'email'} name={'email'} id={'email'} className={'form-control'}
                                                   validate={validateEmail}/>
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
                                    <div className="col-4 mb-4">
                                        {/*Gender Select*/}
                                        <div className="form-group ">
                                            <label htmlFor="gender" className=" form-label">Gender
                                                {errors.gender && touched.gender ? (
                                                    <span className="fw-light ms-2 text-danger">{errors.gender}</span>
                                                ) : null}
                                            </label>
                                            <Field as={'select'} multiple={false} name={'gender'}
                                                   className={'form-select'} validate={validateGender}>
                                                <option value="">Select</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Field>
                                        </div>
                                    </div>
                                    {/*Gender Radio*/}
                                    <div className="form-group mb-4">
                                        <div>
                                            <label htmlFor="genderTwo" className=" form-check-label">Gender</label>
                                        </div>
                                        <label htmlFor="maleTwo" className={'form-check-label me-4'}> Male : {' '}
                                            <Field type={'radio'} id={'maleTwo'} name={'genderTwo'}
                                                   className={'form-check-input'} value={'male'}/>
                                        </label>
                                        <label htmlFor="femaleTwo" className="form-check-label">Female : {' '}
                                            <Field type={'radio'} id={'femaleTwo'} name={'genderTwo'}
                                                   className={'form-check-input'} value={'female'}/>
                                        </label>
                                    </div>
                                </div>
                                <ReactIsCapsLockActive>
                                    {active => active ? (
                                        <div className={'mb-4'}>Caps Lock is <span
                                            className={'text-danger text-uppercase fw-bold'}>active</span></div>
                                    ) : null}
                                </ReactIsCapsLockActive>
                                <button type={'submit'} className="btn btn-outline-primary">Submit</button>
                            </Form>

                        )}

                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm;