'use client';
import { Open_Sans } from 'next/font/google';
import { forwardRef, useEffect, useRef } from 'react';

export const openSans = Open_Sans({ subsets: ['latin'] });

export interface OpenSansTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  style?: 'w400' | 'w500' | 'w600' | 'w700';
  fontSize?:
    | '12px'
    | '14px'
    | '16px'
    | '18px'
    | '24px'
    | '30px'
    | '35px'
    | '64px';
  className?: string;
}

export const OpenSansText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  OpenSansTextProps
>(
  (
    {
      text,
      tag = 'p',
      style = 'w400',
      fontSize = '14px',
      className = 'text-black',
    },
    ref,
  ) => {
    const textContent = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
      if (textContent.current) {
        textContent.current.innerHTML = text;
      }
    }, [text]);

    function getSize() {
      switch (fontSize) {
        case '12px':
          return 'text-xs';
        case '14px':
          return 'text-sm';
        case '16px':
          return 'text-sm sm:text-base';
        case '18px':
          return 'text-base sm:text-lg';
        case '24px':
          return 'text-xl sm:text-[24px]';
        case '30px':
          return 'text-[30px]';
        case '35px':
          return 'text-[35px]';
        case '64px':
          return 'text-[64px]';
      }
    }

    function getStyle() {
      switch (style) {
        case 'w400':
          return 'font-normal';
        case 'w500':
          return 'font-medium';
        case 'w600':
          return 'font-semibold';
        case 'w700':
          return 'font-bold';
      }
    }

    let globalStyle = `${
      openSans.className
    } ${getSize()} leading-normal ${getStyle()} antialiased`;

    function getTag() {
      switch (tag) {
        case 'h1':
          return (
            <h1 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h1>
          );
        case 'h2':
          return (
            <h2 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h2>
          );
        case 'h3':
          return (
            <h3 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h3>
          );
        case 'h4':
          return (
            <h4 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h4>
          );
        case 'h5':
          return (
            <h5 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h5>
          );
        case 'h6':
          return (
            <h6 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h6>
          );
        case 'p':
          return (
            <p ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </p>
          );
      }
    }

    return <>{getTag()}</>;
  },
);

OpenSansText.displayName = 'OpenSansText';
