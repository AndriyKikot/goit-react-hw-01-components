import FriendListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  if (friends.length === 0) return null;
  return <ul className={styles.listItem}>{friends.map(FriendListItem)}</ul>;
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
