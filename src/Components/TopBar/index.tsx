import { useState } from 'react';
import styles from  './topbar.module.scss'; // Import your custom styles
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'in-play', label: 'In Play', badge: 8 },
    { key: 'cricket', label: 'Cricket', badge: 5 },
    { key: 'soccer', label: 'Soccer', badge: 2 },
    { key: 'tennis', label: 'Tennis', badge: 2 },
    { key: 'horse-racing', label: 'Horse Racing', badge: 1 },
  ];

  const handleTabClick = (key : any) => {
    setActiveTab(key);
    navigate(`/${key}`)
  };

  return (
    <div className={styles.topbar}>
      {menuItems.map(({ key, label, badge }) => (
        <div
          key={key}
          className={`${styles.topbar_item} ${activeTab === key ? styles.active : ''}`}
          onClick={() => handleTabClick(key)}
        >
          {label}
          {badge && <span className={styles.topbar_badge}>{badge}</span>}
        </div>
      ))}
    </div>
  );
};

export default TopBar;
