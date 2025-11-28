import { useContext } from "react"
import { useNavigate } from "react-router";
import { endPoints } from "../../utils/endpoints.js";
import { UserContext } from "../../contexts/UserContext.js";
import { useForm } from "../hooks/useForm.js";

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
    const { onLogin } = useContext(UserContext);

    const navigate = useNavigate();

    const submitUserRegisterData = async (formValues) => {

        const { email, password } = formValues;

        if (Object.keys(validate(formValues)).length > 0) {
            return alert(Object.values(validate(formValues)).at(0));
        }

        const res = await fetch(endPoints.register, {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify({ email, password })
        })

        const result = await res.json()

        onLogin({ email: result.email, accessToken: result.accessToken, _id: result._id });

        navigate('/');
    }

    const { propertiesRegister, formAction } = useForm(submitUserRegisterData, initialRegisterData)

    return (
        <section id="register-page" className="content auth">
            <form id="register" action={formAction}>
                <div className="container">
                    <div className="brand-logo"></div>

                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...propertiesRegister('email')}
                        placeholder="Your Email"
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        {...propertiesRegister('password')}
                        id="register-password"
                        placeholder="Password"
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        {...propertiesRegister('confirmPassword')}
                        id="confirm-password"
                        placeholder="Repeat Password"
                    />

                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
        </section>
    )
}