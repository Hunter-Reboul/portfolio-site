import styles from "./home.module.css";
import TechSkill from "@/app/components/TechSkill";
import WorkSample from "@/app/components/WorkSample";

export default function Home() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Hunter Reboul - Software Engineer</h1>
            <div className={styles.introContainer}>
                <p className={styles.pageText}>
                    I'm a Junior Software Engineer currently based in Calgary, AB.<br /><br />
                    If you are seeking someone with a broad technical skillset, the ability to both
                    problem-solve on their own and collaborate efficiently with a team, and a motivated
                    and rapid learning, then look no further.<br /><br />
                    I even taught myself React and Next.js over the course of a month just to create this
                    site from scratch.<br /><br />
                </p>
                <img className={styles.profile}
                    src="/Hunter.png"
                    alt="An image of Hunter Reboul smiling at the camera while holding up a Varjo XR-3 headset."
                />
            </div>
            <h2 className={styles.skillsTitle}>I am able to provide high-quality solutions using...</h2>
            <div className={styles.skillsContainer}>
                <TechSkill image="/C_Sharp_Logo.png" name="C Sharp"
                    altText="The logo for the programming language, C# (C-Sharp)." />
                <TechSkill image="/Unity_Logo.png" name="Unity"
                    altText="The logo for the game engine, Unity." />
                <TechSkill image="/C++_Logo.png" name="C/C++"
                    altText="The logo for the programming language, C++." />
                <TechSkill image="/React_Logo.png" name="React"
                    altText="The logo for the web framework, React." />
                <TechSkill image="/Java_Logo.png" name="Java"
                    altText="The logo for the programming language, Java." />
                <TechSkill image="/Python_Logo.png" name="Python"
                    altText="The logo for the programming language, Python." />
                <TechSkill image="/JavaScript_Logo.png" name="JavaScript"
                    altText="The logo for the programming language, JavaScript." />
            </div>
            <h2 className={styles.workSamplesTitle}>Samples of My Work</h2>
            <div className={styles.workSamplesContainer}>
                <WorkSample
                    link="/User-Task-Creation-Application"
                    image="/work-samples/UserTaskCreation-Profile.png"
                    altText="The profile image for the User Task Creation Application sample."
                    title="User Task Creation Application"
                    description="Improvements to a simple task creation application."
                />
            </div>
            <div className={styles.workSamplesContainer}>
                <WorkSample
                    link="/VitalXR-Virtual-Login-Page-Environment"
                    image="/work-samples/VitalXR-Profile.png"
                    altText="The profile image for the VitalXR Virtual Login Page & Environment sample. "
                    title="VitalXR Virtual Login Page & Environment"
                    description="An award-winning login page and environment made in virtual reality, made
                    for a surgery simulation company."
                />
            </div>
            <div className={styles.workSamplesContainer}>
                <WorkSample
                    link="/Pub-Ordering-System-Prototype"
                    image="/work-samples/PubOrderingPrototype-Profile.png"
                    altText="The profile image for the Pub Ordering System Prototype sample."
                    title="Pub Ordering System Prototype"
                    description="A prototype for a tablet app that automates many actions a customer makes
                    at a pub."
                />
            </div>
        </main>
    );
}
