import { useState } from "react"
import { useNavigate } from "react-router";

let initialRegisterData = {
    email: '', 
    password: '', 
    confirmPassword: ''
}

function validate(values) {
    let errors = {};

    //Validate E-mail Field
    if (!values.email) {
        errors['email'] = 'E-mail is required!'
    }

    //Validate Password Field
    if (!values.password) {
        errors['password'] = 'Password is required!'
    }

    //Passwords equality check
    if (values.confirmPassword != values.password) {
        errors['confirmPassword'] = 'Passwords must be the same!'
    }

    return errors;
}

export function Register() {
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState(initialRegisterData);

    const registerUserDataHandler = (e) => {
        setRegisterData((registerData) => ({
            ...registerData, 
            [e.target.name]: e.target.value
        }))
    }

    const submitUserRegisterData = (e) => {
        e.preventDefault();

        if (Object.entries(validate(registerData)).length > 0) {
            return alert(Object.values(validate(registerData)).at(0));
        }

        setRegisterData(initialRegisterData);

        navigate('/');
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitUserRegisterData}>
                <div className="container">
                    <div className="brand-logo"></div>

                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={registerData.email}
                        onChange={registerUserDataHandler}
                        placeholder="Your Email" 
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={registerData.password}
                        onChange={registerUserDataHandler}
                        id="register-password"
                        placeholder="Password"
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={registerUserDataHandler}
                        id="confirm-password"
                        placeholder="Repeat Password"
                    />

                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
        </section>
    )
}