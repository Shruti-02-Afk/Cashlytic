import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'



const Header = async () => {
    await checkUser();
    return (
        <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50'>
            <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
                <Link href="/">
                    <Image src={"/nLogo.png"}
                        alt="cashlytic logo"
                        height={64}
                        width={160}
                        className='object-contain max-h-16 scale-150'
                    />
                </Link>

                <div className='flex items-center space-x-4'>
                    <SignedIn>
                        <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className='hidden md:inline'>Dashboard</span>
                            </Button>
                        </Link>

                        <Link href={"/transaction/create"} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                            <Button className="flex items-center gap-2">
                                <PenBox size={18} />
                                <span className='hidden md:inline'>Add Transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl='/dashboard'>
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-20 h-20 rounded-full",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav >
        </div>

    )
}

export default Header
