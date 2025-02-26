import styles from "./skills.module.css";

export default function TechSkill({ image, name, altText }) {
    return (
        <div className={styles.techSkill}>
            <img className={styles.techSkillIcon}
                src={image}
                alt={altText}
            />
            <p className={styles.techSkillName}>
                {name}
            </p>
        </div >
    );
}