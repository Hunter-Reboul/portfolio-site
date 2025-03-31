import styles from "./work-sample.module.css";
import Link from "next/link";

export default function WorkSample({ link, image, altText, title, description }) {
    return (
        <div className={styles.workSampleContainer}>
            <Link href={link}>
                <div className={styles.linkContainer}>
                    <img className={styles.sampleImage}
                        src={image}
                        alt={altText}
                    />
                    <div className={styles.samepleImageOverlay}>
                        <p className={styles.sampleImageText}>Learn More</p>
                    </div>
                </div>
            </Link>
            <div className={styles.workSampleTextContainer}>
                <h1 className={styles.workSampleTitle}>
                    {title}
                </h1>
                <p className={styles.workSampleOutline}>
                    {description}
                </p>
            </div>
        </div>
    );
}