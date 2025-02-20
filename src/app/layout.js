import "./globals.css";

import styles from "./root.module.css";
import Footer from "@/app/components/Footer.js";

export const metadata = {
    title: {
        template: "Hunter Reboul Software Engineer - %s",
        default: "Hunter Reboul Software Engineer"
    },
    description: "Portfolio Website created using React and Next.js by Hunter Reboul.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.container}>
                    {children}
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
