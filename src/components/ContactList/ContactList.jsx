import { DelButton, Item } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <DelButton type="button" id={contact.id} onClick={deleteContact}>
            Delete
          </DelButton>
        </Item>
      ))}
    </ul>
  );
};
