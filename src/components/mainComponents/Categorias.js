
import { ListGroup, Badge } from 'react-bootstrap';
import './Categorias.css';
function CategoriaComponent(){

    const arrayItms = [{ href: "#link1", name: "Todos", number: 100 }, { href: "#link2", name: "Hombre", number: 4 },
{ href: "#link3", name: "Mujer", number: 12 }, { href: "#link4", name: "Hipster", number: 24 },
{ href: "#link5", name: "Metal", number: 6 }, { href: "#link6", name: "Universidad", number: 17 },
{ href: "#link7", name: "Deportiva", number: 17 }, { href: "#link3", name: "Rayas", number: 17 },
{ href: "#link8", name: "Apretada", number: 17 },]


    return(


        <ListGroup as="ol" numbered className="component-hidem">
          <h2>Categorías</h2>
        {arrayItms.map((item, index) =>
            <ListGroup.Item key={index} action href={item.href} className='d-flex justify-content-between align-items-start'>
                {item.name} <Badge pill bg="secondary">{item.number}</Badge>
            </ListGroup.Item>
        )}
    </ListGroup>

    )
}

export default CategoriaComponent;