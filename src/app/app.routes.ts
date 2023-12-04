import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocsComponent } from './docs/docs.component';
import { LicenseComponent } from './license/license.component';
import { ExampleComponent } from './example/example.component';
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
