import Load from '../../images/icons/load.png';
import { useLocation } from 'react-router-dom';
import { createSession } from '../../api/auth';

const Loading = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  sessionStorage.setItem('location', currentPath);
  if (currentPath == '/verifySession') {
    createSession();
  }
  return (
    <div id="loading-container">
      <img src={Load} alt="Loading" id="loading-icon"></img>
    </div>
  );
};

export default Loading;
