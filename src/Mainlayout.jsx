
import styles from './mainlayout.module.css';
import { useContext, useState } from 'react';

import { NavLink, Outlet, } from 'react-router';
import { userContext } from './Components/Context.jsx';

export default function MainLayout() {
  const { profile } = useContext(userContext);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={styles.layout}>
      <aside style={{ display: showNav ? 'block' : undefined }}>
        <div className={styles.brand}>
          <span>EcoSwap</span>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/listing" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Listing</span>
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Orders</span>
          </NavLink>
          <NavLink to="/messages" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Messages</span>
          </NavLink>
          <NavLink to="/notifications" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Notification</span>
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className={styles.sectionTitle}>Account</div>
        <div className={styles.step}>
          <span>{profile?.firstName} {profile?.lastName}</span>
        </div>
      </aside>

      <div className={styles.main}>
       
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
