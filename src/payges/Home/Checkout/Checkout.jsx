import { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Shayerd/AuthProbider/AuthProbider'
import Swal from 'sweetalert2'

const Checkout = () => {

    const services = useLoaderData()
    const { title, _id, price, img } = services;
    const { user } = useContext(AuthContext)

    const handleBooks = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const date = form.date.value
        const phone = form.phone.value
        const address = form.address.value
        const booking = {
            customarName: name,
            email,
            img,
            phone,
            date,
            address,
            services_id: _id,
            services: title,
            price: price
        }

        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'success',
                        'Services Bookibng Successfully.',
                        'success'
                    )
                  
                }
            })



    }

    return (
        <div>
            <h2 className="">Book Service: {title}</h2>
            <form onSubmit={handleBooks} className="card-body bg-[#F3F3F3] lg:p-24">
                <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='phone' placeholder='Your Phone Number' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name='address' placeholder='Your Address' className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">

                    </label>


                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>

    )
}



export default Checkout
