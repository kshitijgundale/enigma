import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { editForm } from '../../reducers/modelFormReducer'
import { useState } from 'react'

const BasicInfo = () => {

    const modelName = useSelector(state => state.model.modelName)
    const projects = useSelector(state => state.user.projects)

    const dispatch = useDispatch()

    const [createProject, setCreateProject] = useState(true)

    return (
        <Form>
            <Form.Group>
                <Form.Label>Model Name</Form.Label>
                <Form.Control
                    type="text"
                    value={modelName}
                    onChange={({target})=>{ dispatch(editForm({field: "modelName", value: target.value})) }}
                />
            </Form.Group>
            <Form.Group
                onClick={ () => { setCreateProject(true) } }
            >
                <Form.Label>Project</Form.Label>
                <Form.Select
                    disabled={!createProject}
                >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
            <Form.Group
                onClick={ ()=> { setCreateProject(false) } }
            >
                <Form.Label>Create New Project</Form.Label>
                <Form.Control
                    disabled={createProject}
                    type="text"
                />
            </Form.Group>       
        </Form>
    )
}

export default BasicInfo