import '@/app/ui/global.css';
import React from "react";
import {inter} from "@/app/ui/fonts";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Acme Dashboard',
        default: 'Acme Dashboard'
    },
    description: 'The official Next.js course dashboard, built with app router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.app/')
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
