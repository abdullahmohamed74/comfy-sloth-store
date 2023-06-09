import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../components';

function MainSharedLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}
export default MainSharedLayout;
