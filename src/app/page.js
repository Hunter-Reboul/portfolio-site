import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Hunter Reboul - Software Engineer</h1>
            <Image className={styles.profile}
                src="/Hunter.png"
                width={355}
                height={418}
                alt="An image of Hunter Reboul smiling at the camera while holding up a Varjo XR-3 headset."
            />
            <p className={styles.pageText}>Alright. Time to get to work.</p>
        </div>
    );
}
