import React, { useEffect } from "react";
import About1 from "../../public/images/ourWork/about1.png"
import About2 from "../../public/images/ourWork/about2.png"
import About3 from "../../public/images/ourWork/about3.png"
import About4 from "../../public/images/ourWork/about4.png"
import About5 from "../../public/images/ourWork/about5.png"
import About6 from "../../public/images/ourWork/about6.png"
import Gabi from "../../public/images/ourWork/Gabi.jpg"
const About = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-white mt-[3em] 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-800 ">Gabiskin, located in Addis Ababa, is a renowned store known for its extensive selection of phone
                        and laptop skins. Our laptop skins serve as a protective shield, safeguarding devices against
                        scratches and minor damages. Additionally, our premium laptop skins offer users the opportunity
                        to personalize their laptops with flair and style. With nationwide delivery services, we ensure that
                        our products reach customers all across Ethiopia. We pride ourselves on our ability to create
                        custom designs tailored to individual preferences
                        <br />
                        <br />
                        Since our establishment on August 6, 2022 G.C., Gabiskin has expanded its footprint with over 10
                        agents positioned strategically throughout the country. Our reputation is built on the pillars of
                        exceptional service quality, excellent customer support, prompt delivery, and the use of durable
                        materials. In addition to our laptop skins, Gabiskin is also highly regarded for its collection of mini
                        stickers (small cut out sticker). These versatile stickers can be applied to laptops, phones,
                        notebooks, and more. With a vast array of 500+ alternative designs to choose from, customers can
                        find the perfect sticker to suit their personal aesthetic
                        <br />
                        <br />
                        With an extensive presence at various bazaars and exhibitions, we have cultivated a substantial
                        customer base in Addis Ababa. Our commitment to customer satisfaction is unparalleled, as we
                        strive to ensure that every individual is fully content with our products. While initially operating
                        solely in Addis Ababa, we have now expanded our reach to deliver our exceptional offerings to all
                        cities and regions within the country. Moreover, we have ambitious plans to venture into
                        international markets and export our top-quality products abroad
                    </p>
                </div>
                <div className= "rounded-lg w-full h-[40em] lg:w-8/12 ">
                    <img className="w-full h-full" src={Gabi} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">The Team</h1>
                    <p className="font-normal text-base leading-6 text-gray-700 ">Our team is dedicated to providing our customers with the best possible service. We have a team
                        of experienced professionals who are passionate about laptop skins and stickers. We are committed
                        to providing our customers with high-quality products and excellent customer service. It is our
                        responsibility to ensure customer satisfaction by consistently meeting their needs in a timely and
                        efficient manner.
                        At our company, we prioritize delivering an exceptional customer experience. Our team consists
                        of skilled experts who share a genuine passion for laptop skins and stickers. We are fully devoted
                        to supplying our customers with top-notch products and unparalleled customer service. <br />
                        At our company, we prioritize delivering an exceptional customer experience. Our team consists
                        of skilled experts who share a genuine passion for laptop skins and stickers. We are fully devoted
                        to supplying our customers with top-notch products and unparalleled customer service
                    </p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Product feature
                    </h1>
                    <p className="font-normal text-lg leading-6 text-gray-700 ">Our laptop skins offer a number of benefits, including:
                        <ul className="list-disc pl-6 text-base">
                            <li className="mb-2">Scratch Protection: Our laptop skins are crafted from durable materials to shield your laptop from scratches and scuffs.</li>
                            <li className="mb-2">Personalization: Choose from a variety of designs for our laptop skins and mini stickers, allowing you to personalize your laptop to your unique taste.</li>
                            <li className="mb-2">Easy Application and Removal: Our laptop skins are designed to be easily applied and removed, giving you the flexibility to change them whenever you desire.</li>
                            <li className="mb-2">Water Resistant: Don't worry about your laptop skins getting damaged in the rain or snow – they are water-resistant.</li>
                            <li className="mb-2">Affordable Protection: Our laptop skins are budget-friendly, ensuring you can safeguard your laptop without breaking the bank.</li>
                            <li className="mb-2">Long-Lasting Colors: Enjoy vibrant colors that won't easily fade over time, allowing you to use our products as long as you want.</li>
                            <li className="mb-2">Free Delivery Nationwide: We provide free delivery for all orders across Ethiopia, ensuring a seamless shopping experience.</li>
                        </ul>
                    </p>
                </div>

                <div className="w-full lg:w-8/12  lg:mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={About1}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={About2}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={About3}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={About4}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={About5}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={About6}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Mission and vision
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-700 ">At our core, we are driven by a mission to revolutionize old laptops into stunning devices through
                        our extensive selection of beloved and personalized sticker designs. Therefore, every individual
                        can get their old laptop looking in to fabulous looking, everybody can get their laptop covered by
                        their favorite and customized sticker design. Our focus is on catering to the diverse needs of
                        customers throughout our home country by offering a wide variety of skin options. Looking ahead,
                        our vision encompasses establishing ourselves as one of the foremost distributors of laptop skins
                        in the entirety of Africa, leaving a lasting impact on the industry.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Business development manager
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-700 ">
                        We are currently proactively reaching out to companies, offering laptop wrapping services, and
                        actively hiring young individuals for this purpose. Our business development manager spearheads
                        the task of identifying potential customers and partners for Gabiskin.
                        <br />
                        Their primary responsibility involves identifying companies or organizations that could benefit
                        from our products, approaching them, and effectively communicating the value of our offerings to
                        encourage them to make a purchase. The business development manager is responsibility are to
                        find a potential buyer companies or organization, approach to them and explain about our products
                        and persuade them to but our product. Once a deal is finalized, our Gabiskin team takes charge of
                        wrapping their laptops. Hence, the main responsibility of our business development manager is to
                        identify potential clients, foster meetings with them, and facilitate partnerships.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">The social media manager
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-700 ">Our dedicated social media manager assumes the critical responsibility of managing and nurturing
                        our online presence across various social media platforms. They actively engage with our
                        customers, ensuring that their queries and concerns are promptly addressed. Additionally, the
                        social media manager plays a pivotal role in upholding and enhancing the public image of our
                        company, diligently working to maintain a positive and reputable online presence.</p>

                    <div className="mt-5">
                        <h1 className="text-2xl lg:text-4xl font-semibold leading-9 text-gray-700 pb-4">SOCIAL MEDIA LINK
                        </h1>
                        <ul className="text-blue-700 text-lg cursor-pointer underline w-1">
                            <a href="http://t.me/gabiskin"
                                target="_blank"
                            >
                                <li>Telegram</li>
                            </a>
                            <a href="https://www.tiktok.com/@gabiskin"
                                target="_blank"
                            >
                                <li>TikTok</li>
                            </a>
                            <a href="http://instagram.com/gabiskin_ethiopia"
                                target="_blank"
                            >
                                <li>Instagram</li>
                            </a>
                            <a href="http://m.facebook.com/gabiskin1"
                                target="_blank"
                            >
                                <li>Facebook</li>
                            </a>
                            <a href="https://g.page/r/CfSOeFFiE4QSEAI/"
                                target="_blank"
                            >
                                <li>Google</li>
                            </a>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
