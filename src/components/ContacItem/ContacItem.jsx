import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeContact, getContactList } from '../../redux/contacts/operations';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

export const ContactItem = () => {
  const contacts = useSelector(state => state.tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactList());
  }, [dispatch]);

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
        {contacts.length > 0 && (
          <Typography sx={{ fontSize: 28 }}>Contacts</Typography>
        )}
        <List sx={{ width: '100%' }}>
          {contacts.length > 0 &&
            contacts.map(({ name, number, id }) => (
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
