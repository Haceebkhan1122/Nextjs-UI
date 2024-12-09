import React from 'react';
import styles from './jobCard.module.scss';
import Image from 'next/image';
import Logo from '/public/assets/images/logoTeam.png';

const JobCard = ({ promoted, title, location, date, applicants }) => {
    return (
        <div className={styles.card}>
            {promoted && <span className={styles.promoted}>Promoted</span>}
            <div className={styles.infoLog}>
                <Image src={Logo} width={40} height={40} alt='logo' />
                <div className={styles.infoLogRight}>
                    <h5>{title}</h5>
                    <span> Teams </span>
                </div>

            </div>
            <p className={styles.wrape}> <span className={styles.locationSvg}></span> {location}</p>
            <p className={styles.wrape}> <span className={styles.timeSvg}></span> {date} | <span className={styles.clrTxt}> {applicants} applicants </span> </p>
            <div className={styles.wrapeBtnSv} >
                <button className={styles.button}>Apply Now</button>
                <span className={styles.svgIco}>  </span>
            </div>
        </div>
    );
};

export default JobCard;
