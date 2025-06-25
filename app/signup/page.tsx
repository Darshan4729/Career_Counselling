"use client"

import { AuthForm } from '@/components/auth/AuthForm';
import { SocialLogin } from '@/components/auth/SocialLogin';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SignUpPage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="flex-1 hidden lg:block relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20"
        />
        <div className="relative h-full flex items-center justify-center p-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Welcome to Career Connect</h1>
            <p className="text-xl text-white/80 mb-8">
              Join our community of professionals and students
              ready to explore their career paths
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-3xl font-bold text-center text-white">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-center text-white/80">
                Or{' '}
                <a href="/signin" className="font-medium text-white hover:text-blue-400">
                  sign in to your account
                </a>
              </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white/95 backdrop-blur-sm py-12 px-6 shadow-lg rounded-2xl sm:px-12">
                <AuthForm mode="signup" />
                
                <SocialLogin />

                <div className="mt-8">
                  <p className="text-center text-sm text-gray-600">
                    By signing up, you agree to our{' '}
                    <a href="/terms" className="font-medium text-blue-600 hover:text-blue-700">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="font-medium text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
