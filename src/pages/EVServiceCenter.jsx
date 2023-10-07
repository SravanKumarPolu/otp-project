import React, { useState } from "react";

export default function EVServiceCenter() {
  const [formData, setFormData] = useState({
    companyServiceCenter: false,
    privateWorkshop: false,
    evSpares: false,
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, type, checked } = event.target;

    // For checkboxes, update formData differently
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked, // Update with the checkbox value
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any action with the form data here
    console.log(formData);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center align-items-center">
      <div className="column">
        <h3 className="text-center bg-warning m-2 p-2 text-white border rounded">
          EV Service Center
        </h3>
        <form onSubmit={handleSubmit}>
          {/* ... other form inputs ... */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="companyServiceCenter"
              name="companyServiceCenter"
              checked={formData.companyServiceCenter}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="companyServiceCenter">
              EVServieceCenter
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privateWorkshop"
              name="privateWorkshop"
              checked={formData.privateWorkshop}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="privateWorkshop">
              Private Workshop
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="evSpares"
              name="evSpares"
              checked={formData.evSpares}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="evSpares">
              EV Spares
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
