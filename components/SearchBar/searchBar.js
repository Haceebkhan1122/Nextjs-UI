import React from 'react';
import styles from './searchBar.module.scss';

const SearchBar = () => {
    return (
        <div className={styles.searchArea}>
            <h2 className={styles.heading}>Find your Dream Job, <span>  Albert! </span></h2>
            <p className={styles.desc}>Explore the latest job openings and apply for the best opportunities available today!</p>
            <div className={styles.searchForm}>
                <input type="text" placeholder="Job Title, Company, or Keywords" />
                <select>
                    <option>Select Location</option>
                </select>
                <select className={styles.noBorder}>
                    <option>Job Type</option>
                </select>
                <button> <span className={styles.search_ico}>  </span> Search</button>
            </div>
            <div className={styles.filters}>
                <span>Similar:</span>
                <button>Frontend</button>
                <button>Backend</button>
                <button>Graphic Designer</button>
            </div>
        </div>
    );
};

export default SearchBar;
