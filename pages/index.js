import ThemeSwitcher from "../components/ThemeSwitcher";
import Layout from "../components/Layout";

const Home = () => (
    <Layout>
        <div className="flex flex-col md:flex-row justify-center md:justify-around lg:justify-center items-center flex-1  bg-homebg bg-cover bg-center relative lg:overflow-hidden">
            <div id="blackbg" className="absolute top-0 left-0 z-20">
                <ThemeSwitcher />
            </div>
            <div className="hidden lg:block bg-homepattern landing-decoration "></div>

            <div className="flex flex-col w-11/12 sm:w-9/12 sm:max-w-md md:w-2/5 m-auto md:m-0 md:max-w-md text-white py-12 px-2 items-center justify-center z-10">
                <p className="text-white uppercase text-sm sm:text-2xl tracking-tight text-center">
                    Welcome To
                </p>
                <h1 className="text-3xl sm:text-6xl font-display tracking-wider m-0 p-0 text-center">
                    GGUnity
                </h1>
                <p className="text-sm sm:text-2xl font-normal tracking-tighter text-center">
                    The next generation social network &amp; community! Connect
                    with your friends and play with our quests and badges
                    gamification system!
                </p>
            </div>
            <div className="flex flex-col w-11/12 sm:w-9/12 sm:max-w-md md:w-2/5 m-auto md:m-0 md:max-w-md text-textColor py-12 px-2 items-center justify-center z-10">
                <div className="flex flex-col w-full bg-boxBg rounded-lg shadow-shadowDarkAlt3 py-6 md:py-12 px-6 lg:px-16">
                    <h2 className="text-3xl text-center tracking-tighter my-3 md:my-8">
                        Account Login
                    </h2>
                    <form>
                        <fieldset className="flex flex-col">
                            <label className="my-2" htmlFor="username">
                                UserName
                            </label>
                            <input
                                className="w-full my-2 py-2 px-2 text-textInput appearance-none focus:outline-none bg-boxBgAlt focus:bg-boxBgLight rounded-md border border-transparent focus:border-secondaryHover"
                                type="text"
                                name="username"
                            />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label className="my-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full my-2 py-2 px-2 text-textInput appearance-none focus:outline-none bg-boxBgAlt focus:bg-boxBgLight rounded-md border border-transparent focus:border-secondaryHover"
                                type="password"
                                name="password"
                            />
                        </fieldset>
                        <div className="flex flex-row justify-between my-3">
                            <div className="flex flex-row items-center">
                                <input
                                    className="bg-primary mr-2 leading-tight"
                                    type="checkbox"
                                />
                                <span class="text-sm">Remember Me</span>
                            </div>
                            <span class="text-sm">Forgot Password?</span>
                        </div>
                        <button className="my-12 w-full bg-secondaryDark p-2 rounded-md hover:bg-secondaryHover shadow-shadowPrimary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
);

export default Home;
