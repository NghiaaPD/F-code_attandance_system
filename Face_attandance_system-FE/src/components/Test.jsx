import { useState } from 'react';
import logo from '@/assets/img/logo.png';

export default function Login_form() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Thực hiện các hành động đăng nhập ở đây, sử dụng giá trị của username và password
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <>
            <div className="h-[80px] flex flex-col items-center justify-center mt-10">
                <img src={logo} alt="logo" className="w-16 h-16" />
                <p className="uppercase text-6xl text-[#E7B824] font-bold transition duration-300 transform hover:text-[#299D47] hover:scale-110">
                    Login
                </p>
            </div>

            <div className="h-[350px] mt-4">
                <div className="flex flex-col items-center gap-6 mx-auto">
                    <div className="relative mt-10 h-14 w-[350px]">
                        <input
                            placeholder="Enter your username or email"
                            className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-bold text-blue-gray outline outline-0 transition-all placeholder-shown:border-black focus:border-[#299D47] focus:outline-0 disabled:border-0 disabled:bg-black"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <label
                            className="capitalize after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-xl font-bold leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#299D47] after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-black peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-[#299D47] peer-focus:after:scale-x-100 peer-focus:after:border-[#299D47] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                            Username
                        </label>
                    </div>
                    <div className="relative mt-6 h-14 w-[350px]">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-bold text-black outline outline-0 transition-all placeholder-shown:border-black focus:border-[#FFC81B] focus:outline-0 disabled:border-0 disabled:bg-black"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label
                            className="capitalize after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-xl font-bold leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#FFC81B] after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-black peer-focus:text-2xl peer-focus:leading-tight peer-focus:text-[#FFC81B] peer-focus:after:scale-x-100 peer-focus:after:border-[#FFC81B] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black">
                            Password
                        </label>
                    </div>

                    <div className="flex justify-between ">
                        <div className="inline-flex mr-16">
                            {/* Checkbox và nhãn ở đây */}
                        </div>
                        <div className="mt-2 ml-10 normal-case text-base text-black hover:text-[#299D47] underline underline-offset-2 cursor-pointer">
                            <p>Forgot password?</p>
                        </div>
                    </div>

                    <button
                        className="w-[350px] h-14 mt-2 middle none center rounded-lg bg-[#299D47] py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-[#E7B824] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                    <div className="border-b-2 w-[300px] "></div>

                    <div className="flex items-center justify-center">
                        <p className="text-lg text-black mr-1">You don't have an account?</p>
                        <div className="text-lg text-black hover:text-[#299D47] underline underline-offset-2 cursor-pointer">
                            <p>Sign Up</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[50px]"></div>
        </>
    );
}
