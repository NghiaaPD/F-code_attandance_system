import Logo from "@/assets/img/logo.png";

export default function Homepage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <img src={Logo} alt="logo" className="h-72 w-72" />
                <div className="bg-[#757D82] h-[500px] w-[1000px] rounded-lg mt-[-40px] "></div>
            </div>
        </>
    )
}