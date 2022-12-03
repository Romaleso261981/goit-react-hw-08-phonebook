import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import { ListItem } from '@mui/material';
// import { ButtonBase } from '@mui/material';
import { Button } from '@mui/material';
import { SpanName, SpanNumber } from './ContactItem.styled';

export const ContactListItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <ListItem align="center" size="medium">
      <SpanName>{name}</SpanName>
      <SpanNumber>{number}</SpanNumber>
      <Button size='large' color='error' type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </Button>
    </ListItem>
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
