import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelEdit }) => {
  return (
    <tr>
      <td>
        <input
          value={editFormData.fullName}
          onChange={handleEditFormChange}
          type="text"
          placeholder="name"
          name="fullName"
        />
      </td>
      <td>
        <input
          value={editFormData.address}
          onChange={handleEditFormChange}
          type="text"
          placeholder="address"
          name="address"
        />
      </td>
      <td>
        <input
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
          type="number"
          placeholder="phone"
          name="phoneNumber"
        />
      </td>
      <td>
        <input
          value={editFormData.email}
          onChange={handleEditFormChange}
          type="text"
          placeholder="email"
          name="email"
        />
      </td>
      <td>
        <button type="submit">save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
