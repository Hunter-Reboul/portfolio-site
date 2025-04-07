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
                    My award-winning University Capstone Project, sponsored by <a href="https://vitalxr.ca/">VitalXr</a>, a surgery
                    simulation company. 
                </p>
                <h2 className={styles.subSectionTitle}>Background</h2>
                <p>
                    My team and I were originally tasked to create a virtual login page to connect to a hub VitalXR was
                    planning to create, where registered users could launch their surgery simulation scripts. The login page
                    was also required to have the proper administration, and would utilize the Varjo XR-3 and its hand-tracking
                    technology.
                </p>
                <p>
                    After some setbacks due to miscommunication, resources originally promised not being supplied, and an overall
                    feeling of not having enough work for a proper Capstone project, my team and I negotiated with VitalXR to expand
                    the project to include our own hub page for the login page to connect to, a website for users to sign up on, and
                    capturing user movement data through the Varjo headset.
                </p>
                <h2 className={styles.subSectionTitle}>What I Did</h2>
                <p>
                    As the Lead Front-End Developer, I took on the responsibility of designing, developing, and testing the virtual
                    pages and environment. I taught myself Unity and Ultraleap Hand Tracking in order to create responsive and interactive
                    UIs. I conversed with our contact at VitalXR and the developers of Ultraleap to better understand the Varjo headset and
                    the scope of the inside-out hand-tracking technology. I worked with my team members working on authentication to connect
                    Unity to AWS Cognito, providing the login page with the user database for authentication, and the wider application with
                    headset data tracking.
                </p>
                <p>
                    Outside of programming, my communication, adaptibility, and motivation skills were crucial to the project's success. I
                    constantly pushed for communication with sponsor to ensure we followed the requirements set and to keep them updated on
                    our ideas, progress, and gain their consent for modifications we wanted to make to the project. Whenever we suffered setbacks,
                    either due to new information making parts of the project redundant, or certain technologies weren't functioning the way we hoped,
                    I would brainstorm and offer alternate solutions to ensure requirements were still met. As we approached our presentation date,
                    there were concerns we wouldn't be able to reach the goals we had set for the project. I took it upon myself to uplift and push my
                    teammates to continue pursuing success to the final moment, and the team and I managed to complete all the requirements we had been
                    given, as well as the additional functions we had hoped to implement.
                </p>
                <h2 className={styles.subSectionTitle}>The Result</h2>
                <p>
                    At the 2023 Schulich School of Engineering Design Fair, my team and I presented our project to the greater student body and faculty,
                    demonstrating a fully-responsive virtual login and hub page that authenticated the accounts users created. The project also tracked their
                    head movement, and displayed the data in a recreation in AWS, demonstrating the project's potential to track the hand data as well during
                    the surgery simulations.
                </p>
                <p>
                    Our project was well received by both the student body and the judges of the Design Fair, resulting in us
                    winning <a href="https://schulich.ucalgary.ca/current-students/undergraduate/launching-your-career/2023-winners">1st Place in the Software
                    Category</a>. My team attributed my ability to rapidly learn Unity and Ultraleap to craft the responsive virtual UIs and environment as a key
                    factor in our success.
                </p>
            </div>
        </main>
    );
}