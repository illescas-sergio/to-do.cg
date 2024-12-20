import { 
	ListGroupItem,
 } from 'reactstrap';

export default function NoElements() {

    return (
        <div className="w-50 mb-4">
             {console.log("aaaaaaaaaaaaaaaaaaaaaaaa")}
             <ListGroupItem>
			    	No hay tareas para mostrar
			</ListGroupItem>
		</div> 
    )
}