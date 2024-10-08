import { Link } from "react-scroll"
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function About() {
  return (
    <>
        <div className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">
                            ABOUT US
                        </h1>
                        <p>The only this we are serious about is food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus obcaecati et quasi praesentium nesciunt assumenda eum eligendi tempore aperiam dolores unde sunt ad corrupti fugiat mollitia quas omnis qui, doloremque consequatur, veniam iusto dignissimos? Possimus error delectus illum similique?
                    </p>
                    <Link to={'/'}>Explore Menu&quot;
                    <span>
                        <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </div>
    </>
  )
}

export default About