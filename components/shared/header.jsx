"use client";

import logo from "@/public/image/logoKyThuatCongNghiep.png";
import bgTest from "@/public/image/bgtnuttt.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

import { itemCardHeader, itemNavbar } from "@/lib/index.js";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";
// Color constants
const COLORS = {
    primary: "#2e5288",   // Dark blue
    secondary: "#a61d37", // Red
    light: "#ffffff",     // White
    dark: "#333333",      // Dark text
    accent: "#f0f4f8",    // Light blue background
    darkAccent: "#1a365d" // Darker blue for hover states
};

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();
    const pathname = usePathname();

    console.log(pathname)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu when switching to desktop view
    useEffect(() => {
        if (!isMobile && mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    }, [isMobile, mobileMenuOpen]);

    return (
        <>
            <header className="w-full">
                {/* Top Navigation Bar */}
                <div
                    className={`w-full transition-all duration-300 ${isScrolled
                        ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
                        : `absolute top-0 left-0 right-0 z-50 bg-opacity-90`
                        }`}
                    style={{
                        backgroundColor: isScrolled ? "#ffffff" : "rgba(46, 82, 136, 0.9)"
                    }}
                >
                    <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
                        {/* Logo and School Name */}
                        <div className="flex items-center mb-3 md:mb-0">
                            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden"
                                style={{ backgroundColor: COLORS.light, padding: "2px" }}>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className="w-full h-full "
                                />
                            </div>
                            <div className="ml-3 text-center ">
                                <div className={`text-xs sm:text-sm font-medium ${isScrolled ? "text-gray-600" : "text-gray-200"}`}>
                                    ĐẠI HỌC THÁI NGUYÊN
                                </div>
                                <h1 className={`text-sm sm:text-lg md:text-xl font-bold ${isScrolled ? `text-[${COLORS.primary}]` : "text-white"}`}
                                    style={{ color: isScrolled ? COLORS.primary : COLORS.light }}>
                                    TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP
                                </h1>
                                <div className={`text-xs ${isScrolled ? "text-gray-600" : "text-gray-200"}`}>
                                    THAINGUYEN UNIVERSITY OF TECHNOLOGY
                                </div>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        {isMobile && (
                            <button
                                className="absolute top-4 right-4"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                                style={{ color: isScrolled ? COLORS.primary : COLORS.light }}
                            >
                                {mobileMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        )}

                        {/* Mobile Menu Overlay */}
                        {isMobile && mobileMenuOpen && (
                            <div className="fixed inset-0 z-50 flex">
                                {/* Overlay background */}
                                <div
                                    className="flex-1 bg-black/80"
                                    onClick={() => setMobileMenuOpen(false)}
                                />

                                {/* Side Menu */}
                                <div
                                    className="w-64 max-w-[300px] h-full py-8 space-y-4 relative shadow-lg animate-slide-left"
                                    style={{ backgroundColor: COLORS.primary }}
                                >
                                    {/* Close button */}
                                    <button
                                        className="absolute top-4 right-4 text-white"
                                        onClick={() => setMobileMenuOpen(false)}
                                        aria-label="Close menu"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    {/* School Logo and Name */}
                                    <div className="flex flex-col items-center mb-6 px-6">
                                        <div className="w-16 h-16 rounded-full bg-white p-1 mb-3">
                                            <Image
                                                src={logo}
                                                alt="Logo"
                                                width={60}
                                                height={60}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs text-gray-200">ĐẠI HỌC THÁI NGUYÊN</div>
                                            <h2 className="text-sm font-bold text-white">TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP</h2>
                                        </div>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="px-6">
                                        {itemNavbar.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={item.link}
                                                className={`${pathname === item.link.split("#")[0] ? "underline underline-offset-4" : ""}text-white hover:text-gray-200 transition duration-300 block py-3 border-b border-blue-700`}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Desktop Navigation Items */}
                        {!isMobile && (
                            <nav className="grid grid-cols-3 sm:grid-cols-4  gap-x-4 gap-y-2 justify-items-center">
                                {itemNavbar.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        className={`${pathname === item.link.split("#")[0] ? "underline underline-offset-4" : ""} relative font-medium transition duration-300 px-2 py-1 group text-center`}
                                        style={{
                                            color: isScrolled ? COLORS.primary : COLORS.light
                                        }}
                                    >
                                        <span>{item.name}</span>
                                        <span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                                            style={{ backgroundColor: isScrolled ? COLORS.secondary : COLORS.light }}
                                        ></span>
                                    </a>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>
                {isScrolled && <div className="h-16"></div>} {/* Spacer */}

                {/* Hero Section with Background Image */}
                <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
                        <Image
                            src={bgTest}
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Center Content */}
                    <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4">
                        {/* Main Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: COLORS.light }}>
                                <span className="block mb-2">20 NĂM</span>
                                <span style={{ color: "#ff9d42" }}>ĐIỆN TỬ VIỄN THÔNG</span>
                            </h2>
                            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: COLORS.secondary }}></div>
                            <p className="text-white text-base md:text-xl max-w-3xl px-4 leading-relaxed italic">
                                "Từ những ngày đầu đặt nền móng năm 2004, đến hôm nay – 2024 – Điện tử Viễn thông đã trở thành chiếc nôi đào tạo hàng nghìn kỹ sư, là cầu nối giữa học thuật và thực tiễn, giữa nhà trường và doanh nghiệp."
                            </p>
                        </div>
                    </div>

                    {/* Bottom Cards */}
                    <div className="absolute bottom-10 left-0 right-0 z-20">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
                                {itemCardHeader.map((item, index) => (
                                    <Card
                                        key={item.id}
                                        className="overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                                        style={{
                                            borderTop: `3px solid ${index % 2 === 0 ? COLORS.primary : COLORS.secondary}`,
                                            backgroundColor: "rgba(255, 255, 255, 0.95)"
                                        }}
                                    >
                                        <CardContent className="p-4">
                                            <CardTitle>
                                                <h3
                                                    className="font-bold text-lg mb-2"
                                                    style={{ color: index % 2 === 0 ? COLORS.primary : COLORS.secondary }}
                                                >
                                                    {item.name}
                                                </h3>
                                            </CardTitle>
                                            <CardDescription>
                                                <p className="text-sm text-gray-700">
                                                    {isMobile && item.description.length > 80
                                                        ? `${item.description.substring(0, 80)}...`
                                                        : item.description}
                                                </p>
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}