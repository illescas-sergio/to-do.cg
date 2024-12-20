export default function PendingTasksCounter({tasks}){

    const pendingTasks = tasks.filter(el => el.completed === false)

    return (
        <div className='mt-2'>
			 {pendingTasks.length === 0 ? <h5>No hay tareas pendientes!</h5> : <h5>Tareas pendientes: {pendingTasks.length}</h5>}
		</div>
    )

}