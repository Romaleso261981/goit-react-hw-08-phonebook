import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactItem } from '../../components/ContacItem/ContacItem';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import { getContactList } from '../../redux/contacts/contactsOperations';
import { selectFilterdContacts, selectContacts } from '../../redux/selectors';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactList());
  }, [dispatch]);

  const filterdContacts = useSelector(selectFilterdContacts);
  const contacts = useSelector(selectContacts);
  return (
    <Box>
      <ContactForm />
      {contacts.length > 0 && <ContactFilter />}
      {filterdContacts.length > 0 ? (
        <ContactItem />
      ) : (
        <Typography
          sx={{
            fontSize: 45,
            textAlign: 'center',
          }}
        >
          there is no contact in your phone book
        </Typography>
      )}
    </Box>
  );
};

export default ContactsPage;
