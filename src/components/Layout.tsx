"use client";

import Navbar from "@/components/Navbar";

type LayoutProps = { 
    children: React.ReactNode,
   };
       
   const Layout = ({ children }: LayoutProps) => {
     return (
        <main>
        <Navbar />
        {children} 
        </main>
     );
   }
   
   export default Layout