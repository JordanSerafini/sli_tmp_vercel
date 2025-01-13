import "./styles/global.scss";
import "./styles/app.scss";
import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css';

import Navbar from "./navbar/page";
import Footer from "./footer/page";

export const metadata = {
  title: "Solution Logique",
  description: "Votre partenaire informatique.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
