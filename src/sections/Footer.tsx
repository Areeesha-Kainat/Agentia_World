// import Logo from "@/assets/logo.svg";
// import Link from "next/link";
// import XSocial from "@/assets/social-x.svg";
// import InstaSocial from "@/assets/social-instagram.svg";
// import YTSocial from "@/assets/social-youtube.svg";

// export const Footer = () => {
//   return (
//     <>
//       <footer className="mt-10 py-5 border-t border-white/15">
//         <div className="container">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* Left div */}
//             <div className="flex gap-2 items-center lg:flex-1">
//               <Logo className="h-6 w-6" />
//               <div className="font-medium">AGENTIA WORLD</div>
//             </div>

//             {/* Middle div (Three-column navigation) */}
//             <nav className="grid grid-cols-3 gap-16 lg:flex-1 lg:justify-center">
//               {/* First Column */}
//               <div className="flex flex-col gap-3">
//                 <h2 className="text-white font-medium">Product</h2>
//                 <Link href="/Features" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Features
//                 </Link>
//                 <Link href="/Pricing" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Pricing
//                 </Link>
//                 <Link href="/Documentation" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Documentation
//                 </Link>
//                 <Link href="API" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   API
//                 </Link>
//               </div>

//               {/* Second Column */}
//               <div className="flex flex-col gap-3">
//                 <h2 className="text-white font-medium">Company</h2>
//                 <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   About
//                 </Link>
//                 <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Blog
//                 </Link>
//                 <Link href="/Contact" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Contact
//                 </Link>
//                 <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Careers
//                 </Link>
//               </div>

//               {/* Third Column */}
//               <div className="flex flex-col gap-3">
//                 <h2 className="text-white font-medium">Legal</h2>
//                 <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Privacy
//                 </Link>
//                 <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Terms
//                 </Link>
//                 <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Security
//                 </Link>
//                 <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
//                   Compliance
//                 </Link>
//               </div>
//             </nav>

//             {/* Right div (Social icons) */}
//             <div className="flex gap-5 lg:flex-1 lg:justify-end">
//               <XSocial className="text-white/40 hover:text-white transition" />
//               <InstaSocial className="text-white/40 hover:text-white transition" />
//               <YTSocial className="text-white/40 hover:text-white transition" />
//             </div>
//           </div>
//           <footer className="text-center py-8 text-gray-400">
//         <p>© 2025 Agentia World. Powered by Panaversity. All rights reserved.</p>
       
//       </footer>
//         </div>
//       </footer>
//     </>
//   );
// };


// ====== icons ======

import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; // Import the desired social icons from react-icons

export const Footer = () => {
  return (
    <>
      <footer className="mt-10 py-5 border-t border-white/15">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left div */}
            <div className="flex gap-2 items-center lg:flex-1">
              <Logo className="h-6 w-6" />
              <div className="font-medium">AGENTIA WORLD</div>
            </div>

            {/* Middle div (Three-column navigation) */}
            <nav className="grid grid-cols-3 gap-16 lg:flex-1 lg:justify-center">
              {/* First Column */}
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-medium">Product</h2>
                <Link href="/Features" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Features
                </Link>
                <Link href="/Pricing" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Pricing
                </Link>
                <Link href="/Documentation" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Documentation
                </Link>
                <Link href="API" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  API
                </Link>
              </div>

              {/* Second Column */}
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-medium">Company</h2>
                <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  About
                </Link>
                <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Blog
                </Link>
                <Link href="/Contact" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Contact
                </Link>
                <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Careers
                </Link>
              </div>

              {/* Third Column */}
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-medium">Legal</h2>
                <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Privacy
                </Link>
                <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Terms
                </Link>
                <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Security
                </Link>
                <Link href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition">
                  Compliance
                </Link>
              </div>
            </nav>

            {/* Right div (Social icons) */}
            <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <Link href="https://www.linkedin.com/in/areesha-kainat">
              <FaLinkedin className="text-white/40 hover:text-white transition text-xl" /> {/* LinkedIn Icon */}
              </Link>
             <Link href="https://github.com/Areeesha-Kainat">
              <FaGithub className="text-white/40 hover:text-white transition text-xl" /> {/* GitHub Icon */}
              </Link>
              <Link href="https://www.facebook.com/share/1CKiZVonvJ/">
              <FaFacebook className="text-white/40 hover:text-white transition text-xl" /> {/* Facebook Icon */}
              </Link>
            </div>
          </div>
          <footer className="text-center py-8 text-gray-400">
            <p>© 2025 Agentia World. Powered by Panaversity. All rights reserved.</p>
          </footer>
        </div>
      </footer>
    </>
  );
};
