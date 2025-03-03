import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default : "AppsoBytes",
    template : "%s | AppsoBytes"

  },
  // title : "AppsoBytes",
  description: "Turning Ideas Into Impactful Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html : JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Appsobytes",
            "url": "https://www.appsobytes.com",
            "description" : "At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.appsobytes.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "hasPart": [
              {
                "@type": "WebPage",
                "name": "Services",
                "url": "https://www.appsobytes.com/services",
                "description" : "At Appsobytes, we craft custom web and app solutions that drive growth and enhance user experience. Our expert team delivers high-quality, scalable digital products tailored to your business needs."
              },
              {
                "@type": "WebPage",
                "name": "About Us",
                "url": "https://www.appsobytes.com/about",
                "description": "At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions."
              },
              {
                "@type": "WebPage",
                "name": "Contact",
                "url": "https://www.appsobytes.com/contact",
                "description" : "At Appsobytes, we’re here to help you bring your ideas to life! Whether you have a question about our services, need technical support, or want to discuss your next big project, our team is ready to assist you."
              },
              {
                "@type": "WebPage",
                "name": "Blogs",
                "url": "https://www.appsobytes.com/blogs",
                "description" : "Stay informed with the latest insights, tips, and trends on our blog."
              }
            ]
          }
        )
      }}  
/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
