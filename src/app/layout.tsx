// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { twMerge } from "tailwind-merge";
// import { Header } from "@/sections/Header";
// import ChatBot from "@/components/ChatBot";
// import { Footer } from "@/sections/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "AGENTIA WORLD",
//   description: "A landing page for an AI startup created with Frontend Tribe",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body 
//       className={twMerge(inter.className, "bg-black text-white antialised")}>
//         <Header/>
//         {children}
//         <ChatBot/>
//         <Footer/>
//         </body>
//       </html>
    
//   );
// }



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
// import ChatBot from "@/components/ChatBot";
import { Footer } from "@/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AGENTIA WORLD",
  description: "A landing page for an AI startup created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <script src="//code.tidio.co/ksg8fnudiaaterndzs2yadczrymidsvn.js" async></script>
      </head>
      <body 
      className={twMerge(inter.className, "bg-black text-white antialised")}>
        <Header/>
        {children}
        {/* <ChatBot/> */}
        <Footer/>
        </body>
      </html>
    
  );
}
