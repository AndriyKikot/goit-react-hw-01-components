import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li
      className={styles.item}
      key={id}
      /*style={{ background: generateColor() }}*/
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

const StatsList = ({ stats }) => {
  if (stats.length === 0) return null;
  return <ul className={styles.statList}>{stats.map(StatsListItem)}</ul>;
};

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatsList stats={stats} />
    </section>
  );
}

// function generateColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16)
// }

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
