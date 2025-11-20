import { useState } from "react"
import { useNavigate } from "react-router"

let initialLoginData = {
    email: '',
    password: ''
}

function validate(values) {
    let errors = {}

    if (!values.email) {
        errors['email'] = 'E-mail is required!'
    }

    if (!values.password) {
        errors['password'] = 'Passowrd is required!'
    }

    return errors;
}

export function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState(initialLoginData);

    const loginUserDataHandler = (e) => {
        setLoginData((loginData) => ({
            ...loginData,
            [e.target.name]: e.target.value
        }))
    }

    const submitUserLoginData = (e) => {
        e.preventDefault();

        if (Object.keys(validate(loginData)).length > 0) {
            alert(Object.values(validate(loginData)).at(0))
            return;
        }

        navigate('/');
    }

    return (
        <section id="login-page">
            <form id="login" onSubmit={submitUserLoginData}>
                <div className="container">
                    <h1>Login</h1>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={loginData.email}
                        onChange={loginUserDataHandler}
                        placeholder="Your Email"
                    />

                    <label htmlFor="login-pass">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={loginData.password}
                        onChange={loginUserDataHandler}
                        placeholder="Password"
                    />

                    <input type="submit" className="btn submit" defaultValue="Login" />
                </div>
            </form>
        </section>
    )
}