import React from 'react';
import {CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Item from './Item/Item';
    
const Items = ({ setCurrentId }) => {
    const items = useSelector((state) => state.items);

    console.log(items);

    return (
       !items.length ? <CircularProgress /> : (
           <div class="flex flex-wrap m-4">
               {items.map((item) =>(
                   <div class="flex relative " key={item._id} >
                       <Item item={item} setCurrentId = {setCurrentId} />
                   </div>
               ))}
           </div>
       ) 
    );
};

export default Items;