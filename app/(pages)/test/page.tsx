import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-themeBlue-500 p-10 text-center">
            {/* ส่วนหัวข้อ (Hero Section) */}
            <div className="max-w-2xl">
                <h1 className="text-6xl font-bold text-themeRed-500 mb-6 uppercase tracking-tight">
                    Custom Theme
                </h1>

                <p className="text-2xl text-themeGray-500 mb-10 leading-relaxed">
                    Custom Theme<br />
                </p>

                {/* ปุ่ม Link ไปหน้า /color */}
                <Link href="/color">
                    <div className="inline-block px-8 py-4 bg-themeGreen-500 text-black rounded-full font-bold text-2xl transition-transform hover:scale-105 cursor-pointer shadow-lg">
                        Home
                    </div>
                </Link>
            </div>

            {/* ตกแต่งเพิ่มเติมด้านล่าง */}
            <div className="mt-20 w-32 h-2 bg-themeRed-500 rounded-full opacity-50"></div>
        </main>
    );
}