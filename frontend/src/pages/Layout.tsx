import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import NotFoundProvider from '../hoc/NotFoundProvider';

function Layout() {
  return (
    <div>
      <NotFoundProvider>
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </NotFoundProvider>
    </div>
  );
}

export default Layout;
