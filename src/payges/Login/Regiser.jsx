import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import Swal from "sweetalert2"
import auth from "../../components/Firebase/firebase.config"
import { Link } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import picture from '../../assets/images/login/login.svg';
const Regiser = () => {
    const [sucsece, setsuccess] = useState('')
    const [registerError, setregisterError] = useState('')
    const [showpassword, setshopassword] = useState(false)

    const handleReGister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password, name)
        setregisterError(' ')
        setsuccess(' ')
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

        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                console.log(result.user)
                const createAt = result.user?.metadata?.creationTime;

                const newuser = { email, name, createAt: createAt };

                fetch('http://localhost:5001/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newuser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User Added Successfully!',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    })

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                    .then(() => console.log('profile updated'))
                    .catch
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: (error.message),
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })



            })

    }

    return (
        <div>
            <div>
                <div className="">
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col ">
                            <div className="text-center ">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <div className=" flex lg:gap-5 ">
                                <div className="">
                                    <img src={picture} alt="" />
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                    <form onSubmit={handleReGister} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                            <span className='relative -top-8 lg:left-72 left-72 w-6' onClick={() => setshopassword(!showpassword)}>{
                                                showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }</span>
                                            <label className="label">
                                                <p className="font-medium">Already have an account <Link className="btn btn-sm btn-primary ml-5 text-white " to="/login">Login</Link></p>
                                            </label>
                                        </div>
                                        {
                                            registerError && <h2 className="text-red-600 font-bold">{registerError}</h2>
                                        }
                                        {
                                            sucsece && <h2 className="text-emerald-800 font-bold">{sucsece}</h2>
                                        }

                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regiser