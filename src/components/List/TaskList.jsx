import { 
	ListGroup,
	ListGroupItem,
 } from 'reactstrap';
import NoElements from '../NoElements/NoElements';

export default function TasksList({tasks, handleCompletedTask}) {

    return (
        <div className="w-50 mb-4">
			<ListGroup>
				{tasks ? tasks.map((el) => (
                    <ListGroupItem
                        key={el.id}
                        id={el.id}
                        className={`d-flex justify-content-between align-items-center ${
                        el.completed ? 'text-decoration-line-through' : ''
                        }`}
                        onClick={(e) => handleCompletedTask(e)}
                    >
                        {el.title}
                    </ListGroupItem>
				    )) : <NoElements />
                }
                
			</ListGroup>
		</div> 
    )
}
