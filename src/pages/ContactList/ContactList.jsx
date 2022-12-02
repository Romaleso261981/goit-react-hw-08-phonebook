import { useSelector } from 'react-redux';
import { List } from './ContactList.style';
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { ContactListItem } from '../../pages/ContacItem/ContacItem'


export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  let data = []
  if (filteredItems !== undefined) {
    data = filteredItems
  }
  return (  
    <List>
       <ContactForm />
      {data.map(item => {
      return (
      <ContactListItem key={item.id} item={item} />
    )})}
   </List>
  );
};
export default ContactList;