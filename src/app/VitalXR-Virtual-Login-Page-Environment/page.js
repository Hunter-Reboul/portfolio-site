import styles from "./vitalxr.module.css";
import { Carousel, CarouselItem } from 'react-bootstrap';
import BackButton from "@/app/components/BackButton.js";

export default function Page() {
    return (
        <main className={styles.page}>
            <BackButton/>
            <h1 className={styles.title}>VitalXR Virtual Login Page & Environment</h1>
            <Carousel className={styles.carousel} interval={5000}>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/VitalXR-1.png" alt="slide 1" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/VitalXR-2.png" alt="slide 2" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/VitalXR-3.png" alt="slide 3" />
                </CarouselItem>
            </Carousel>
            <div className={styles.description}>
                <p>
                    A Virtual Login Page & Environment, created for <a href="https://vitalxr.ca/">VitalXr</a> as part of
                    my University Capstone Project.
                </p>
                <p>
                    VitalXR is a surgery simulation company.
                </p>
            </div>
        </main>
    );
}