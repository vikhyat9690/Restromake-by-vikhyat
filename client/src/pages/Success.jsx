
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from "react-router-dom";


function Success() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if(preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      })
    }, 1000);
    return () => clearInterval(timeoutId);
  },  [navigate]);

  return (
    <>
      <section className="notFound">
          <div className="container">
            <img src="/sandwich.png" alt="success" />
            <h1>Redirection to home in {countdown} seconds....</h1>
            <Link to={'/'}>Back Home &nbsp;&nbsp; <HiOutlineArrowNarrowRight/></Link>
          </div>
      </section>
    </>
  )
}

export default Success