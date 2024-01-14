'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { DataProvider } from '../data/DataProvider';
import Link from 'next/link';

const Breadcrumbs = () => {
  const pathname: string[] = usePathname().substring(1, usePathname().length).split("/");
  return (
    <div className="text-sm breadcrumbs p-6">
    <ul>
      <li><Link href="/">Главная</Link></li> 
      {pathname.length >= 1 ? <li><a>{new DataProvider().getMenuName(pathname[0])}</a></li> : <></>}
      {pathname.length === 2 ? <li><a>{new DataProvider().getSubNameByPath(pathname[0], pathname[1])}</a></li> : <></>}
    </ul>
    </div>
  )
}

export default Breadcrumbs