import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
function Notfound() {
  return (
    
        <>
          <section className="notFound">
            <div className="container">
              <img src="/notFound.svg" alt="notFound" />
              <h1>AWWW... LOOKS LIKE YOU ARE LOST</h1>
              <p>Try to go to the home page again or search for something else</p>
              <Link to={'/'}>
              Back to Home &nbsp; &nbsp;
              <span>
                <HiOutlineArrowNarrowRight/>
              </span>
              </Link>
            </div>
          </section>
        </>
    
  )
}

export default Notfound