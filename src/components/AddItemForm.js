import React from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';

function AddItemForm({onItemCreate}) {
    const [newItem, setNewItem] = React.useState("");
    const onChange = (event) => {
        setNewItem(event.target.value);
    };

    const onCreate = (event) => {
        event.preventDefault();
        //send a post request to the API and add the new item to the item list.
        onItemCreate(newItem)
        setNewItem("");

    }

  return (
    <Form onSubmit ={onCreate}>
        <InputGroup>
        <FormControl value={newItem} onChange={onChange} type="text" placeholder="New Item"></FormControl>
        <Button type="submit" variant="primary" disabled={!newItem.length}>Add</Button>
        </InputGroup>
    </Form>
  )
}

export default AddItemForm
