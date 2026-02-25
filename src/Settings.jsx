import { useContext } from 'react';

import { userContext } from './Components/Context.jsx';

export default function Settings() {
  const { profile } = useContext(userContext);
  return (
    <section aria-labelledby="settings-title">
      <h1 id="settings-title">Profile</h1>
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
          <div>Name</div>
          <strong>{profile ? `${profile.firstName} ${profile.lastName}` : 'Guest'}</strong>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
          <div>Email</div>
          <strong>{profile?.email || 'user@example.com'}</strong>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
          <button>Edit Profile</button>
        </div>
      </div>
    </section>
  );
}
