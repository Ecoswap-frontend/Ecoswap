import { useContext } from 'react';

import { userContext } from './Components/Context.jsx';

export default function Orders() {
  const { orders, loading } = useContext(userContext);
  return (
    <section aria-labelledby="orders-title">
      <h1 id="orders-title">Orders</h1>
      {loading && <p>Loading...</p>}
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 120px', gap: 8, fontWeight: 600 }}>
          <div>ID</div>
          <div>Products</div>
          <div>Total</div>
        </div>
        {orders.slice(0, 8).map((o) => (
          <div key={o.id} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 120px', gap: 8 }}>
            <div>{o.id}</div>
            <div>{o.products?.map((p) => p.title).join(', ')}</div>
            <div>${o.total}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
