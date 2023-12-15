import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocsComponent } from './docs/docs.component';
import { LicenseComponent } from './license/license.component';
import { ExampleComponent } from './example/example.component';
import { ExampleC1Component } from './example-c1/example-c1.component';
import { ExampleQtComponent } from './example-qt/example-qt.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: $localize `Libdomain — свободная linux библиотека | BaseALT`
  },
  {
    path: 'news',
    component: NewsComponent,
    title: $localize `Новости`
  },
  {
    path: 'details/:id',
    component: NewsDetailsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    title: $localize `Контакты`
  },
  {
    path: 'example',
    component: ExampleComponent,
    title: $localize `Примеры использования`
  },
  {
    path: 'example/example1',
    component: ExampleC1Component,
    title: $localize `Пример использования библиотеки libdomain в программе на языке C`
  },
  {
    path: 'example/exampleqt',
    component: ExampleQtComponent,
    title: $localize `Пример использования библиотеки libdomain совместно с фреймворком Qt`
  },
  {
    path: 'docs',
    component: DocsComponent,
    title: $localize `Документация`
  },
  {
    path: 'license',
    component: LicenseComponent,
    title: $localize `Лицензия`
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: $localize `Ошибка 404`
  }
];

export default routes;
