import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsOperations';
import { selectFilterdContacts } from '../../redux/selectors';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

export const ContactItem = () => {
  const dispatch = useDispatch();

  const filtrContacts = useSelector(selectFilterdContacts);

  const handleDeleteBtn = event => {
    const currentId = event.currentTarget.id;
    dispatch(removeContact(currentId));
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 600,
          margin: '20px auto',
          borderRadius: 2,
          boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {filtrContacts.length > 0 && (
          <Typography sx={{ fontSize: 28 }}>Contacts</Typography>
        )}
        <List sx={{ width: '100%' }}>
          {filtrContacts.length > 0 &&
            filtrContacts.map(({ name, number, id }) => (
              <ListItem
                key={id}
                disableGutters
                secondaryAction={
                  <IconButton
                    aria-label="comment"
                    id={id}
                    onClick={handleDeleteBtn}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`${name}:`} secondary={number} />
              </ListItem>
            ))}
        </List>
      </Box>
    </>
  );
};
export default ContactItem;
