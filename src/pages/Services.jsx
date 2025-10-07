import React from 'react'
const Services = ({ showServices = false }) => {
    return (
        <div className={`fixed inset-0 bg-black text-white z-40 transition-all duration-1000 ease-out ${
            showServices ? 'transform translate-y-0' : 'transform translate-y-full'
        }`}>
            {/* Scrollable content container */}
            <div className="h-screen overflow-y-auto">
                {/* White Boxes - Desktop Only */}
                <div className="block relative min-h-screen">
                    <div className="flex fixed top-0 md:absolute w-full md:inset-0 justify-center">
                        <div className="flex gap-[5px]">
                            {/* Box 1 - Branding & Identity */}
                            <div className={`flex flex-col items-center mt-[37px] md:mt-[80px] transition-all duration-500 delay-300 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[100vh] opacity-0'
                            }`}>
                                <div className="w-[90px] h-[100px] md:w-[300px] md:h-[340px] bg-white border border-gray-200 shadow-lg"></div>
                                <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">Branding & Identity</p>
                            </div>

                            {/* Box 2 - UI UX Designing */}
                            <div className={`flex flex-col items-center mt-[100px] md:mt-[286px] transition-all duration-500 delay-400 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[100vh] opacity-0'
                            }`}>
                                <div className="w-[87px] h-[65px] md:w-[290px] md:h-[215px] bg-white border border-gray-200 shadow-lg"></div>
                                <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">UI UX Designing</p>
                            </div>

                            {/* Box 3 - Web Development */}
                            <div className={`flex flex-col items-center mt-[70px] md:mt-[192px] transition-all duration-500 delay-500 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[100vh] opacity-0'
                            }`}>
                                <div className="w-[87px] h-[120px] md:w-[290px] md:h-[395px] bg-white border border-gray-200 shadow-lg"></div>
                                <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">Web Development</p>
                            </div>

                            {/* Box 4 - Digital Marketing */}
                            <div className={`flex flex-col items-center mt-[43px] md:mt-[101px] transition-all duration-500 delay-600 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[100vh] opacity-0'
                            }`}>
                                <div className="w-[87px] h-[100px] md:w-[290px] md:h-[330px] bg-white border border-gray-200 shadow-lg"></div>
                                <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">Digital Marketing</p>
                            </div>

                            {/* Box 5 - Motion Graphics - Hidden on mobile */}
                            <div className={`hidden md:flex flex-col items-center mt-[308px] transition-all duration-500 delay-700 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[100vh] opacity-0'
                            }`}>
                                <div className="w-[280px] h-[260px] bg-white border border-gray-200 shadow-lg"></div>
                                <p className="text-white text-[14px] font-alata mt-2">Motion Graphics</p>
                            </div>
                        </div>
                    </div>

                    {/* OUR SERVICES Text - Positioned below boxes */}
                    <div className="absolute top-[250px] md:top-[650px] left-1/2 transform -translate-x-1/2 w-full px-10">
                        <div className="sticky top-[250px] md:top-0 z-5 flex flex-col items-center">

                        {/* OUR */}
                            <h2 className={`text-white relative md:-left-72 -left-24 font-dela text-[50px] md:text-[150px] leading-none transition-all duration-700 delay-700 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[50px] opacity-0'
                            }`}>OUR</h2>

                            {/* SERVICES + small text */}
                            <div className="flex items-start justify-center w-full relative">
                                <h2 className={`text-white font-dela text-[50px] md:text-[150px] leading-none transition-all duration-700 delay-700 ${
                                    showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[50px] opacity-0'
                                }`}>SERVICES</h2>

                                {/* Small text aligned to end of SERVICES */}
                                <span className={`absolute md:right-20 right-7 text-white -top-8 md:top-0 font-alata text-[8px] md:text-sm leading-snug max-w-[200px] transition-all duration-500 delay-400 ${
                                    showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[30px] opacity-0'
                                }`}>
                                    A Comprehensive<br />approach yields great<br />results
                                </span>
                            </div>
                        </div>

                        {/* Services List - Directly below OUR SERVICES */}
                        <div className="relative mt-7 md:mt-16 w-full">
                            {/* 01 - Branding & Identity */}
                            <div className={`sticky top-[400px] md:top-[450px] z-10 flex items-center justify-center gap-8 transition-all duration-700 delay-700 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 01 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">01</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Branding & Identity</h3>
                                                <p className="text-[24px] leading-tight">
                                                    We create powerful brand identities that go beyond logos, shaping visuals, voice, and strategy to help your business stand out and connect with your audience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number + side lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">01</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">
                                                Branding & Identity
                                            </h3>
                                            <p className="text-[12px] leading-tight">
                                                We create powerful brand identities that go beyond logos, shaping
                                                visuals, voice, and strategy to help your business stand out and
                                                connect with your audience.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>


                            {/* 02 - Business Consulting & Scaling Solutions */}
                            <div className={`sticky top-[400px] md:top-[450px] z-20 flex items-center justify-center gap-8 transition-all duration-700 delay-800 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 02 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">02</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">
                                                    Business Consulting & Scaling Solutions
                                                </h3>
                                                <p className="text-[24px] leading-tight">
                                                    We guide businesses from idea to growth, offering strategic insights, process optimization, and scalable solutions that help companies launch, adapt, and expand successfully.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number + side lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">02</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">
                                                Business Consulting & Scaling Solutions
                                            </h3>
                                            <p className="text-[12px] leading-tight">
                                                We guide businesses from idea to growth, offering strategic insights,
                                                process optimization, and scalable solutions that help companies launch,
                                                adapt, and expand successfully.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>


                            {/* 03 - UI UX Designing */}
                            <div className={`sticky top-[400px] md:top-[450px] z-30 flex items-center justify-center gap-8 transition-all duration-700 delay-900 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 03 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">03</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">UI UX Designing</h3>
                                                <p className="text-[24px] leading-tight">
                                                    We design intuitive, user-friendly, and visually engaging digital experiences that enhance usability, boost engagement, and turn visitors into loyal customers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number with lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">03</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">UI UX Designing</h3>
                                            <p className="text-[12px] leading-tight">
                                                We design intuitive, user-friendly, and visually engaging digital experiences
                                                that enhance usability, boost engagement, and turn visitors into loyal customers.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>


                            {/* 04 - Web Development */}
                            <div className={`sticky top-[400px] md:top-[450px] z-40 flex items-center justify-center gap-8 transition-all duration-700 delay-1000 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 04 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">04</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Web Development</h3>
                                                <p className="text-[24px] leading-tight">
                                                    We build fast, secure, and scalable websites tailored to your business needs, combining modern technology with seamless functionality to deliver powerful online experiences.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number with lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">04</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">Web Development</h3>
                                            <p className="text-[12px] leading-tight">
                                                We build fast, secure, and scalable websites tailored to your business needs,
                                                combining modern technology with seamless functionality to deliver powerful
                                                online experiences.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>


                            {/* 05 - App Development */}
                            <div className={`sticky top-[400px] md:top-[450px] z-50 flex items-center justify-center gap-8 transition-all duration-700 delay-1100 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 05 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">05</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">App Development</h3>
                                                <p className="text-[24px] leading-tight">
                                                    We create high-performance, user-centric mobile and web applications that combine sleek design with powerful functionality to drive engagement and business growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number with lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">05</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">App Development</h3>
                                            <p className="text-[12px] leading-tight">
                                                We create high-performance, user-centric mobile and web applications
                                                that combine sleek design with powerful functionality to drive
                                                engagement and business growth.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>


                            {/* 06 - Digital Marketing & Strategy */}
                            <div className={`sticky top-[400px] md:top-[450px] z-[110] flex items-center justify-center gap-8 transition-all duration-700 delay-1200 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 06 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">06</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Digital Marketing & Strategy</h3>
                                                <p className="text-[24px] leading-tight">
                                                    We craft data-driven marketing strategies that boost your online presence and drive measurable growth through SEO, social media, and targeted campaigns.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number with lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">06</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">
                                                Digital Marketing & Strategy
                                            </h3>
                                            <p className="text-[12px] leading-tight">
                                                We craft data-driven marketing strategies that boost your online presence
                                                and drive measurable growth through SEO, social media, and targeted campaigns.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>

                            {/* 07 - Video Production */}
                            <div className={`sticky top-[400px] md:top-[450px] z-[110] flex items-center justify-center gap-8 transition-all duration-700 delay-1300 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 07 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">07</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Video Production</h3>
                                                <p className="text-[24px] leading-tight">
                                                    We produce high-quality videos and motion graphics that tell your brand's story, engage audiences, and create lasting impact across digital platforms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number with lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">07</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">Video Production</h3>
                                            <p className="text-[12px] leading-tight">
                                                We produce high-quality videos and motion graphics that tell your brand's story,
                                                engage audiences, and create lasting impact across digital platforms.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>

                            {/* 08 - Motion Graphics */}
                            <div className={`sticky top-[400px] md:top-[450px] mb-0 md:mb-[200px] z-[120] flex items-center justify-center gap-8 transition-all duration-700 delay-1400 ${
                                showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                            }`}>
                                <div className="hidden md:block">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                        <div className="flex items-center justify-center gap-8">
                                            {/* Left line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* 08 Number */}
                                            <div className="font-alumni-sans text-[400px] leading-none text-white">08</div>

                                            {/* Right line */}
                                            <div className="w-[90px] h-px bg-white"></div>

                                            {/* Description */}
                                            <div className="max-w-[500px] ml-8">
                                                <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Motion Graphics</h3>
                                                <p className="text-[24px] leading-tight">
                                                    We design dynamic animations that bring ideas to life, simplify complex concepts, and captivate audiences with visually striking storytelling.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:hidden">
                                    <div className="bg-black px-10 py-8 rounded-lg">
                                    <div className="flex flex-col items-center">
                                        {/* Number with lines */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Left line */}
                                            <div className="w-[30px] h-px bg-white"></div>

                                            {/* Number */}
                                            <div className="font-alumni-sans text-[200px] leading-none text-white">08</div>

                                            {/* Right line */}
                                            <div className="w-[30px] h-px bg-white"></div>
                                        </div>

                                        {/* Description */}
                                        <div className="max-w-[500px] mt-8 text-center">
                                            <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">Motion Graphics</h3>
                                            <p className="text-[12px] leading-tight">
                                                We design dynamic animations that bring ideas to life, simplify complex concepts,
                                                and captivate audiences with visually striking storytelling.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
