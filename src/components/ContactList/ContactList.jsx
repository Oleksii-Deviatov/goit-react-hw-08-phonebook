import Conact from '../Contact';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

function ContactList({ contacts }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <Conact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
