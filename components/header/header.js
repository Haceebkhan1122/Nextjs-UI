import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import styles from './header.module.css';
import LogoFind from '/public/assets/images/logo_find.svg';
import Image from 'next/image';
import Head from 'next/head';

const Header = () => {
    return (
        <>
            <Head>
                <link href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro" rel="stylesheet" />
            </Head>
            <Navbar bg="light" expand="lg" className={`border-bottom px-4 ${styles.navbar}`}>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <Image
                        width={41}
                        height={38}
                        src={LogoFind}
                        alt="Logo"
                        className={styles.logo}
                    />
                    <span className={styles.brandText}>Find Jobs</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#find-jobs" className={styles.navLink}>
                            Find Jobs
                        </Nav.Link>
                        <Nav.Link href="#top-companies" className={styles.navLink}>
                            Top Companies
                        </Nav.Link>
                        <Nav.Link href="#job-tracker" className={styles.navLink}>
                            Job Tracker
                        </Nav.Link>
                        <Nav.Link href="#my-calendar" className={styles.navLink}>
                            My Calendar
                        </Nav.Link>
                        <Nav.Link href="#documents" className={styles.navLink}>
                            Documents
                        </Nav.Link>
                        <Nav.Link href="#messages" className={styles.navLink}>
                            Messages
                        </Nav.Link>
                        <Nav.Link href="#notifications" className={styles.navLink}>
                            Notifications
                        </Nav.Link>
                    </Nav>
                    <Form className={`${styles.form_header} d-flex`}>
                        <div className={styles.search_bar_wraper}>
                            <span className={styles.search_ico}>  </span>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className={`${styles.searchInput}`}
                                aria-label="Search"
                            />
                        </div>
                    </Form>
                    <Button variant="primary" className={`ms-3 ${styles.resumeButton}`}>
                        Resume Builder
                    </Button>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Replace with your profile image URL
                        alt="Profile"
                        className={`rounded-circle ms-3 ${styles.profileImage}`}
                    />
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};


export default Header;
