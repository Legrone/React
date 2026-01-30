import { useNavigate } from "react-router"


function Item ({ prod }) {
    const navigate = useNavigate()

    return(
        <div key={prod.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
                src={prod.url}
                alt="test"
                style={{
                    width: "300px",
                    height: "200px",
                }}/>

          </figure>
          <div className="card-body">
            <h2 className="card-title"> {prod.title}</h2>
            <p>${prod.price}</p>
            <p>{prod.description}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={() => navigate(`/item/${prod.id}`)}>Ver mas</button>
            </div>
          </div>
        </div>
    )
}

export default Item