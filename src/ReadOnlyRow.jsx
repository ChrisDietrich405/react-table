import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteContact }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={(event) => handleEditClick(event, contact)}>Edit</button>
        <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
