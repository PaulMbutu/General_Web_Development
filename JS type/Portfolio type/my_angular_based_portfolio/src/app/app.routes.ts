import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home';
import { ProjectsComponent } from './components/projects/projects';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent}
];