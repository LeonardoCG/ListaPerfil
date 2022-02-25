import Router from "next/router";

const Users = (props) => {
    
    return ( 
        <ul className="list-group">
            {
                props.clientes.map(cliente => (
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                    key={cliente.id} onClick={ e => Router.push('/clientes/:id', `/clientes/${cliente.id}`)}>
                        <div>
                            <h5>{cliente.Nombre} {cliente.last_name}</h5>
                            {/* <p>Email: {user.email}</p> */}
                        </div>
                        <img src={cliente.avatar} alt="Photo" style={{borderRadius: '50%'}}/>
                    </li>
                ))
            }
        </ul>
     );
}
 
export default Users;