import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import { SpanName, SpanNumber, ContactBtn, ContactItem } from './ContactItem.styled';

export const ContactListItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <SpanName>{name}</SpanName>
      <SpanNumber>{number}</SpanNumber>
      <ContactBtn type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </ContactBtn>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
};
