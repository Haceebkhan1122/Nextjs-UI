import React from 'react';
import styles from './featuredJobs.module.scss';
import JobCard from '../JobCard/jobCard';

const FeaturedJobs = () => {
    const jobs = [
        { promoted: true, title: 'UI/UX Designer', location: 'Seattle, USA (Remote)', date: '1 day ago', applicants: '22' },
        { promoted: true, title: 'UI/UX Designer', location: 'Seattle, USA (Remote)', date: '1 day ago', applicants: '22' },
        { promoted: true, title: 'UI/UX Designer', location: 'Seattle, USA (Remote)', date: '1 day ago', applicants: '22' },
        { promoted: true, title: 'UI/UX Designer', location: 'Seattle, USA (Remote)', date: '1 day ago', applicants: '22' },
        { promoted: true, title: 'UI/UX Designer', location: 'Seattle, USA (Remote)', date: '1 day ago', applicants: '22' },
    ];

    return (
        <div className={styles.jobs}>
            <h3>Featured Jobs <a> See Featured Jobs </a>  </h3>
            <div className={styles.jobList}>
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedJobs;
