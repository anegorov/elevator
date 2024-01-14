import React from 'react'
import { DataProvider } from '../data/DataProvider';
import Link from 'next/link';

const Footer = () => {
  const company: ChildPage[] = new DataProvider().getCompany();
  const facade: ChildPage[] = new DataProvider().getFacade();
  const elevator: ChildPage[] = new DataProvider().getElevator();
  const service: ChildPage[] = new DataProvider().getService();
  return (
<footer className="footer p-10 bg-neutral text-neutral-content">
<nav>
    <header className="footer-title">Компания</header> 
    <a className="link link-hover">Контакты</a>
    <a className="link link-hover">Проекты</a>
    {company.map(v => <Link key={v.path} className="link link-hover" href={`/company/${v.path}`}>{v.name}</Link>)}
  </nav> 
  <nav>
    <header className="footer-title">Обслуживание фасадов</header> 
    {facade.map(v => <Link key={v.path} className="link link-hover" href={`/facade-support-systems/${v.path}`}>{v.name}</Link>)}
  </nav> 
  <nav>
    <header className="footer-title">Лифтовое оборудование</header> 
    {elevator.map(v => <Link key={v.path} className="link link-hover" href={`/elevator-equipment/${v.path}`}>{v.name}</Link>)}
  </nav>
  <nav>
    <header className="footer-title">Наши услуги</header> 
    {service.map(v => <Link key={v.path} className="link link-hover" href={`/service/${v.path}`}>{v.name}</Link>)}
  </nav>
</footer>
  )
}

export default Footer