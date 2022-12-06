import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactItem } from '../../components/ContacItem/ContacItem';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../redux/contacts/operations';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactList());
  }, [dispatch]);

  const contacts = useSelector(state => state.tasks.items);
  return (
    <Box>
      <ContactForm />
      {contacts.length > 0 && <ContactFilter />}
      {contacts.length > 0 ? (
        <ContactItem />
      ) : (
        <Typography
          sx={{
            fontSize: 35,
            textAlign: 'center',
            color: 'blue',
          }}
        >
          No contact
        </Typography>
      )}
    </Box>
  );
};

export default ContactsPage;
