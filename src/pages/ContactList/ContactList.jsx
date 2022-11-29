import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactItem/ContactItem'
import { getItems } from "../../redux/contacts/selectors";
import { getFilter } from "../../redux/contacts/selectors";

export const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  let data = []
  if (filteredItems !== undefined) {
    data = filteredItems
    console.log(data);
  }
  return (  
    <List>
     {data.map(item => {
  return (
  <ContactListItem key={item.id} item={item} />
)})}
    </List>
  );
};
export default ContactList;


