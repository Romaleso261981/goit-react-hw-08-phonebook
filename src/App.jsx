import {Route} from 'react-router-dom'
import AppBar from './components/HomeView/HomeView';
import { RegisterView } from '';
import { HomeView } from '';
import { ContactListView } from './components/ContactListView/ContactListView';
import { LoginView } from './components/ContactListView/ContactListView';
import { Container } from './components/AppStyle';

export default function App() {
  return (
    <Container>
    <AppBar />
    <switch>
      < Route exact path="/" component={HomeView} />
      < Route path="/register" component={RegisterView} />
      < Route path="/register" component={LoginView} />
      < Route path="/register" component={ContactListView} />
    </switch>

  </Container>
  )
  
}
