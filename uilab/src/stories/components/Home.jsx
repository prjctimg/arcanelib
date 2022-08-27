export const Home = () => {
    return (
        <>
            <body className="bg-cyan-500 flex-col min-h-screen ">
                <nav className=" min-h-screen w-[6%] flex-col navbar bg-inherit sticky top-0 left-0">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </nav>
                <main className="flex">
                    <aside className="">
                        <ul>
                            <li>JavaScript utilities</li>
                            <li>CSS snippets</li>
                            <li>XD files</li>
                            <li>Let's color!</li>
                        </ul>
                    </aside>
                </main>
            </body>
        </>
    );
};

//Include the bg generating logic in the app.jsx
