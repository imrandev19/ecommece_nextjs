'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
import Container from './Container';

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== "");

  const breadcrumb = pathSegments.map((item, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return {
      name: capitalize(item.replace(/-/g, ' ')),
      href
    };
  });

  return (
    <div className='w-full border-2'>
      <Container>
        <ul className='flex gap-2 items-center'>
          <li className='list-none flex gap-2'>
            <Link href="/" className='flex gap-2 items-center'>
              <IoHomeOutline /> Home
            </Link>
          </li>

          {breadcrumb.map((item, idx) => {
            const isLast = idx === breadcrumb.length - 1; // check if last item
            return (
              <li key={idx} className='list-none flex items-center gap-2'>
                <FaGreaterThan />
                {isLast ? (
                  <span className='text-gray-500'>{item.name}</span> // plain text for current page
                ) : (
                  <Link href={item.href}>{item.name}</Link> // clickable for others
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default Breadcrumb;
