import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactItem } from '../../pages/ContacItem/ContacItem';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const ContactsPage = () => {
  const contacts = useSelector(state => state.tasks.items);
  return (
    <>
      <ContactForm />
      {contacts ? <Typography>No contact</Typography> : <ContactItem />}
    </>
  );
};

export default ContactsPage;
