export default function Header () {
    return (
        <div className="bg-[#F5F7FA] h-auto md:h-[600px] flex items-center">
            <div className="container mx-auto max-w-[1150px] py-[95px] relative flex flex-col md:flex-row md:justify-between md:items-center md:pt-0">
                <div>
                    <h1 className="text-[64px] font-semibold text-[#4D4D4D] leading-[76px]">Lessons and insights<br /><span className="text-[#4CAF4F]">from 8 years</span></h1>
                    <p className="text-[#717171] mt-[15px] leading-[24px]">Where to grow your business as a photographer: site or social media?</p>
                    <a href="#" className="green-btn mt-[30px] w-[130px] h-[50px]">Register</a>
                </div>
                <div><img src="/images/header.png" /></div>
            </div>
        </div>
    )
}