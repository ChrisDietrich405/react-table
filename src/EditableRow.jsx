import React from "react";

const EditableRow = ({ editFormData, handleEditChange, handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input
          value={editFormData.fullName}
          onChange={handleEditChange}
          type="text"
          name="fullName"
          placeholder="name"
        />
      </td>
      <td>
        <input
          value={editFormData.address}
          onChange={handleEditChange}
          type="text"
          name="address"
          placeholder="address"
        />
      </td>
      <td>
        <input
          value={editFormData.phoneNumber}
          onChange={handleEditChange}
          type="text"
          name="phoneNumber"
          placeholder="phoneNumber"
        />
      </td>
      <td>
        <input
          value={editFormData.email}
          onChange={handleEditChange}
          type="text"
          name="email"
          placeholder="email"
        />
      </td>
      <td>
        <button type="submit">save</button>
        <button onClick={handleCancelClick}>cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;

// import React from "react";

// const EditableRow = ({ editFormData, handleEditFormChange, handleCancelEdit }) => {
//   return (
//     <tr>
//       <td>
//         <input
//           value={editFormData.fullName}
//           onChange={handleEditFormChange}
//           type="text"
//           placeholder="name"
//           name="fullName"
//         />
//       </td>
//       <td>
//         <input
//           value={editFormData.address}
//           onChange={handleEditFormChange}
//           type="text"
//           placeholder="address"
//           name="address"
//         />
//       </td>
//       <td>
//         <input
//           value={editFormData.phoneNumber}
//           onChange={handleEditFormChange}
//           type="number"
//           placeholder="phone"
//           name="phoneNumber"
//         />
//       </td>
//       <td>
//         <input
//           value={editFormData.email}
//           onChange={handleEditFormChange}
//           type="text"
//           placeholder="email"
//           name="email"
//         />
//       </td>
//       <td>
//         <button type="submit">save</button>
//         <button onClick={handleCancelEdit}>Cancel</button>
//       </td>
//     </tr>
//   );
// };

// export default EditableRow;
