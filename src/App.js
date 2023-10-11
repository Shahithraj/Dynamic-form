import logo from './logo.svg';
import './App.css';
import CreateField from './components/createField/CreateField';
import { useState } from 'react';
import Form from './components/form/Form';
import Modal from './components/modal/Modal';
import ShowData from './components/showData/ShowData';

function App() {
  const [fields, setFields] = useState([]);
  const [json, setJson] = useState({});
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h3>Dynamic Form Builder</h3>
      <CreateField
        fields={fields}
        setFields={setFields}
        setOpenModal={setOpenModal}
        json={json}
      />
      {fields.length > 0 && (
        <Form fields={fields} setFields={setFields} setJson={setJson} />
      )}
      {openModal && (
        <Modal
          fields={fields}
          setFields={setFields}
          setOpenModal={setOpenModal}
          setJson = {setJson}
        />
      )}
      {Object.keys(json).length > 0 && <ShowData json={json} />}
    </div>
  );
}

export default App;
