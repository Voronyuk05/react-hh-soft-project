import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/home/Home';
import { Content } from './screens/content/Content';
import { Outsourcing } from './screens/outsourcing/Outsourcing';
import { Training } from './screens/training/Training';
import { Contacts } from './screens/contacts/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path='/outsourcing' element={<Outsourcing />} />
          <Route path='/training' element={<Training />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
