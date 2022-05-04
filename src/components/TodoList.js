import React, {useState, useEffect} from "react";
import axios from "axios";
import AddItemForm from "./AddItemForm"
import Item from "./Item";


const BASE_URL = "http://localhost:3001/api/items"
function TodoList() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        axios
        .get(BASE_URL)
        .then((res) => {
            console.log(res)
            setItems(res.data.data)
        });
    }, []);


    const onItemCreate = async (newItem) => {
        //Send POST request
        const response = await axios.post(BASE_URL, { name: newItem });
        //console.log(response);
        //UPDATE my front-end
        setItems([...items, { name: newItem, completed: false, _id: response.data._id }]);
    };

    // const onItemEdit = async (event, id) => {
    //     const itemDiv = document.getElementById(id);
    //     const updatedItem = itemDiv.textContent;
    //     //Send UPDATE request
    //     const response = await axios.put(`${BASE_URL}/${id}`, { name: updatedItem });
    //     console.log(response);
    //     //UPDATE my front-end
    //     const updatedItems = items.map()
    //     setItems([...items, { name: newItem, completed: false, _id: response.data.id }])
    // }

    // const initiateItemEdit = (id) => {
    //     const itemDiv = document.getElementById(id);
    //     itemDiv.setAttribute("contenteditable", true)
    // }


    if (items === null) return <div>loading</div>

  return (
    <div>
        <AddItemForm onItemCreate={onItemCreate}/>
        {items.map((item) => (
        <div key={item._id}>
            <Item item={item} />
            {/* <div id={item._id}>{item.name}</div> */}
            {/* <button onClick={()}>Edit</button>
            <button>delete</button> */}
        </div>
    ))}
    </div>
  )
}

export default TodoList