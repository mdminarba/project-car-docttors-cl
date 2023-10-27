import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Shayerd/AuthProbider/AuthProbider'
import BookingCard from './BookingCard';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setbookings] = useState([]);
    console.log(user.email)

    useEffect(() => {
        const url = (`http://localhost:5000/bookings?email=${user?.email}`);
        fetch(url)
            .then(res => res.json())
            .then(data => setbookings(data))
    }, [user?.email])
    console.log(bookings)


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = bookings.filter(bookings => bookings._id !== id)
                            setbookings(remaining)
                        }
                    })

            }
        })

    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
            ,body:JSON.stringify({status:'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'success',
                        'Your file has been updated.',
                        'success'
                    )
                    const remaining = bookings.filter(bookings => bookings._id !== id)
                    const update= bookings.find(bookings => bookings._id === id);
                    update.status='confirm'
                    const newBoking =[update, ...remaining]
                    setbookings(newBoking)

                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>IMAGE</th>
                        <th>SERVICES</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NUMBER</th>
                        <th>DATE</th>
                        <th>PRICE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, idx) =>
                            <BookingCard key={idx}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                bookin={booking}
                            ></BookingCard>)
                    }

                </tbody>

            </table>
        </div>













    )
}

export default Bookings
