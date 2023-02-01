import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './login/page/page.component';
import { WithAcessComponent } from './login/page/with-acess/with-acess.component';

const routes: Routes = [
  { path: ``, component: LoginComponent },
  { path: `login`, component: WithAcessComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
