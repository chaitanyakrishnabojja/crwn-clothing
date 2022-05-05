import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
        
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        }catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert(`Incorrect password`);
                    break;
                case 'auth/user-not-found':
                    alert(`No user associated with this email`);
                    break;
                default:
                    console.error(error);
            }
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

            <div className='buttons-container'>
                <Button type="submit">SIGN IN</Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
            </div>
               
            </form>
        </div>
    )
}

export default SignInForm;