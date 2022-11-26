import { useSelector } from 'react-redux';
import { List } from './ContactListView.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem'
import { getItems } from "../../redux/tasksSlice";
import { getFilter } from "../../redux/tasksSlice";

export const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  let data = []
  if (filteredItems !== undefined) {
    data = filteredItems
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
