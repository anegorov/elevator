import React from 'react'

const ContactsPage = () => {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      
      <div className="flex flex-col w-full border-opacity-50">
      
      
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
        <section className="map">
        <div className="container">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.437401840536!2d37.49660817698629!3d55.76827477308993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54912e17a6be5%3A0xf77283453e221e46!2zMy3QuSDQodC40LvQuNC60LDRgtC90YvQuSDQv9GALdC0LCA0INC60L7RgNC_0YPRgSAxLCDQnNC-0YHQutCy0LAsIDEyMzMwOA!5e0!3m2!1sru!2sru!4v1705132074994!5m2!1sru!2sru" width="600" height="450" loading="lazy"></iframe>
        </div>
        </section>
        </figure>
        <div className="card-body">
        <h2 className="card-title">Центральный офис</h2>


        <div className="overflow-x-auto">
  <table className="table">
    
    <tbody>
      <tr>
        <td>Адрес</td>
        <td>Москва, 123308, ПРОЕЗД 3-Й СИЛИКАТНЫЙ, Д. 4, К. 1, ЭТАЖ 2, ПОМЕЩ. III, КОМ. 22, 23</td>
      </tr>
      <tr>
        <td>Технический отдел</td>
        <td>+74993944911</td>
      </tr>
      <tr>
        <td>Отдел продаж</td>
        <td>+74993944911</td>
      </tr>
      <tr>
        <td>Бухгалтерия</td>
        <td>+79167433077</td>
      </tr>
      <tr>
        <td>EMail</td>
        <td>info@geda-major.ru</td>
      </tr>
    </tbody>
  </table>
</div>

        <div className="card-actions justify-end">
        </div>
        </div>
      </div>
      
    </div>
    </div>
    
  )
}

export default ContactsPage