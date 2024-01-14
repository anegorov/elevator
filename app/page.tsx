import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Home() {
  return (
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://dekot21.ru/wp-content/uploads/a/e/f/aef4e6cb08580555bed2f36a31ac763d.jpeg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    
<div className="card-normal w-96 glass">
  <figure><img src="https://tetrastroy.net/wp-content/uploads/2019/10/rm-qvk9hzkyudl0rcxvyq-paipo.jpeg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">СОФ</h2>
    <p>Системы обслуживания фасадов</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Подробнее</button>
    </div>
  </div>
</div>

<div className="card-normal w-96 glass">
  <figure><img src="https://press.ocenin.ru/wp-content/uploads/2020/05/157.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Лифтовое оборудование</h2>
    <p>Лифты, эскалаторы, отделка.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Подробнее</button>
    </div>
  </div>
</div>

<div className="card-normal w-96 glass">
  <figure><img src="https://sc01.alicdn.com/kf/HTB16.H2OkvoK1RjSZPfq6xPKFXaA/231887548/HTB16.H2OkvoK1RjSZPfq6xPKFXaA.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Наши услуги</h2>
    <p>Аренда и Сервис</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Подробнее</button>
    </div>
  </div>
</div>

  </div>
</div>

  )
}
