import { Header } from './HomeView.styled';
import { ContactList } from '../ContactList/ContactList'

export function HomeView() {
  return (
    <Header>
      <h1>
        Запрошую на нашу головну сторінку.
        <br />
        щоб потрапити на свою сторінку вам потрібно зареєструватись
      </h1>
      <ContactList />
    </Header>
  );
}
