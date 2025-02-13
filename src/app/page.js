import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Hunter Reboul - Software Engineer</h1>
            <div className={styles.introContainer}>
                <p className={styles.pageText}>
                    A Junior Software Engineer currently based in Calgary, AB.<br /><br />
                    If you are seeking someone with a broad technical skillset, the ability to both
                    problem-solve on their own and collaborate efficiently with a team, and a motivated
                    and rapid learning, then look no further.<br /><br />
                    I even taught myself React and Next.js over the course of a month just to create this
                    site from scratch.<br /><br />
                    Want to learn more? Click any of the links below!
                </p>
                <img className={styles.profile}
                    src="/Hunter.png"
                    alt="An image of Hunter Reboul smiling at the camera while holding up a Varjo XR-3 headset."
                />
            </div>
        </div>
    );
}
