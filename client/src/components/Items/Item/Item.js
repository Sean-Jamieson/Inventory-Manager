import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from  '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';


import { deleteItem} from "../../../actions/items";
    
    const Item = ({ item, setCurrentId }) => {
        const dispatch = useDispatch();
    return (
        <div class="grid grid-col-2 mr-4 mb-4 text-slate bg-light-slate w-56 h-76">
            <img class="max-h-16 mt-5 mb-4 mx-auto" alt="selected File" src={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={item.title} />
            <div class="mx-2" >
                <p>Name: {item.itemName}</p>
            </div>
            <div class="mx-2">
                <p> Price: ${item.price}</p>
            </div>
            <div class="mx-2">
                <p>Quantity: {item.quantity}</p>
            </div>
            <div class="mx-2 mb-2">
                <p>Description: {item.description}</p>
            </div>
           
            <div>
                <button class="ml-6 mr-3 bg-slate mb-1 rounded-md text-light-blue w-20 h-6" size="small" onClick={() => setCurrentId(item._id)}>
                    <MoreHorizIcon fontSize="default" />
                    Update 
                </button>
                <button class="mr-2 bg-slate mb-1 rounded-md text-light-blue w-20 h-6"  size='small' color='primary' onClick={() => dispatch(deleteItem(item._id))}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Item;