import styles from "./work-samples.module.css";
import Link from "next/link";

export default function Page() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Samples of My Work</h1>
            <div className={styles.workSampleContainer}>
                <Link href="/work-samples/VitalXR-Virtual-Login-Page-Environment">
                    <div className={styles.linkContainer}>
                        <img className={styles.sampleImage}
                            src="/work-samples/VitalXR-Profile.png"
                            alt="The profile image for the VitalXR Virtual Login Page & Environment Sample. 
                                Displays two virtual hands over a virtual keyboard with a floating blue login page
                                with the words 'Enter your credentials' at the top."
                        />
                        <div className={styles.samepleImageOverlay}>
                            <p className={styles.sampleImageText}>Learn More</p>
                        </div>
                    </div>
                </Link>
                <p className={styles.workSampleOutlineRight}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque vel volutpat orci. Morbi nisi metus, gravida id convallis eget, venenatis sit amet ex.
                    Donec volutpat dui sed dolor pharetra, nec porttitor leo posuere.
                    Nunc tincidunt consequat nisl sed pellentesque.
                </p>
            </div>
        </main>
    );
}