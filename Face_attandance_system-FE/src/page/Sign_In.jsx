import background_logo from '../assets/img/BGlogin.png';
import Login_form from "@/components/Login_form.jsx";
export default function Sign_In() {
    return (
        <>
            <div className="relative h-screen">
                <img src={background_logo} alt="background" className="absolute h-full w-full object-cover blur-sm" />

                <div className="flex items-center justify-center h-full">
                    <div className="w-[450px] h-[650px] bg-[#EFEFF1] border-[#EFEFF1] drop-shadow-2xl rounded-lg border-8 border-[#299D47] mx-auto my-auto">
                            <Login_form className="flex items-center justify-center"/>
                    </div>
                </div>
            </div>
        </>
    )
}