import { useEffect, useState } from "react";

function HomeForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://sardorfarhodogli.pythonanywhere.com/applications/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        alert("Yuborildi.");
        setFormData({
          full_name: "",
          phone_number: "",
          message: "",
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
      <h3 className="form-title">Hoziroq bizga buyurtma bering!</h3>
      <div className="user-info">
        <input
          type="text"
          placeholder="Ism"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Raqam"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="message"
        id="xabar"
        placeholder="Xabar"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default HomeForm;
