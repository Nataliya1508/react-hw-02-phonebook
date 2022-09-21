import { React } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
// import {ContactItem} from './ContactItem/ContactItem';

 export const ContactList = ({ contacts, onRemove, children }) => {
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.length === 0 ? false : (
          <>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button
                    onClick={() => {
                      onRemove(contact.id);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
}