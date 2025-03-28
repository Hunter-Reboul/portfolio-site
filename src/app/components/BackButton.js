import styles from "./backButton.module.css";
import Link from "next/link";

export default function BackButton() {
    return (
        <Link href="/">
            <button className={styles.button}>
                &larr; <b>Back</b>
            </button >
        </Link>
    );
}