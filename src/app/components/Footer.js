import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footerBox}>
            <div className={styles.footerContainer}>
                <div className={styles.contactText}><b>Contact Me</b></div>
                <div className={styles.emailText}>hunter_reboul@hotmail.ca</div>
                <div className={styles.phoneText}>(587) 624-4332</div>
                <div className={styles.socialsText}><b>Socials</b></div>
                <a className={styles.linkedinText} href="https://www.linkedin.com/in/hunter-reboul/">LinkedIn</a>
                <a className={styles.githubText} href="https://github.com/Hunter-Reboul">GitHub</a>
                <div className={styles.copyrightText}>&copy; 2025 Hunter Reboul</div>
            </div>
        </div>
    );
}