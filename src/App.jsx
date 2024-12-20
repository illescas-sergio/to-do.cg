import { useEffect, useState } from 'react'
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import TaskInput from './components/TaskInput/TaskInput.jsx';
import TasksList from './components/List/TaskList.jsx';
import PendingTasksCounter from './components/PendingTasksCounter/PendingTasksCounter.jsx';
import { v4 as uuidv4 } from 'uuid';

function App() {

	const [tasks, setTasks] = useState([]);

	const [task, setTask] = useState({
		title: "",
		completed: false,
		id : ""
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if(task.title !== ""){
			
			setTasks((tasks) => {
				setTask((prev) => {
					return {
						...prev,
						id: uuidv4()
					}
				})
				return [...tasks, task]
			})
			
			setTask({
				title: "",
				completed: false,
				id: ""
			})
		}

	};

	const handleTaskInputChange = (e) => {
		setTask((prev) => {
			return {
				...prev,
				title: e.target.value,
			}
		})
	};


	const handleCompletedTask = (e) => {
		const elId = e.target.id
		
		const updatedTasks = tasks.map((el) => {
			if(el.id === elId && el.completed === false){
				return {
					title: el.title,
					completed: true,
					id: el.id
				}
			} else {
				return el
			}
		})

		setTasks(updatedTasks)
		
	}
	
  
  return (
        
		<Container className="container-fluid border mt-5 bg-light">
			{/* Titulo*/}
			<h1 className='h1 text-center mt-3'>To Do List</h1>
			{/* Input para tareas y boton agregar*/}
			<div className="d-flex flex-column align-items-center">
				
				<TaskInput task={task} handleSubmit={handleSubmit} handleChange={handleTaskInputChange}/>

				<TasksList tasks={tasks} handleCompletedTask={handleCompletedTask}/>
				
				<PendingTasksCounter tasks={tasks}/>
				
      		</div>
    	</Container>
      
    
  )
}

export default App
