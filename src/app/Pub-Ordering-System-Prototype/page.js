import styles from "./pubOrdering.module.css";
import { Carousel, CarouselItem } from 'react-bootstrap';

export default function Page() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>Pub Ordering System Prototype</h1>
            <Carousel className={styles.carousel} interval={5000}>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-1.png" alt="slide 1" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-2.png" alt="slide 2" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-3.png" alt="slide 3" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-4.png" alt="slide 4" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-5.png" alt="slide 5" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-6.png" alt="slide 6" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-7.png" alt="slide 7" />
                </CarouselItem>
                <CarouselItem>
                    <img className={styles.slideImage} src="/work-samples/PubOrderingPrototype-8.png" alt="slide 8" />
                </CarouselItem>
            </Carousel>
            <div className={styles.description}>
                <p>
                    A tablet application prototype of a system that allows customers to perform common actions when dining
                    at a pub.
                </p>
            </div>
        </main>
    );
}