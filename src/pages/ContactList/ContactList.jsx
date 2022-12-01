import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactItem/ContactItem'

export const ContactList = () => {
  const state = useSelector((state) => state.auth)
  console.log(state);
  const user = useSelector((state) => state.auth.user)
  console.log(user);
  const filter = useSelector(state => state.auth.contactfilter);
  const filteredItems = user.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  let data = []
  if (filteredItems !== undefined) {
    data = filteredItems
  }
  return (  
    <List>
     {data && data.map(item => {
  return (
  <ContactListItem key={item.id} item={item} />
)})}
    </List>
  );
};
export default ContactList;
