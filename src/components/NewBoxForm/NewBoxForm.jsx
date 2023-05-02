import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_FORM_DATA = {
  height: "",
  width: "",
  color: ""
}

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    addBox({ ...formData, id: uuidv4() });
    setFormData(INITIAL_FORM_DATA);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="height">Height: </label>
        <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="width">Width: </label>
        <input type="number" id="width" name="width" value={formData.width} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="color">Color: </label>
        <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default NewBoxForm;