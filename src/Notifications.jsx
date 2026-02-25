import { useContext } from 'react';

import { userContext } from './Components/Context.jsx';

export default function Notifications() {
  const { notifications, loading } = useContext(userContext);
  return (
    <section aria-labelledby="notifications-title">
      <h1 id="notifications-title">Notification</h1>
      {loading && <p>Loading...</p>}
      <div style={{ display: 'grid', gap: 10 }}>
        {notifications.slice(0, 10).map((n) => (
          <article key={n.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
            <h2 style={{ margin: 0 }}>{n.user ? `User ${n.user.id}` : 'System'}</h2>
            <p style={{ margin: 0 }}>{n.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
