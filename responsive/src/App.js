import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home  from './pages/home/Home';
import Subject from './pages/subjects/Subject';
import Navbar from './components/Nav';
import ContentContainer from './components/ContentContainer';
import ContentContainer1 from './components/ContentContainer1';
import ContentContainer2 from './components/ContentContainer2';
import "@fontsource/gabarito";
import SubjectTwo from './components/SubjectTwo';

function App() {
  return (
    <section className='font-gabarito min-h-screen bg-black'>
        <Router>
          <Navbar />
          <div style={{height: "calc(100vh - 80px)"}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/subjects' element={<Subject />} />
              <Route path='/subjects2.0' element={<SubjectTwo />} />
              <Route path='/content/*' element={<ContentContainer />} />
              <Route path='/content/science/*' element={<ContentContainer1 />} />
              <Route path='/content/activities/*' element={<ContentContainer2 />} />
            </Routes>
          </div>
        </Router>
    </section>
  );
}

export default App;
