import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.png"
import { useNavigate } from 'react-router-dom';
import { submitFeedback } from "../../api/userApi";

function Footer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showThanksPopup, setShowThanksPopup] = useState(false);

  const handleFormSubmit = async () => {
    try {
      const data = { name, email, message };
      const response = await submitFeedback(data)
      if (response.status === 200) {
        setShowThanksPopup(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error)
    }
  }
  const closeThanksPopup = () => {
    window.scrollTo(0, 0);
    setShowThanksPopup(false);
  }

  return (
    <>
      <div className="max-w-1xl mx-auto mt-[em]">
        <footer className="p-4 sm:p-6 bg-gray-800 shadow-md rounded-t-xl">
          <div className=" md:mb-0 ">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="mr-2 h-[4em] w-[5em]"
                alt="FlowBite Logo"
              />
            </a>
          </div>

          <div className="md:flex md:justify-start">
            <div className="ml-[6em] relative bottom-16">
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                <div className="">
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    link
                  </h3>
                  <ul>
                    <li className="">
                      <Link
                        to="/pricing"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Price
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        rel="nofollow"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/works"
                        rel="nofollow"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Our works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Catalog"
                        rel="nofollow"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Catalog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/transform"
                        rel="nofollow"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Transformation
                      </Link>
                    </li>




                  </ul>
                </div>

                <div className="relative md:right-[8em] lg:right-[8em]">
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white ">
                    Follow us
                  </h3>
                  <ul>
                    <li className="">
                      <a
                        href="http://t.me/gabiskin"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Telegram                                        </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@gabiskin"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Tiktok
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="https://youtube.com/@gabiskin_?si=OKwEAlr-AWUkGtS0"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        Youtube                                        </a>
                    </li>
                    <li>
                      <a
                        href="http://instagram.com/gabiskin_"
                        target="_blank"
                        className="text-gray-600 hover:underline dark:text-gray-400"
                      >
                        instagram                                        </a>
                    </li>

                  </ul>
                </div>

                <div className="relative right-[6em] lg:right-[25em] hidden lg:block">
                  <iframe
                    src="https://maps.google.com/maps?q=8.89652811296649,38.7720541236866&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="h-[17em]    lg:w-[50em] rounded-t-lg"
                    frameBorder={0}
                    allowFullScreen=""
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="w-full mx-auto lg:hidden">
            <iframe
              src="https://maps.google.com/maps?q=8.89652811296649,38.7720541236866&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[17em] w-full rounded-t-lg"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
          <>

            <section className="container mt-5 lg:mt-0">
              <h2 className="text-gray-300 flex items-center text-center justify-center my-5">Any questions , feedback about website or ordering process you can leave here
              </h2>
              <div className="items-center mx-auto lg:max-w-3xl">
                <div className="text-center md:max-w-xl lg:max-w-3xl">
                  <h2 className="px-6 text-3xl font-bold">Contact us</h2>
                </div>
              </div>

              <div className="lg:flex flex-wrap justify-center">
                <div className="">

                  <form className=" lg:flex justify-between gap-10 w-full mt-4">
                    <div cl className="lg:w-60">
                      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
                      <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="lg:w-60">
                      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                      <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="lg:w-60">
                      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                      <textarea
                        type="tex" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                      className="mt-8 rounded bg-primary h-[5em] lg:w-20 w-full text-xs font-medium uppercase leading-normal text-white bg-blue-600"
                      onClick={handleFormSubmit}
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {showThanksPopup && (
              <div
                id="toast-success"
                className="fixed top-[4.5em]  right-3 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:bg-green-400"
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="sr-only">Check icon</span>
                </div>
                <div className="ms-3 text-sm font-normal text-white">Thank you for your message!</div>
                <button
                  type="button"
                  id="toast-success"  // Adjusted to match the ID
                  className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-success"  // Adjusted to match the ID
                  aria-label="Close"
                  onClick={closeThanksPopup}  // Close the popup on button click
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>

          <hr className="my- border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-left">
            <span className="text-sm mt-4  text-gray-500 text-left dark:text-gray-400 flex  ">
              Developed by {" "}
              <a
                href="https://muka10.com"
                target="_blank"
                className="underline ml-1 flex"
              >
                muktar
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>


  );
}

export default Footer;
