import PropTypes from 'prop-types';


function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
                < li className="item" key={friend.id}>
                    <span className="status">{friend.isOnline}</span>
                    <img className="avatar" src={friend.avatar} alt="{name}" width="48" />
                    <p className="name">{friend.name}</p>
                </li >
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendList;