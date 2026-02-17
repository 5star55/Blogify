'use client'

import React, { Suspense, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const BASE_URL = 'https://social-media-app-xhv2.onrender.com'
const LOGIN_ENDPOINT = `${BASE_URL}/api/auth/sign-in/email`
const SIGNUP_ENDPOINT = `${BASE_URL}/api/auth/sign-up/email`

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function UserAuthContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const requestedTab = searchParams.get('tab')
  const initialTab = requestedTab === 'Sign-up' ? 'Sign-up' : 'Login'

  const [activeTab, setActiveTab] = useState(initialTab)

  // Login form state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // Signup form state
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const canSubmitLogin = useMemo(() => {
    return isValidEmail(loginEmail) && loginPassword.length >= 6
  }, [loginEmail, loginPassword])

  const canSubmitSignup = useMemo(() => {
    return (
      isValidEmail(signupEmail) &&
      signupPassword.length >= 6 &&
      confirmPassword.length >= 6 &&
      signupPassword === confirmPassword &&
      signupName.trim().length > 0
    )
  }, [signupEmail, signupPassword, confirmPassword, signupName])

  // LOGIN
  async function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (!canSubmitLogin) {
      setErrorMessage('Enter a valid email and a password with at least 6 characters.')
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginEmail.trim().toLowerCase(),
          password: loginPassword,
        }),
        credentials: 'include', // needed if API uses cookies for session
      })

      let data: any = {}
      try {
        data = await response.json()
      } catch {}

      if (!response.ok) {
        setErrorMessage(data?.message || data?.error || 'Login failed. Check your credentials.')
        return
      }

      setSuccessMessage('Logged in successfully.')
      router.push('/post')
    } catch {
      setErrorMessage('Network error. Try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // SIGNUP
  async function handleSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (!canSubmitSignup) {
      setErrorMessage('Use a valid email, matching passwords, and at least 6 characters.')
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch(SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail.trim().toLowerCase(),
          password: signupPassword,
        }),
        credentials: 'include',
      })

      let data: any = {}
      try {
        data = await response.json()
      } catch {}

      if (!response.ok) {
        setErrorMessage(data?.message || data?.error || 'Sign-up failed. Try a different email.')
        return
      }

      setSuccessMessage('Account created successfully.')
      router.push('/post')
    } catch {
      setErrorMessage('Network error. Try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full px-4 mt-10'>
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value)
          setErrorMessage('')
          setSuccessMessage('')
        }}
        className='mx-auto w-full max-w-[1000px]'
      >
        <TabsList className='mx-auto h-14 rounded-2xl bg-sky-100 p-1.5'>
          <TabsTrigger
            value='Login'
            className='h-full rounded-xl px-8 text-base font-semibold data-active:bg-sky-600 data-active:text-white'
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value='Sign-up'
            className='h-full rounded-xl px-8 text-base font-semibold data-active:bg-sky-600 data-active:text-white'
          >
            Sign-Up
          </TabsTrigger>
        </TabsList>

        {/* LOGIN FORM */}
        <TabsContent
          value='Login'
          className='mx-auto mt-8 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
        >
          <h2 className='text-xl font-semibold text-slate-900'>Welcome back</h2>
          <p className='mt-1 text-sm text-slate-500'>Log in with your email and password.</p>

          <form onSubmit={handleLoginSubmit} className='mt-6 space-y-4'>
            <div>
              <label htmlFor='login-email' className='mb-1 block text-sm font-medium text-slate-700'>
                Email
              </label>
              <Input
                id='login-email'
                type='email'
                autoComplete='email'
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder='you@example.com'
                required
              />
            </div>

            <div>
              <label htmlFor='login-password' className='mb-1 block text-sm font-medium text-slate-700'>
                Password
              </label>
              <Input
                id='login-password'
                type='password'
                autoComplete='current-password'
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder='At least 6 characters'
                minLength={6}
                required
              />
            </div>

            {errorMessage && <p className='text-sm text-red-600'>{errorMessage}</p>}
            {successMessage && <p className='text-sm text-green-600'>{successMessage}</p>}

            <Button type='submit' className='w-full' disabled={isSubmitting || !canSubmitLogin}>
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </Button>
          </form>
        </TabsContent>

        {/* SIGNUP FORM */}
        <TabsContent
          value='Sign-up'
          className='mx-auto mt-8 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
        >
          <h2 className='text-xl font-semibold text-slate-900'>Create your account</h2>
          <p className='mt-1 text-sm text-slate-500'>Sign up using email and password.</p>

          <form onSubmit={handleSignupSubmit} className='mt-6 space-y-4'>
            <div>
              <label htmlFor='signup-name' className='mb-1 block text-sm font-medium text-slate-700'>
                Name
              </label>
              <Input
                id='signup-name'
                type='text'
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                placeholder='Enter your name'
                required
              />
            </div>

            <div>
              <label htmlFor='signup-email' className='mb-1 block text-sm font-medium text-slate-700'>
                Email
              </label>
              <Input
                id='signup-email'
                type='email'
                autoComplete='email'
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder='you@example.com'
                required
              />
            </div>

            <div>
              <label htmlFor='signup-password' className='mb-1 block text-sm font-medium text-slate-700'>
                Password
              </label>
              <Input
                id='signup-password'
                type='password'
                autoComplete='new-password'
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder='At least 6 characters'
                minLength={6}
                required
              />
            </div>

            <div>
              <label htmlFor='signup-confirm-password' className='mb-1 block text-sm font-medium text-slate-700'>
                Confirm Password
              </label>
              <Input
                id='signup-confirm-password'
                type='password'
                autoComplete='new-password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Repeat your password'
                minLength={6}
                required
              />
            </div>

            {errorMessage && <p className='text-sm text-red-600'>{errorMessage}</p>}
            {successMessage && <p className='text-sm text-green-600'>{successMessage}</p>}

            <Button type='submit' className='w-full' disabled={isSubmitting || !canSubmitSignup}>
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className='w-full px-4 mt-10' />}>
      <UserAuthContent />
    </Suspense>
  )
}
