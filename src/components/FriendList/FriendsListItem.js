import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  const statusBgStyle = isOnline ? 'green' : 'red';
  return (
    <li className={styles.item} key={id}>
      <div className={styles.wrapImg}>
        <img className={styles.avatar} src={avatar} alt={name} width="60" />
        <div
          className={styles.ring}
          style={{
            background: statusBgStyle,
            opacity: 0.2,
          }}
        ></div>
        <div className={styles.ringOuter}></div>
      </div>
      <div className={styles.wrapText}>
        <span
          className={styles.status}
          style={{ background: statusBgStyle }}
        ></span>
        <p className={styles.name}>{name}</p>
      </div>
    </li>
  );
};

export default FriendsListItem;
