// pages/index.js
export default function Home() {
    return (
        <div className="scroll-snap-y scroll-smooth">
            {/* Section 1 */}
            <section className="h-screen bg-blue-500 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-bold">Welcome to Section 1</h1>
                    <p className="text-white mt-4">Scroll down to explore more</p>
                </div>
            </section>

            {/* Section 2 */}
            <section className="h-screen bg-green-500 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-bold">This is Section 2</h1>
                    <p className="text-white mt-4">Keep scrolling!</p>
                </div>
            </section>

            {/* Section 3 */}
            <section className="h-screen bg-red-500 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-bold">You are in Section 3</h1>
                    <p className="text-white mt-4">Almost there...</p>
                </div>
            </section>

            {/* Section 4 */}
            <section className="h-screen bg-purple-500 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-bold">Section 4: The End</h1>
                    <p className="text-white mt-4">Thank you for scrolling!</p>
                </div>
            </section>
        </div>
    );
}
