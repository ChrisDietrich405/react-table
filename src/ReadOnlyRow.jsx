import React from "react";

function ReadOnlyRow({ contact, handleEditClick, handleDelete }) {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={(e) => handleEditClick(e, contact.id)}>edit</button>
        <button onClick={(e) => handleDelete(contact.id)}>delete</button>
      </td>
    </tr>
  );
}

export default ReadOnlyRow;

// import React from "react";

// const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteContact }) => {
//   return (
//     <tr>
//       <td>{contact.fullName}</td>
//       <td>{contact.address}</td>
//       <td>{contact.phoneNumber}</td>
//       <td>{contact.email}</td>
//       <td>
//         <button onClick={(event) => handleEditClick(event, contact)}>Edit</button>
//         <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
//       </td>
//     </tr>
//   );
// };

// export default ReadOnlyRow;
