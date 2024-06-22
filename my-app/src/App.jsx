import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import MyChild from './MyChild';
import AppHome from './AppHome';
import UseEffect from './UseEffect';
import FetchData from './FetchData';
import DataReturn from './DataReturn'
import Showimg from './Showimg';
import useCustomHook from './useCustomHook';
import ShowCustomData from './ShowCustomData';

export default function App() {
  const [name, setName] = useState("No its easy");
  const dynamic = () => setName("Advanced");
  const Parentdata = "I am your parent"
  const DataPassing = (pera) => {
    console.log(pera)
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-3">This is {name}</h1>
      <button className="btn btn-primary mb-3" onClick={dynamic}>Click</button>
      <Form />
      <MyChild Title={Parentdata} OnMethod={DataPassing} />
      <AppHome />
      <UseEffect />
      <FetchData />
      <DataReturn />
      <Showimg />
      <useCustomHook />
      <ShowCustomData/>
    </div>
  );
}
