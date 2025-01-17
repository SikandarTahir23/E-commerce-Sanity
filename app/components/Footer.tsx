import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link
                    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                    href="#"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">

                        <circle cx="12" cy="12" r="10" fill="currentColor" className="text-indigo-500" />

                        <path d="M8 10v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6H8z" fill="white" />
                        <path d="M9 10a3 3 0 0 1 6 0" stroke="white" />
                    </svg>
                    <span className="ml-3 text-xl">Sikandar Tahir</span>
                </Link>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link className="text-gray-500" href="https://www.facebook.com/Arain.Boyz380" target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </Link>
                    <Link
                        className="ml-3 text-gray-500"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </Link>
                    <Link
                        className="ml-3 text-gray-500"
                        href="https://www.linkedin.com/in/sikandar-tahir-356a56273/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </Link>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
