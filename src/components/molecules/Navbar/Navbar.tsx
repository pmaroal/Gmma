'use client'
import RoundedVertical from '@/components/atoms/Icons/RoundedVertical'
import { FreightText } from '@/components/atoms/Texts/FreightText'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Burger from '@/components/atoms/Icons/Burger'
import Button from '@/components/atoms/Button/Button'
import Link from 'next/link'
import Facebook from '@/components/atoms/Icons/Facebook'
import Instagram from '@/components/atoms/Icons/Instagram'
import LegalLinks from '../LegalLinks/LegalLinks'
import { LangProps } from '@/interfaces/lang-props'

export default function Navbar({ dict, lang }: LangProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [black, setBlack] = useState(false)
  //Create function to block scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const [scroll, setScroll] = useState(false)

  //Detect if there is scroll down to set up scroll true
  useEffect(() => {
    const windowName = window.location.pathname.split('/')[1]
    if (windowName === 'apartment') {
      setBlack(true)
    } else {
      setBlack(false)
    }
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
        setBlack(true)
      } else {
        setScroll(false)
        if (windowName === 'apartment') {
          setBlack(true)
        } else {
          setBlack(false)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const options = [
    { text: '~<i>Kalima</i> apartment', href: '/apartment/kalima' },
    { text: '~Casa <i>Kalma</i>', href: '/apartment/kalma' },
    { text: '~<i>Kallao</i> apartment', href: '/apartment/kallao' },
    { text: 'Reservar', href: '/#reservar-ahora' },
    { text: 'Contacto', href: '/contacto' },
  ]
  return (
    <>
      <div
        className={`fixed top-0 z-40 h-fit w-full ${scroll ? 'bg-white ' : 'bg-transparent'}`}
      >
        <nav
          className={`onHover max-w-8xl  relative mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-10 `}
        >
          {/* Villas lanzarote */}
          <FreightText
            text={'Villas en Lanzarote'}
            fontSize="16px|14px"
            style="medium"
            className={`max-w-16  ${black ? 'text-black' : 'text-white'}`}
          />
          {/* Logo */}
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}${black ? '/images/logo_black.avif' : '/images/logo.avif'} `}
            alt="Kalma Holiday logo"
            width={100}
            height={100}
            quality={100}
          />
          {/* Book + burger menu */}
          <div className="flex h-full w-fit items-center gap-9">
            {/* Book button */}
            <Button
              href={'/#reservar-ahora'}
              text={'Reserva ahora'}
              black={black}
              className="hidden sm:flex"
            />
            {/* Burger menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 flex h-10 w-10 items-center justify-center"
            >
              <Burger className="" black={black} />
            </button>
          </div>
        </nav>
      </div>
      {/* Background */}
      <div
        className={`onHover bg-dark-white/50 fixed inset-0 z-40 h-screen w-full backdrop-blur-sm ${isMenuOpen ? 'block' : 'hidden'}`}
      />
      {/* Menu */}
      <div
        className={`onHover fixed right-0 z-40 flex h-screen w-full sm:w-[485px] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Rounded */}
        <RoundedVertical className=" fill-dark-beige hidden h-screen w-full max-w-[32px] sm:flex" />
        {/* Content */}
        <div className="bg-dark-beige relative flex h-full w-full flex-col items-center justify-between gap-4 pb-28 pt-7 sm:pb-9 sm:pt-14">
          {/* Button for menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 mr-6 flex h-10 w-10 items-center justify-center self-end sm:mr-12"
          >
            <Burger className="" open black={black} />
          </button>
          {/* Logo */}
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/logo_black.avif'
            }
            alt="Kalma Holiday logo"
            width={172}
            height={64}
            quality={100}
          />
          {/* Options + social media */}
          <div className="flex h-fit w-fit flex-col gap-8 text-center sm:gap-10">
            {/* Options */}
            {options.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className="onHover hover:text-lighter-gray text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <FreightText
                  key={index}
                  text={option.text}
                  fontSize="24px|18px"
                  className=""
                />
              </Link>
            ))}
            {/* Social media */}
            <div className="flex h-fit w-full items-center justify-center gap-7">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/kalmaholiday"
                className="group"
              >
                <Facebook className="onHover group-hover:fill-lighter-gray fill-black" />
              </Link>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/kalmaholiday"
                className="group"
              >
                <Instagram className="onHover group-hover:fill-lighter-gray fill-black" />
              </Link>
            </div>
          </div>
          {/* Legal pages */}
          <LegalLinks />
        </div>
      </div>
    </>
  )
}
