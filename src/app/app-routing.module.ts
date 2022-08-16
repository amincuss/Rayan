// Angular imports
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Local imports
import { CustomerDetailsComponent } from './Customer-Details/Customer-Details.component';
import { CustomerListComponent } from './Customer-List/Customer-List.component';
import { CustomerSaveModeComponent } from './Customer-Save-Mode/Customer-Save-Mode.component';
const routes: Routes = [
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/:id', component: CustomerDetailsComponent},
  {path: '**', redirectTo: '/customer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
