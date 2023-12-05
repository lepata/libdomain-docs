import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  protected  NewsList: News[] = [
    {
      id: 0,
      title: $localize `Мы получили грант`,
      short: $localize `<p>Компания «Базальт СПО» получила грантовую поддержку Фонда содействия инновациям на разработку открытой библиотеки libdomain.</p>`,
      detail: $localize `<p>Компания «Базальт СПО» получила грантовую поддержку Фонда содействия инновациям на разработку открытой библиотеки libdomain, которая будет предназначена для создания и применения инструментов администрирования доменов с различной организацией: Samba, FreeIPA, Active Directory. С помощью libdomain можно будет создавать и применять единые групповые политики для корпоративной ИТ-инфраструктуры с российскими и зарубежными операционными системами.</p><p>А также:</p><p><ul><li>библиотека будет включена репозиторий «Сизиф»;</li><li>инфраструктура разработки библиотеки находится на территории РФ, принадлежит и поддерживается компанией «Базальт СПО»;</li><li>воспользоваться libdomain смогут разработчики всех стран, к примеру, для создания специализированных средств управления доменной инфраструктурой, приложений для миграции с Windows на российские ОС на ядре Linux, специализированных модулей для powershell.</li></ul></p>`,
      date: new Date(2022,10,27),
    },
    {
      id: 1,
      title: $localize `Начало положено. Проект стартовал!`,
      short: $localize `<p>21 декабря 2022 года наша команда приступила к выполнению первого этапа проекта «Разработка открытой библиотеки для управления доменной инфраструктурой на основе службы каталогов Samba».</p>`,
      detail: $localize `<p>21 декабря 2022 года наша команда приступила к выполнению первого этапа проекта «Разработка открытой библиотеки для управления доменной инфраструктурой на основе службы каталогов Samba». В рамках этапа планируется собрать сведения и проанализировать объекты и их свойства в домене AD* для дальнейшей разработки системной архитектуры прототипа.</p><p>libdomain — это библиотека, которая будет упрощать работу с LDAP, предоставляя простой и понятный API, позволяя её пользователям получить интеграцию с Qt* или GTK*. Проект разрабатывается на языке C с использованием системы сборки Cmake. Ознакомится с кодом библиотеки можно в репозитории.</p><p>AD* — Microsoft Active Directory<br />Qt* — кроссплатформенная библиотека элементов интерфейса<br />GTK* — кроссплатформенная библиотека элементов интерфейса</p>`,
      date: new Date(2022,11,23),
    },
    {
      id: 2,
      title: $localize `Наработки`,
      short: $localize `<p>Ранее нами была разработана утилита ADMC для управления объектами службы каталогов.</p>`,
      detail: $localize `<p>Ранее нами была разработана утилита ADMC для управления объектами службы каталогов. В её состав входит библиотека для работы с объектами службы каталогов libadldap. Для развития проекта, указанного в гранте, мы планируем использовать наработки полученные в ходе разработки утилиты ADMC и библиотеки libadldap.</p>`,
      date: new Date(2023,0,15),
    },
    {
      id: 3,
      title: $localize `Завершена разработка требований`,
      short: $localize `<p>Наша команда завершила разработку требований к библиотеке libdomain.</p>`,
      detail: $localize `<p>Мы рады сообщить, что наша команда завершила разработку требований к библиотеке libdomain. Был проведен первичный анализ документации по текущим реализациям LDAP-серверов и стандартам LDAP, что позволит нам быстрее и качественнее вести дальнейшую разработку.</p>`,
      date: new Date(2023,2,4),
    },
    {
      id: 4,
      title: $localize `Начата разработка инфраструктуры тестовых стендов`,
      short: $localize `<p>Приступили к разработке архитектуры тестовых стендов.</p>`,
      detail: $localize `<p>Наша команда приступила к разработке архитектуры тестовых стендов. Для тестирования планируется использовать LDAP-сервисы OpenLDAP и Samba. Такое решение позволит с одной стороны тестировать разрабатываемый продукт в условиях приближенных к реальным, а с другой быстрее разворачивать тестовое окружение. Для упрощения процесса тестирования и построения отчётов решено было использовать несколько тестовых окружений на основе Docker.</p>`,
      date: new Date(2023,3,11),
    },
    {
      id: 5,
      title: $localize `Завершение проектирования и разработки тестовых стендов`,
      short: $localize `<p>Разработаны тестовые стенды.</p>`,
      detail: $localize `<p>Наша команда завершила разработку тестовых стендов.</p>`,
      date: new Date(2023,4,13),
    },
    {
      id: 6,
      title: $localize `Завершен первый этап проекта`,
      short: $localize `<p>Команда компании «Базальт СПО» успешно завершила первый этап проекта «Разработка открытой библиотеки для управления доменной инфраструктурой на основе службы каталогов Samba».</p>`,
      detail: $localize `<p>Команда компании «Базальт СПО» успешно завершила первый этап проекта «Разработка открытой библиотеки для управления доменной инфраструктурой на основе службы каталогов Samba». На первом этапе библиотека получила следующий набор функционала: (перечень возьмём из протокола тестирования). Прототип библиотеки на текущий момент адаптирован для объектов схемы домена OpenLDAP.</p>`,
      date: new Date(2023, 5, 8),
    },
    {
      id: 7,
      title: $localize `Доступна версия 0.8.0`,
      short: $localize `<p>Выпущена версия 0.8.0, которая содержит исправления ошибок.</p>`,
      detail: $localize `<p>Выпущена версия 0.8.0, которая является релизом, содержащим в себе исправления ошибок. Реализовано автоматическое определение типа сервиса каталога, на данный момент поддерживаются OpenLDAP и ActiveDirectory(Samba).</p><p>Начата работа над поддержкой схемы ActiveDirectory.</p>`,
      date: new Date(2023,9,21),
    },
    {
      id: 8,
      title: $localize `Завершена разработка версии 0.9.0`,
      short: $localize `<p>В данной версии доступны новые функции блокировки и разблокировки пользователей OpenLDAP.</p>`,
      detail: $localize `<p>Завершена разработка версии 0.9.0. В данной версии доступны новые функции блокировки и разблокировки пользователей OpenLDAP. Реализовано добавление, удаление, изменение, переименование компьютеров (computer) для OpenLDAP.</p><p>Реализована установка шифрованного соединения LDAPS (при использовании TLS/SSL).</p>`,
      date: new Date(2023, 10, 11),
    }
  ];

  getAllNews(): News[] {
    return this.NewsList;
  }
  getNewsById(id: number): News | undefined {
    return this.NewsList.find(News => News.id === id);
  }
  getNewsTitleById(id: number): string {

    return this.NewsList[id].title
  }
}
