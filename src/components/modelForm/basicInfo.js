import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { editForm } from '../../reducers/modelFormReducer'

const BasicInfo = () => {

    const modelName = useSelector(state => state.model.modelName)
    const workspaces = useSelector(state => state.user.workspaces)

    const dispatch = useDispatch()

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Model Name</Form.Label>
                <Form.Control
                    type="text"
                    value={modelName}
                    onChange={({target})=>{ dispatch(editForm({field: "modelName", value: target.value})) }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Workspace</Form.Label>
                <Form.Select
                    onChange={({target})=>{ dispatch(editForm({field: "selectProject", value: target.value})) }}
                >
                    {Object.keys(workspaces).map(element => (
                        <option key={element} value={workspaces[element].name}>{workspaces[element].name}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    value={modelName}
                    onChange={({target})=>{ dispatch(editForm({field: "modelName", value: target.value})) }}
                />
            </Form.Group>               
        </Form>
    )
}

export default BasicInfo