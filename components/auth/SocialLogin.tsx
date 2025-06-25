"use client"

import { Button } from '@/components/ui/button'
import { GoogleIcon, FacebookIcon, TwitterIcon } from '@/components/icons'

export function SocialLogin() {
  const handleGoogleSignIn = async () => {
    // Implement Google sign in logic here
    console.log('Google sign in clicked')
  }

  const handleFacebookSignIn = async () => {
    // Implement Facebook sign in logic here
    console.log('Facebook sign in clicked')
  }

  const handleTwitterSignIn = async () => {
    // Implement Twitter sign in logic here
    console.log('Twitter sign in clicked')
  }

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white/95 text-gray-600">
            Or continue with
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div>
          <Button 
            variant="outline" 
            className="w-full justify-center hover:bg-red-500/10 hover:text-red-600 hover:border-red-600 transition-all duration-200"
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon className="h-5 w-5 mr-2" />
            Google
          </Button>
        </div>
        <div>
          <Button 
            variant="outline" 
            className="w-full justify-center hover:bg-blue-600/10 hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
            onClick={handleFacebookSignIn}
          >
            <FacebookIcon className="h-5 w-5 mr-2" />
            Facebook
          </Button>
        </div>
        <div>
          <Button 
            variant="outline" 
            className="w-full justify-center hover:bg-blue-400/10 hover:text-blue-400 hover:border-blue-400 transition-all duration-200"
            onClick={handleTwitterSignIn}
          >
            <TwitterIcon className="h-5 w-5 mr-2" />
            Twitter
          </Button>
        </div>
      </div>
    </div>
  )
}
