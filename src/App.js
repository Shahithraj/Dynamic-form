import logo from './logo.svg';
import './App.css';
import CreateField from './components/createField/CreateField';
import { useState } from 'react';
import Form from './components/form/Form';
import Modal from './components/modal/Modal';

function App() {
  const [fields, setFields] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h3>Dynamic Form Builder</h3>
      <CreateField
        fields={fields}
        setFields={setFields}
        setOpenModal={setOpenModal}
      />
      {fields.length > 0 && <Form fields={fields} setFields={setFields} />}
      {openModal && (
        <Modal
          fields={fields}
          setFields={setFields}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

export default App;
