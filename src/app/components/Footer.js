import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footerBox}>
            <div className={styles.footerContainer}>
                <p className={styles.contactText}><b>Contact Me</b></p>
                <p className={styles.emailText}>hunter_reboul@hotmail.ca</p>
                <p className={styles.phoneText}>(587) 624-4332</p>
                <p className={styles.socialsText}><b>Socials</b></p>
                <a className={styles.linkedinText} href="https://www.linkedin.com/in/hunter-reboul/">LinkedIn</a>
                <a className={styles.githubText} href="https://github.com/Hunter-Reboul">GitHub</a>
                <p className={styles.copyrightText}>&copy; 2025 Hunter Reboul</p>
            </div>
        </div>
    );
}