import { useContext } from 'react';


import styles from "./listing/listing.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { userContext } from './Components/Context.jsx';

export default function Dashboard() {
  const { dashboardData, loading } = useContext(userContext);
  return (
    <section aria-labelledby="dashboard-title" className={styles.dashboardd}>
      <header className={styles.dashHeader}>
        <div>
          <h1 id="dashboard-title">Dashboard</h1>
          <p>Welcome back sarah, here is what is happening </p>
          <p>today</p>
        </div>

        <div className={styles.addbtn}>
          <button>Add New Listing</button>
          <IoSettingsOutline size="30"/>
        </div>
      </header>

      {loading && <p>Loading...</p>}
      <div style={{ display: "grid", gap: 12 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 12,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <div>Annual Sales</div>
            <strong>$120,000</strong>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <div>Total Revenue</div>
            <strong>$18,200</strong>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <div>Pending Orders</div>
            <strong>24</strong>
          </div>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              padding: 14,
            }}
          >
            <div>New Buyers</div>
            <strong>68</strong>
          </div>
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 10,
            padding: 14,
          }}
        >
          <h2 style={{ margin: 0 }}>Recent Listing</h2>
          <div style={{ display: "grid", gap: 8 }}>
            {dashboardData.slice(0, 8).map((p) => (
              <div
                key={p.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 80px 80px",
                  gap: 8,
                }}
              >
                <div>{p.title}</div>
                <div>{p.category}</div>
                <div>${p.price}</div>
                <div>{p.stock}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
