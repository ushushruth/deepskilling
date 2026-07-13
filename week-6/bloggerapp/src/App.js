import './App.css';
import BookDetails from './Components/BookDetails';
import CourseDetails from './Components/CourseDetails';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <>
    <div className='container'>
      <div className='container1'>
        <div><BookDetails /></div>
        </div>

         <div><CourseDetails /></div>
        <div><BlogDetails /></div>
      </div>
      
    </>
  );
}

export default App;
