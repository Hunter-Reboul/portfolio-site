import styles from "./work-preview.module.css";
import Link from "next/link";

export default function WorkPreview({ link, image, altText, description }) {
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
            <p className={styles.workSampleOutline}>
                {description}
            </p>
        </div>
    );
}