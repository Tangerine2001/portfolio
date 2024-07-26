import Footer from "@/components/common/footer"
import Navbar from "@/components/common/navbar";
import "./main.css";

export const metadata = {
  title: "Max Tang",
  description: "Max Tang's NextJS portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <div className="page-content">
            <Navbar />
            <div className="content-wrapper">
                {children}
            </div>
            <Footer />
          </div>
        </body>
    </html>
  );
}
