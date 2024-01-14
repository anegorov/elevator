export class DataProvider {
    data: Page = {
        name: "Главная",
        path: "/",
        child: []
    }

    company: ChildPage[] = [
        {name: "История", path: "history", content: [
            "Системы Обслуживания Фасадов предназначены для мойки и обслуживания фасадов высотных зданий, количество которых увеличивается с развитием технологий строительства и в соответствии современными тенденциями архитектурного проектирования.",
            "Компания GEDA (Германия), основанная в 1929 году, является ведущим производителем строительного оборудования. Продукция и технологии GEDA пользуются огромным признанием в строительной отрасли, где имя GEDA стало символом доверия и качества.",
            "Компания MAJOR (Турция) имеет огромный опыт работы с фасадными системами, успешно реализовав множество проектов.",
            "Чтобы обеспечить своих клиентов надежным и эффективным решениями, компании объединили свои усилия, основав предприятие GEDA MAJOR.",
            "Завод GEDA MAJOR в Гебзе Диловасы располагается на площади 5000 кв. м. Компания производит оборудование согласно требованиям CE и EN1808 и поставляет свою продукцию на рынки всего Мира, в основном Турции, Ближнего и Дальнего Востока, Африки и Европы. Широкий спектр предлагаемых решений, огромный опыт, и профессиональный коллектив позволили компании стать одним из лидеров рынка.",
            "GEDA MAJOR предлагает своим клиентам комплексные индивидуальные решения без ущерба для безопасности и в соответствии с нормами и стандартами качества EN и ГОСТ. С нашим богатым опытом в дизайне (разработке) и производстве мы можем дать нашим клиентам наилучшие предложения, учитывая все их пожелания.",
            "На этапе предложения все запросы рассматриваются как первоочередные и направлены на то, чтобы предоставить все необходимые данные клиентам. (Концепцию проекта, весовые характеристики, нагрузки, расположение на планах здания и т. д.)",
            "После того, как наши предложения согласованы с клиентами, отдел производственного проектирования моделирует утвержденные системы СОФ в программах 3D CAD и проводит расчёты с помощью программ FEA. (стальная конструкция, соединительные детали и т. д.)"
        ]},
        {name: "Европейские стандарты", path: "standarts", content: []},
        {name: "Сертификаты", path: "sertificates", content: []},
    ];

    facade: ChildPage[] = [
        {name: "Монорельсовые системы", path: "monorail-systems", content: []},
        {name: "Подвесные рабочие платформы", path: "suspended-work-platforms", content: []},
        {name: "Подвесные строительные леса", path: "suspended-scaffolding", content: []},
        {name: "Портативные системы", path: "portable-systems", content: []},
        {name: "Фасадные лестницы", path: "front-stairs", content: []}
    ];

    elevator: ChildPage[] = [
        {name: "Общая информация", path: "common-information", content: []},
        {name: "Отделка кабин лифтов", path: "finishing-elevator-cabins", content: []},
        {name: "Технические характеристики лифтов", path: "technical-characteristics-elevators", content: []},
        {name: "Технические характеристики эскалаторов", path: "technical-characteristics-escalators", content: []},
    ];


    service: ChildPage[] = [
        {name: "Аренда", path: "rent", content: []},
        {name: "Проектирование и дизайн", path: "design", content: []},
        {name: "Дополнительные услуги и работы", path: "additional-service", content: []},
    ];

    mainMenu: Page[] = [
        {name: "Компания", path: "company", child: this.getCompany()},
        {name: "Обслуживание фасадов", path: "facade-support-systems", child: this.getFacade()},
        {name: "Лифтовое оборудование", path: "elevator-equipment", child: this.getElevator()},
        {name: "Наши услуги", path: "service", child: this.getService()},
        {name: "Наши проекты", path: "projects", child: []},
        {name: "Контакты", path: "contacts", child: []},
    ];

    getCompany(){
        return this.company;
    }

    getFacade(){
        return this.facade;
    }

    getElevator(){
        return this.elevator;
    }

    getService(){
        return this.service;
    }

    getMenu(){
        return this.mainMenu;
    }

    getMenuName(pathname:string): string{
        const targetPage: Page | undefined = this.getMenu().find(v => v.path == pathname);
        if(targetPage) return targetPage!.name;
        return "MenuNotFound";
    }

    getChilds(menuPathName:string): ChildPage[] {
        const targetPage: Page | undefined = this.getMenu().find(v => v.path == menuPathName);
        if(targetPage) return targetPage!.child;
        return [];
    }

    getSubNameByPath(menuPath:string, subPath: string): string {
        return this.getChilds(menuPath).find(v => v.path === subPath)!.name;
    }

    get(): Page{
        return this.data;
    }

}