import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
  <Link href="/" className="btn btn-ghost text-xl">GEDA MAJOR</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li>
        <details>
          <summary>Компания</summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>История</a></li>
            <li><a>Европейские стандарты</a></li>
            <li><a>Сертификаты</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Обслуживание фасадов</summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Системы обслуживания фасадов</a></li>
            <li><a>Монорельсовые системы</a></li>
            <li><a>Подвесные рабочие платформы</a></li>
            <li><a>Подвесные строительные леса</a></li>
            <li><a>Портативные системы</a></li>
            <li><a>Фасадные лестницы</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Лифтовое оборудование</summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Общая информация</a></li>
            <li><a>Отделка кабин лифтов</a></li>
            <li><a>Технические характеристики лифтов</a></li>
            <li><a>Технические характеристики эскалаторов</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Наши услуги</summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Аренда</a></li>
            <li><a>Проектирование и дизайн</a></li>
            <li><a>Сервис</a></li>
            <li><a>Дополнительные услуги и работы</a></li>
          </ul>
        </details>
      </li>
      <li><a></a></li>
      <li><Link href="/projects">Наши проекты</Link></li>
      <li><Link href="/contacts">Контакты</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navigation