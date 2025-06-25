'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm shadow-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">CareerCompass</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-slate-300 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/careers" className="text-slate-300 hover:text-primary transition-colors">
            Career Paths
          </Link>
          <Link href="/resources" className="text-slate-300 hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">
            Contact
          </Link>
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline" className="mr-2">
                  Dashboard
                </Button>
              </Link>
              <Button variant="destructive" onClick={handleSignOut}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button variant="outline" className="mr-2">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
