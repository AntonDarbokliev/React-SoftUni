import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "../../hooks/useForm.jsx";

export const AddTodoModal = ({
    show,
    onTodoAddClose,
    onTodoAddSubmit
}) => {
    const {formValues,onSubmit,onChangeHandler} = useForm({ text : ''},onTodoAddSubmit)

  return (
      <Modal show={show} animation={false}>
        <Modal.Header closeButton onClick={onTodoAddClose}>
          <Modal.Title>Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" name="text" placeholder="Clean your room"  value={formValues.text} onChange={onChangeHandler}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginRight: "10px" }} >
                        Submit
                    </Button>

                    <Button variant="secondary" onClick={onTodoAddClose}>Close</Button>
                </Form>
            </Modal.Body>
      </Modal>

  );
};
