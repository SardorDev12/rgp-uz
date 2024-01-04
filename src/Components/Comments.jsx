import React, { useState, useEffect } from "react";

const Comments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    comment: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sardorfarhodogli.pythonanywhere.com/comments/"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://sardorfarhodogli.pythonanywhere.com/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setData([...data, result]); // Add the new comment to the existing data
        setFormData({
          name: "",
          job: "",
          comment: "",
        });
        console.log("Data posted successfully!", result);
      } else {
        console.error("Failed to post data");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Job
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
          />
        </label>

        <label>
          Comment
          <input
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data.length === 0 ? (
              <p>No comments available.</p>
            ) : (
              <ul>
                {data.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.job} - {item.comment}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
