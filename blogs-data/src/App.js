
import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const { fetchBlogPost } = useContext(AppContext)

  useEffect(() => {
    fetchBlogPost();
  }, []);


  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-y-1'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
