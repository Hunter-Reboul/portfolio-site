import styles from "./pubOrdering.module.css";
import { Carousel, CarouselItem } from 'react-bootstrap';
import BackButton from "@/app/components/BackButton.js";

export default function Page() {
    return (
        <main className={styles.page}>
            <BackButton/>
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
                <h2 className={styles.subSectionTitle}>Background</h2>
                <p>
                    As part of a class on Human-Computer Interaction, I collaborated with a team to create a prototype of a
                    web or tablet application to solve a pre-selected scenario. We were given the objective of creating an
                    ordering system for restaraunts/bars, which would allow customers to interact with the menu and order their
                    food from the table directly.
                </p>
                <p>
                    We were required to perform specific HCI practices to complete our project, such as task-centered system design,
                    horizontal and vertical prototyping, etc.
                </p>
                <h2 className={styles.subSectionTitle}>What I Did</h2>
                <p>
                    I took on a leadership role in the design aspect of the project, encouraging ideas from all members of the team while
                    ensuring we stayed within the bounds of the project and accounted for feedback we received throughout the design and
                    development process. It was through my guidance the project shifted from a general restaraunt application to one that
                    was aimed towards pubs, allowing the team to determine more efficiently what features should be prioritized, and which
                    features should be removed entierly.
                </p>
                <p>
                    I also took on responsibilities of fixing and verifying features, serving as a psuedo-customer at times to test the system
                    as a whole and determine where features would break or need their functionality modified. My aggressive and thorough testing
                    methods revealed multiple issues that I personally rectified, while still keeping the features true to their core functionality.
                </p>
                <h2 className={styles.subSectionTitle}>The Result</h2>
                <p>
                    The final prototype allowed customers to do more than simply peruse the menu and order meals. The protype contained menu filters
                    to make menu perusing easier, a refill tab to easily re-order drinks, a display of the table's current price, and the ability to
                    request the bill in multiple ways (single, even split, custom split).
                </p>
                <p>
                    Not all features were completed, whether do to being overly complex for the time we had, or making the user experience more
                    complicated/confusing than if they were unimplemented. However, the core functionalities for a customer's experience were accomplished, and
                    our team received high praise for our work.
                </p>
            </div>
        </main>
    );
}