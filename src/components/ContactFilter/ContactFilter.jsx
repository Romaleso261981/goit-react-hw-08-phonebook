// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getContactList } from '../../redux/contacts/operations';
// import { filterSlice } from '../../redux/contacts/slice';
import { Box, TextField } from '@mui/material';

export const ContactFilter = () => {
  // const contacts = useSelector(state => state.tasks.items);
  const filter = '';
  // const dispatch = useDispatch();
  // const [filterContactList, setFilterContactList] = useState(contacts);

  // useEffect(() => {
  //   dispatch(getContactList());
  // }, [dispatch]);

  // const contactsFilter = () => {
  //   return contacts.filter(({ name }) => {
  //     return name.toLowerCase().includes(filter.toLowerCase().trim());
  //   });
  // };

  //   useEffect(() => {
  //     setFilterContactList(contactsFilter());
  //   }, [filter]);

  // useEffect(() => {
  //   setFilterContactList(contacts);
  // }, [contacts]);

  // const handleChange = event => {
  //   const { value } = event.target;
  //   dispatch(filterSlice(value));
  // };

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
        <TextField
          sx={{
            color: 'rgb(194, 120, 118)',
            display: 'inline-block',
            width: '50%',
          }}
          id="contactFilter"
          label="Filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          fullWidth
        />
      </Box>
    </>
  );
};
export default ContactFilter;
