import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/contacts/operations';
import {
  SpanName,
  SpanNumber,
  ContactItem,
  ContactBtn,
} from './ContactItem.styled';

export const ContactListItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem align="center" size="medium">
      <SpanName>{name}</SpanName>
      <SpanNumber>{number}</SpanNumber>
      <ContactBtn
        size="large"
        color="error"
        type="button"
        onClick={() => dispatch(deleteTask(id))}
      >
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
