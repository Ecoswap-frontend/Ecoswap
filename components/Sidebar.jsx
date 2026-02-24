import React from 'react';
import { 
  LayoutDashboard, 
  List, 
  ShoppingCart, 
  MessageSquare, 
  Bell, 
  User,
  Leaf
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'listing', label: 'Listing', icon: List },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'notification', label: 'Notification', icon: Bell },
  ];

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon-small">
          <Leaf size={20} />
        </div>
        <span className="logo-text-small">EcoSwap</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-user">
        <div className="user-avatar">
          <User size={20} />
        </div>
        <div className="user-info">
          <p className="user-name">Sarah Jekins</p>
          <p className="user-status">Verified Member</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
