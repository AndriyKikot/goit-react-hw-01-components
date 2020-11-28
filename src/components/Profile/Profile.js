import PropTypes from 'prop-types';
import defaultProfileImage from './defaultProfileImage.png';

function Profile({
    name = 'NoName',
    tag,
    location = 'Citizen of the world',
    avatar = defaultProfileImage,
    stats }) {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};

export default Profile;