import { useSelector } from 'react-redux';
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { ContactListItem } from '../../pages/ContacItem/ContacItem'
import { Container } from '@mui/material';


export const ContactList = () => {
  const i = useSelector(state => state.tasks.items);
  console.log(i);
  const items = useSelector(state => state.tasks.items);
  const filter = useSelector(state => state.tasks.filter);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  let data = []
  if (filteredItems !== undefined) {
    data = filteredItems
  }
  return (  
    <Container maxWidth="lg">
       <ContactForm />
      {data.map(item => {
      return (
      <ContactListItem key={item.id} item={item} />
    )})}
    </Container>
  );
};
export default ContactList;