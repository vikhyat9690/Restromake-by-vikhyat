import { data } from '../restApi.json'

const Menu = () => {
  return (
    <section className="menu" id="menu">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati at rerum? Architecto dignissimos rem aliquam quam. Quam recusandae similique, iure facere, earum ad, quos repudiandae vero animi illum a. Ratione doloremque quo assumenda aspernatur minima distinctio. Quod officia id eius magni ducimus eum ipsa mollitia cumque saepe, at ipsam.
                </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map((element) => {
                        return (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Menu