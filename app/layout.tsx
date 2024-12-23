import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/Sidebar"
import RightSidebar from "./components/RightSidebar"
import { AppProvider } from "./context/AppContext"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "WorkerGen",
    description: "WorkerGen frontend developer task",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-100`}
            >
                <AppProvider>
                    <div className="flex w-screen h-screen">
                        <Sidebar />
                        {children}
                        <RightSidebar />
                    </div>
                </AppProvider>
            </body>
        </html>
    )
}
