import React, { useState, Fragment } from "react";
import data from "./mock_data.json";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setEditContactId(null);
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId)
    setContacts(updatedContacts)
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      handleCancelEdit={handleCancelEdit}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      handleDeleteContact={handleDeleteContact}
                      handleEditClick={handleEditClick}
                      contact={contact}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
      <h2>add a contact</h2>

      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleFormChange}
        />
        <input
          onChange={handleFormChange}
          type="text"
          name="address"
          required="required"
          placeholder="address"
        />
        <input
          onChange={handleFormChange}
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="phone"
        />
        <input
          onChange={handleFormChange}
          type="text"
          name="email"
          required="required"
          placeholder="email"
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default App;
