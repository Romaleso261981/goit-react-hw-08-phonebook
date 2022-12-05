import { ContactForm } from '../ContactForm/ContactForm';
import { ContactItem } from '../ContacItem/ContacItem';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const ContactsPage = () => {
  const contacts = useSelector(state => state.tasks.items);
  return (
    <Box
      sx={{
        '& > :not(style)': { mb: 2, width: '100%' },
        margin: '20px auto',
        borderRadius: 2,
        boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <ContactForm />
      {contacts > 0 ? (
        <Typography sx={{ fontSize: 35 }}>No contact</Typography>
      ) : (
        <ContactItem />
      )}
    </Box>
  );
};

export default ContactsPage;
