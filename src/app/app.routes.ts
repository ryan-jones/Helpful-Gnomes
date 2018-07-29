import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GnomesComponent } from './components/gnomes/gnomes.component';

const routes: Routes = [
	{
		path: '',
		component: GnomesComponent,
		children: []
	},
	{
		path: 'not-found',
		component: NotFoundComponent
	},
	{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class RoutingModule { }
