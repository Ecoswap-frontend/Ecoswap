import { useContext } from 'react';

import { userContext } from './Components/Context.jsx';

export default function Messages() {
  const { messages, loading } = useContext(userContext);
  return (
    <section aria-labelledby="messages-title">
      <h1 id="messages-title">Messages</h1>
      {loading && <p>Loading...</p>}
      <div style={{ display: 'grid', gap: 10 }}>
        {messages.slice(0, 12).map((m) => (
          <article key={m.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
            <h2 style={{ margin: 0 }}>{m.title}</h2>
            <p style={{ margin: 0 }}>{m.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
