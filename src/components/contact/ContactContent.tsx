'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import StarryBackground from '@/components/ui/StarryBackground';
import GoogleMap from '@/components/ui/GoogleMap';
import { FormEvent } from 'react';

export default function ContactContent() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Starry background */}
      <StarryBackground />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-x-6"
          >
            <Image
              src="/images/logo.svg"
              alt="CG Model Tek Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Get in touch with us to discuss your engineering needs. We're here to help bring your ideas to life.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col gap-8" id="follow">
              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">Location</h3>
                <address className="mt-2 text-base leading-7 text-gray-300 not-italic">
                  <p>CG Model Tek LLC</p>
                  <p>207 Big Springs Avenue</p>
                  <p>Tullahoma, TN 37388</p>
                </address>
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">Contact</h3>
                <dl className="mt-2 text-base leading-7 text-gray-300">
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a className="hover:text-white" href="tel:+19314552617">
                        (931) 455-2617
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="hover:text-white" href="mailto:info@cgmodeltek.com">
                        info@cgmodeltek.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900/5 shadow-2xl ring-1 ring-gray-400/10">
                <GoogleMap />
              </div>
              <div className="pt-2 flex items-center gap-3">
                <span className="text-white font-semibold">Follow us:</span>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">YouTube</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 