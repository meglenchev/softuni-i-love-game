import { useContext } from "react"
import { useNavigate } from "react-router"
import { endPoints } from "../../utils/endpoints.js"
import { UserContext } from "../../contexts/UserContext.js"
import { useForm } from "../hooks/useForm.js"

let initialLoginData = {
    email: '',
    password: ''
}

function validate(values) {
    let errors = {}

    //Validate E-mail Field
    if (!values.email) {
        errors['email'] = 'E-mail is required!'
    }

    //Validate Password Field
    if (!values.password) {
        errors['password'] = 'Passowrd is required!'
    }

    return errors;
}

export function Login() {
    const { onLogin } = useContext(UserContext)

    const navigate = useNavigate();

    const submitUserLoginData = async (formValues) => {
        const { email, password } = formValues;

        if (Object.keys(validate(formValues)).length > 0) {
            return alert(Object.values(validate(formValues)).at(0));
        }

        const res = await fetch(endPoints.login, {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json'
            },
            body: JSON.stringify({email, password})
        })

        const result = await res.json()

        onLogin(result);

        navigate('/');
    }

    const { propertiesRegister, formAction } = useForm(submitUserLoginData, initialLoginData);

    return (
        <section id="login-page">
            <form id="login" action={formAction}>
                <div className="container">
                    <h1>Login</h1>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...propertiesRegister('email')}
                        placeholder="Your Email"
                    />

                    <label htmlFor="login-pass">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        {...propertiesRegister('password')}
                        placeholder="Password"
                    />

                    <input type="submit" className="btn submit" defaultValue="Login" />
                </div>
            </form>
        </section>
    )
}