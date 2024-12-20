import { 
	Input,
	Button,
    Form
 } from 'reactstrap';



export default function TaskInput({task, handleSubmit, handleChange}){

    return (
        <Form className="d-flex mb-4 w-50" onSubmit={(e)=>handleSubmit(e)}>
            <Input
                type="text"
                placeholder="Escriba una tarea"
                value={task.title}
                onChange={handleChange}
            />
            <Button color="primary" type='submit'>
                Agregar
            </Button>
        </Form>
    )
}

