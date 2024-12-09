import React from 'react';
import styles from './jobCard.module.css';

const JobCard = ({ promoted, title, location, date, applicants }) => {
    return (
        <div className={styles.card}>
            {promoted && <span className={styles.promoted}>Promoted</span>}
            <h5>{title}</h5>
            <p>{location}</p>
            <p>{date} | {applicants} applicants</p>
            <button className={styles.button}>Apply Now</button>
        </div>
    );
};

export default JobCard;
