import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItem, updateItem } from '../../actions/items';
import FileBase from 'react-file-base64';


const Form = ({ currentId, setCurrentId }) => {
    const [itemData, setItemData] = useState({
        itemName: '', price: '', quantity: '', description: ''
    });
    const item = useSelector((state) => (currentId ? state.items.find((i) => i._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (item) setItemData(item);
    }, [item])

    const clear = () => {
        setCurrentId(0);
        setItemData({ itemName: '', price: '', quantity: '', description: '', selectedFile: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateItem(currentId, itemData));
        } else {
            dispatch(createItem(itemData));
        }
        clear();

    }

    return (

            
        <div class="bg-light-slate rounded-md object-right-top w-80 mr-5">
            <form class="flex flex-col mx-2 " autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div class="text-center text-slate mb-2" >{currentId ? 'Editing' : 'Create'} an Inventory Entry</div>
                <input class="bg-darkEuc" placeholder="Item Name" name="itemName" label="ItemName" value={itemData.itemName} onChange={(e) => setItemData({ ...itemData, itemName: e.target.value })} />
                <input class="bg-darkEuc" placeholder="Price" name="price" label="Price" value={itemData.price} onChange={(e) => setItemData({ ...itemData, price: e.target.value })} />
                <input class="bg-darkEuc" placeholder="Quantity" name="quantity" label="Quantity" value={itemData.quantity} onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })} />
                <input class="bg-darkEuc" placeHolder="Description" name="description" label="Description" value={itemData.description} onChange={(e) => setItemData({ ...itemData, description: e.target.value })} />
                <div class="bg-slate text-light-blue" ><FileBase type="file" multiple={false} onDone={({ base64 }) => setItemData({ ...itemData, selectedFile: base64 })} /></div>
                <button class="bg-slate rounded-lg text-light-blue my-1" color="primary" size="large" type="submit">submit</button>
                <button class="bg-slate rounded-lg text-light-blue my-2" size="small" type="button" onClick={clear}>Clear</button>
            </form>
        </div>
 
    );
}

export default Form;