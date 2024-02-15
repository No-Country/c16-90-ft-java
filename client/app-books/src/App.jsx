import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BookDetail from './components/BookDetail';
import BookDetailContainer from './components/BookDetailContainer';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<BookDetailContainer/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
