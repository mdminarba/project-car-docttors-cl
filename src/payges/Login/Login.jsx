import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../components/Firebase/firebase.config';
import picture from '../../assets/images/login/login.svg';


const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [success, setsuccess] = useState('')
    const [registerError, setregisterError] = useState('')
    const [showpassword, setshowpassword] = useState(false)
    const emailRef = useRef(null)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        setregisterError('');
        setsuccess("");
        if (password.legnth < 6) {
            Swal.fire({
                icon: 'error',
                title: 'password shuld vbe at least 6 characters or longer',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Your password shold have at least one upper case characters',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')

                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:5001/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            Swal.fire(
                                'success',
                                'User Createt Successfully.',
                                'success'
                            )
                        }

                    })

            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: (error.message),
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            })


    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            console.log('please provaide an  email', emailRef.current.value);
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check you email')
            })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div className="">

            <div className=" bg-base-200 flex-1 ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="flex lg:flex-row flex-1  lg:gap-5">
                        <div className="">
                            <img src={picture} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                    <span className='relative -top-8  lg:left-72 left-60 md:left-72 w-6' onClick={() => setshowpassword(!showpassword)}>{
                                        showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }</span>
                                    <label className="label">

                                        <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    {
                                        registerError && <h2 className="text-red-600 font-bold">{registerError}</h2>
                                    }
                                    {
                                        success && <h2 className="text-emerald-800 font-bold">{success}</h2>
                                    }
                                    <label className="label">
                                        <p className="font-medium">Do not have an account <Link className="btn btn-sm btn-primary ml-5 text-white " to="/register">Register</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login