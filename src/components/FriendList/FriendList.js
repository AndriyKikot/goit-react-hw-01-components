import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.listItem}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <div className={styles.wrapImg}>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="{name}"
              width="60"
            />
            <div
              className={styles.ring}
              style={{
                background: friend.isOnline ? 'green' : 'red',
                opacity: 0.2,
              }}
            ></div>
            <div className={styles.ringOuter}></div>
          </div>
          <div className={styles.wrapText}>
            <span
              className={styles.status}
              style={{ background: friend.isOnline ? 'green' : 'red' }}
            ></span>
            <p className={styles.name}>{friend.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
