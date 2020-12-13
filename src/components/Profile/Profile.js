import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultProfileImage from './defaultProfileImage.png';

import Stats from './Stats';

function Profile({
  name = 'NoName',
  tag,
  location = 'Citizen of the world',
  avatar = defaultProfileImage,
  stats,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.bgTop}></div>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <Stats {...stats} />
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
