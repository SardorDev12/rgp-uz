import { useEffect, useState } from "react";
import "../Styles/form.scss";

function Form({ title, api, plc1, plc2, plc3, name1, name2, name3 }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Yuborildi.");
        setFormData({
          name1: "",
          name2: "",
          name3: "",
        });
      } else {
        alert("Xatolik yuz berdi.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="form-title">{title}</h3>
      <div className="user-info">
        <input
          type="text"
          placeholder={plc1}
          name={name1}
          value={formData.name1}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder={plc2}
          name={name2}
          value={formData.name2}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <textarea
        name={name3}
        id="xabar"
        placeholder={plc3}
        value={formData.name3}
        onChange={handleChange}
        autoComplete="off"
      ></textarea>
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default Form;
