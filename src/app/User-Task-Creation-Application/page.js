import styles from "./taskCreation.module.css";
import { Carousel, CarouselItem } from 'react-bootstrap';
import BackButton from "@/app/components/BackButton.js";

export default function Page() {
    return (
        <main className={styles.page}>
            <BackButton/>
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
                    As part of the application process for a front-end-focused Full Stack Engineer role, I was given a take-home assignment to enhance
                    a basic task creation web application with customer-requested features. While there was no strict deadline, a one-week completion
                    timeframe was recommended.
                </p>
                <p>
                    This project was particularly challenging as I had never worked with Angular or Nx before, and it had been some time since I had
                    written automated tests. Over the course of the week, I quickly ramped up on Angular, Angular Material, and Jest, while also pushing
                    myself further by learning Cypress and Visual Testing to complete a bonus requirement.
                </p>
                <p>
                    In the end, I successfully implemented all required features and most bonus features, with full test coverage. This project showcases
                    my ability to rapidly learn new technologies, adapt under pressure, and deliver high-quality work within tight deadlines. Additionally,
                    it strengthened my skills in modern web development, making me a more versatile engineer.
                </p>
            </div>
        </main>
    );
}