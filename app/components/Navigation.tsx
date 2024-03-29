import Link from 'next/link'
import React from 'react'
import { DataProvider } from '../data/DataProvider'

const Navigation = () => {
  const company: ChildPage[] = new DataProvider().getCompany();
  const facade: ChildPage[] = new DataProvider().getFacade();
  const elevator: ChildPage[] = new DataProvider().getElevator();
  const service: ChildPage[] = new DataProvider().getService();
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
          <a>Компания</a>
          <ul className="p-2">
            {company.map(v => <li key={v.path}><Link href={`/company/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </li>
        <li>
          <a>Обслуживание фасадов</a>
          <ul className="p-2">
          {facade.map(v => <li key={v.path}><Link href={`/facade-support-systems/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </li>
        <li>
          <a>Лифтовое оборудование</a>
          <ul className="p-2">
          <li><a>Общая информация</a></li>
          {elevator.map(v => <li key={v.path}><Link href={`/elevator-equipment/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </li>
        <li>
          <a>Наши услуги</a>
          <ul className="p-2">
          {service.map(v => <li key={v.path}><Link href={`/service/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </li>
        <li><a>Наши проекты</a></li>
        <li><a>Контакты</a></li>
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost text-xl">GEDA MAJOR</Link>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
        <details>
          <summary>Компания</summary>
          <ul className="p-2">
            {company.map(v => <li key={v.path}><Link href={`/company/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Обслуживание фасадов</summary>
          <ul className="p-2">
          {facade.map(v => <li key={v.path}><Link href={`/facade-support-systems/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Лифтовое оборудование</summary>
          <ul className="p-2">
          {elevator.map(v => <li key={v.path}><Link href={`/elevator-equipment/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Наши услуги</summary>
          <ul className="p-2">
          {service.map(v => <li key={v.path}><Link href={`/service/${v.path}`}>{v.name}</Link></li>)}
          </ul>
        </details>
      </li>
      <li><a>Наши проекты</a></li>
      <li><Link href="/contacts">Контакты</Link></li>
    </ul>
  </div>
  <div className="navbar-end"></div>
</div>
  )
}

export default Navigation