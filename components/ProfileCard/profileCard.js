import React from 'react';
import styles from './profileCard.module.scss';
import Image from 'next/image';
import CoverPic from '/public/assets/images/cover_pic.png';
import profPic from '/public/assets/images/prof_side.png';

const ProfileCard = () => {
    return (
        <div className={styles.cardsSide}>
            <div className={styles.topCard}>
                <div className={styles.coverPicture}>
                    <Image src={CoverPic} width={346} height={100} alt='cover_pic' />
                    <Image src={profPic} width={86} height={86} alt='cover_pic' className={styles.profile_pic_side} />
                </div>
                <div className={styles.infoBottom}>
                    <h3 className={styles.name}>Albert Flores</h3>
                    <p className={styles.title}>
                        Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer
                    </p>
                    <p className={styles.location}>Clinton, Maryland</p>
                </div>
            </div>
            <div className={styles.profile_bottom_card}>
                <div className={styles.single_stat}>
                    <h5> Profile Visitors </h5>
                    <span> 140 </span>
                </div>
                <div className={styles.single_stat}>
                    <h5> Resume Viewers </h5>
                    <span> 20 </span>
                </div>
                <div className={styles.single_stat}>
                    <h5> My Jobs </h5>
                    <span> 88 </span>
                </div>
            </div>
            <div className={styles.single_card_calender}>
                <div className={styles.left}>
                    <h3> My calendar  </h3>
                    <p> Upcoming Interviews </p>
                </div>
                <span className={styles.dropIcon}>  </span>
            </div>
            {/* <div className={styles.stats}>
                <p>Profile Visitors <span>140</span></p>
                <p>Resume Viewers <span>20</span></p>
                <p>My Jobs <span>88</span></p>
            </div>
            <div className={styles.calendar}>
                <h4>My Calendar</h4>
                <p>Upcoming Interviews</p>
            </div> */}
        </div>
    );
};

export default ProfileCard;
