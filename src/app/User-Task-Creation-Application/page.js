import styles from "./taskCreation.module.css";
import { Carousel, CarouselItem } from 'react-bootstrap';

export default function Page() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>User Task Creation Application</h1>
            <Carousel className={styles.carousel} interval={5000}>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-1-old.png" alt="slide 1" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-1.png" alt="slide 2" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-2-old.png" alt="slide 3" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-2.png" alt="slide 4" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-3-old.png" alt="slide 5" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-3.png" alt="slide 6" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-4-old.png" alt="slide 7" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-4.png" alt="slide 8" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-5-old.png" alt="slide 9" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-5.png" alt="slide 10" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-6-old.png" alt="slide 11" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-6.png" alt="slide 12" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-7-old.png" alt="slide 13" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/UserTaskCreation-7.png" alt="slide 14" />
                </CarouselItem>
            </Carousel>
            <div className={styles.description}>
                <p>
                    In March 2025, I received an opportunity to be hired for a front-end focused, Full Stack Engineer position.
                    As part of the application process, I was given a take-home assignment to update a barebones version of a task creation
                    web application.
                </p>
            </div>
        </main>
    );
}