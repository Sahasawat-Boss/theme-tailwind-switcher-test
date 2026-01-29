export default function ColorTest() {
  const mockMessages = [
    { role: "ai", content: "สวัสดีครับ! ผมคือระบบ AI ที่ใช้ Theme ของคุณ ตอนนี้สี Primary กำลังทำงานได้ดีมาก" },
    { role: "user", content: "ลองส่งข้อความดูหน่อยว่าสี Text กับ Background เข้ากันไหม?" },
    { role: "ai", content: "ดูเหมือนว่าระดับ Contrast จะกำลังดีเลยครับ อ่านง่ายและดูทันสมัยมาก!" },
  ];

  return (
    <main className="min-h-screen bg-bg text-text px-6 py-20  font-sans transition-colors duration-300">
      {/* Header & Theme Indicator */}
      <header className="max-w-4xl mx-auto flex justify-between items-end mb-12 border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-5xl font-black text-primary tracking-tighter uppercase italic">
            TEST THEME
          </h1>
        </div>

        {/* Color Swatch Display */}
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-bg border border-primary" title="Background"></div>
          <div className="w-5 h-5 rounded-full bg-primary" title="Primary"></div>
          <div className="w-5 h-5 rounded-full bg-text" title="Text"></div>
        </div>
      </header>

      {/* Main Chat UI */}
      <section className="max-w-4xl mx-auto grid gap-8">
        <div className="space-y-6">
          {mockMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`
                max-w-[80%] p-4 rounded-2xl border-2
                ${msg.role === 'user'
                  ? 'bg-sec text-bg border-primary shadow-[4px_4px_0px_var(--color-text)]'
                  : 'bg-bg border-primary/30 text-text'}
              `}>
                <p className="text-sm font-bold mb-1 uppercase opacity-50">
                  {msg.role === 'ai' ? '🤖 System' : '👤 You'}
                </p>
                <p className="text-lg leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="mt-8 relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full bg-bg border-2 border-primary p-4 rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <button className="absolute right-3 top-2 bottom-2 px-6 bg-primary text-bg font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all">
            SEND
          </button>
        </div>
      </section>

      {/* Theme Debugger Footer */}
      <footer className="max-w-4xl mx-auto mt-20 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <h2 className="text-xs font-mono text-primary mb-2 tracking-widest uppercase">Current Variables:</h2>
        <div className="flex flex-wrap gap-4 font-mono text-sm opacity-80">
          <span>--bg: <span className="text-primary">var(--bg)</span></span>
          <span>--text: <span className="text-primary">var(--text)</span></span>
          <span>--primary: <span className="text-primary">var(--primary)</span></span>
        </div>
      </footer>
    </main>
  );
}