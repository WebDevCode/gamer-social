import ThemeSwitcher from "../components/ThemeSwitcher";
import Layout from "../components/Layout";
import React, {useState} from 'react';



const Home = () => {
    
    const [current, setCurrent] = useState('login');

    const toggleTabs = (event, data) => {
        if(data !== current){
            setCurrent(data);
        }
        event.preventDefault();
    }

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center flex-1  bg-homebg bg-cover bg-center relative lg:overflow-hidden">
                <div id="blackbg" className="absolute top-0 left-0 z-20">
                    <ThemeSwitcher />
                </div>
                <div className="hidden xl:block bg-homepattern landing-decoration "></div>

                <div className="flex flex-col w-11/12 sm:w-9/12 sm:max-w-md lg:w-5/12 m-auto lg:m-0 lg:max-w-md text-white py-12 px-2 items-center justify-center z-10">
                    <p className="text-white uppercase text-sm sm:text-2xl tracking-tight text-center">
                        Welcome To
                    </p>
                    <h1 className="text-3xl sm:text-6xl font-display tracking-wider m-0 p-0 text-center">
                        GGUnity
                    </h1>
                    <p className="md:hidden lg:block text-sm sm:text-2xl font-normal tracking-tighter text-center">
                        The next generation social network &amp; community!
                        Connect with your friends and play with our quests and
                        badges gamification system!
                    </p>
                    <div className="flex flex-row justify-between mt-8 rounded-lg">
                        <button key="login"  onClick={(event) => toggleTabs(event, 'login')} className={`${current ==='login' ? 'bg-white text-black' : 'text-white'} py-2 px-8 w-2/4 text-centerDark  hover:text-textColor rounded-tl-lg rounded-bl-lg focus:outline-none border border-r-0 border-white`}>
                            Login
                        </button>
                        <button key="register"  onClick={(event) => toggleTabs(event, 'register')} className={`${current ==='register' ? 'bg-white text-black' : 'text-white'} py-2 px-8 w-2/4 text-centerDark hover:text-textColor rounded-tr-lg rounded-br-lg focus:outline-none border border-l-0 border-white`}>
                            Register
                        </button>
                    </div>
                </div>
                <div className={`${current ==='login' ? 'flex flex-col' : 'hidden'} w-11/12 sm:w-9/12 sm:max-w-md lg:w-5/12 m-auto lg:m-0 lg:max-w-md text-textColor py-12 px-2 items-center justify-center z-10`}>
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
                                    <span className="text-sm">Remember Me</span>
                                </div>
                                <span className="text-sm">
                                    Forgot Password?
                                </span>
                            </div>
                            <button className="my-12 w-full text-textColorDark hover:text-white bg-secondaryDark p-2 rounded-md hover:bg-secondaryHover shadow-shadowPrimary">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                <div className={`${current ==='register' ? 'flex flex-col' : 'hidden'} w-11/12 sm:w-9/12 sm:max-w-md lg:w-5/12 m-auto lg:m-0 lg:max-w-md text-textColor py-12 px-2 items-center justify-center z-10`}>
                    <div className="flex flex-col w-full bg-boxBg rounded-lg shadow-shadowDarkAlt3 py-6 md:py-12 px-6 lg:px-16">
                        <h2 className="text-3xl text-center tracking-tighter my-3 md:my-8">
                            Register
                        </h2>
                        <form>
                            <fieldset className="flex flex-col">
                                <label className="my-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full my-2 py-2 px-2 text-textInput appearance-none focus:outline-none bg-boxBgAlt focus:bg-boxBgLight rounded-md border border-transparent focus:border-secondaryHover"
                                    type="email"
                                    name="email"
                                />
                            </fieldset>
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
                            <div className="flex flex-col justify-between my-3">
                                <div className="flex flex-row items-center justify-start my-2">
                                    <input
                                        className="bg-primary mr-2 leading-tight"
                                        type="checkbox"
                                    />
                                    <span className="text-sm">
                                        I agree to the Terms &amp; Conditions
                                    </span>
                                </div>
                                <div className="flex flex-row items-start justify-start my-2">
                                    <input
                                        className="bg-primary mr-2 leading-tight"
                                        type="checkbox"
                                    />
                                    <span className="text-sm">
                                        Send me news and updates via registered
                                        email.
                                    </span>
                                </div>
                            </div>
                            <button className="my-12 w-full text-textColorDark hover:text-white bg-secondaryDark p-2 rounded-md hover:bg-secondaryHover shadow-shadowPrimary">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
