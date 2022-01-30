import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Items from './components/Items/Items';
import Form from './components/Form/Form';
import { getItems } from './actions/items';



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [currentId, dispatch]);
console.log(Items);
  return (
    <main class="bg-slate h-screen text-slate">
      <div>
        <h1 class="text-center bg-gray-400 text-slate text-2xl mb-5">Inventory Manager</h1>
      </div>
          <div class="grid grid-cols-3 content">
            <div class="col-span-2">
              <Items setCurrentId={setCurrentId} />
            </div>
            <div class="col-span-auto content-end">
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
    </main>
  );
};

export default App;