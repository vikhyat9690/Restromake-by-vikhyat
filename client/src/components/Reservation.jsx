/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    

    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4100/api/v1/reservation/send",
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            )
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setDate("");
            setTime("");

            navigate('/success');
        } catch (error) {
            toast.error(error.message || "An error occurred");
            navigate('/notfound');
            
        }
    }
    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form>
                            <div>
                                <input type="text"
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input type="text"
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input type="date"
                                    placeholder='Date'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />

                                <input type="time"
                                    placeholder='Time'
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div>
                            <input type="email"
                                    placeholder='Email'
                                    className='email_tag'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                            <input type="number"
                                    placeholder='Phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <button type="submit"
                            onClick={handleReservation}>
                                RESERVE NOW &nbsp;
                                <span>
                                    < HiOutlineArrowNarrowRight/>
                                </span>
                            </button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservation