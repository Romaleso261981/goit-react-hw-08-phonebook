import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getContactList, removeContact } from '../../redux/contacts/operations';
import { filterSlice } from '../../redux/contacts/slice';
import { Box, TextField } from '@mui/material';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = () => {
  const contacts = useSelector(state => state.tasks.items);
  const filter = useSelector(state => state.tasks.filter);
  const dispatch = useDispatch();
  const [filterContactList, setFilterContactList] = useState(contacts);

  useEffect(() => {
    dispatch(getContactList());
  }, [dispatch]);

  const contactsFilter = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  useEffect(() => {
    setFilterContactList(contactsFilter());
  }, [filter]);

  useEffect(() => {
    setFilterContactList(contacts);
  }, [contacts]);

  const handleDeleteBtn = event => {
    const currentId = event.currentTarget.id;
    dispatch(removeContact(currentId));
  };

  const handleChange = event => {
    const { value } = event.target;
    dispatch(filterSlice(value));
  };

  return (
    <>
      <Box
        sx={{
          '& > :not(style)': { mb: 2, width: '100%' },
          maxWidth: 400,
          minHeight: 150,
          margin: '20px auto',
          borderRadius: 2,
          boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Typography sx={{ fontSize: 28 }}>Contacts</Typography>
        <TextField
          sx={{
            color: 'rgb(194, 120, 118)',
            display: 'inline-block',
            width: '50%',
          }}
          id="contactFilter"
          label="Filter"
          value={filter}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          fullWidth
        />
        <List sx={{ width: '100%', maxWidth: 360 }}>
          {filterContactList &&
            filterContactList.map(({ name, number, id }) => (
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
