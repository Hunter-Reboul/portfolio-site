import styles from "./page.module.css";

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
                <div className={styles.techSkill}>
                    <img className={styles.techSkillIcon}
                        src="/C_Sharp_Logo.png"
                        alt="The logo for the programming language, C# (C-Sharp)."
                    />
                    <p className={styles.techSkillName}>
                        C Sharp
                    </p>
                </div>
                <div className={styles.techSkill}>
                    <img className={styles.techSkillIcon}
                        src="/Unity_Logo.png"
                        alt="The logo for the game engine, Unity."
                    />
                    <p className={styles.techSkillName}>
                        Unity
                    </p>
                </div>
                <div className={styles.techSkill}>
                    <img className={styles.techSkillIcon}
                        src="/C++_Logo.png"
                        alt="The logo for the programming language, C++."
                    />
                    <p className={styles.techSkillName}>
                        C/C++
                    </p>
                </div>
                <div className={styles.techSkill}>
                    <img className={styles.techSkillIcon}
                        src="/React_Logo.png"
                        alt="The logo for the web framework, React."
                    />
                    <p className={styles.techSkillName}>
                        React
                    </p>
                </div>
                <div className={styles.techSkill}>
                    <img className={styles.techSkillIcon}
                        src="/Java_Logo.png"
                        alt="The logo for the programming language, Java."
                    />
                    <p className={styles.techSkillName}>
                        Java
                    </p>
                </div>
                
                <div className={styles.techSkill}>
                    <img className={styles.techSkillIcon}
                        src="/Python_Logo.png"
                        alt="The logo for the programming language, Python."
                    />
                    <p className={styles.techSkillName}>
                        Python
                    </p>
                </div>
                <div className={styles.techSkill}>
                    <img className={styles.techSkillIcon}
                        src="/JavaScript_Logo.png"
                        alt="The logo for the programming language, JavaScript."
                    />
                    <p className={styles.techSkillName}>
                        JavaScript
                    </p>
                </div>
            </div>
        </main>
    );
}
