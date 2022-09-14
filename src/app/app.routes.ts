import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardDemoComponent } from 'src/app/dashboard/dashboarddemo.component';
import { SampleDemoComponent } from 'src/app/demo/view/sampledemo.component';
import { FormsDemoComponent } from 'src/app/demo/view/formsdemo.component';
import { DataDemoComponent } from 'src/app/demo/view/datademo.component';
import { PanelsDemoComponent } from 'src/app/demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from 'src/app/demo/view/overlaysdemo.component';
import { MenusDemoComponent } from 'src/app/demo/view/menusdemo.component';
import { MessagesDemoComponent } from 'src/app/demo/view/messagesdemo.component';
import { MiscDemoComponent } from 'src/app/demo/view/miscdemo.component';
import { EmptyDemoComponent } from 'src/app/demo/view/emptydemo.component';
import { ChartsDemoComponent } from 'src/app/demo/view/chartsdemo.component';
import { FileDemoComponent } from 'src/app/demo/view/filedemo.component';
import { DocumentationComponent } from 'src/app/demo/view/documentation.component';
import { AppLayoutComponent } from './shared/app-layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout/auth-layout.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'main', component: AppLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardDemoComponent,
            }
        ]
    },
    {
        path: '', component: AppLayoutComponent,
        children: [{ path: '', component: DashboardDemoComponent },
        { path: 'sample', component: SampleDemoComponent },
        { path: 'forms', component: FormsDemoComponent },
        { path: 'data', component: DataDemoComponent },
        { path: 'panels', component: PanelsDemoComponent },
        { path: 'overlays', component: OverlaysDemoComponent },
        { path: 'menus', component: MenusDemoComponent },
        { path: 'messages', component: MessagesDemoComponent },
        { path: 'misc', component: MiscDemoComponent },
        { path: 'empty', component: EmptyDemoComponent },
        { path: 'charts', component: ChartsDemoComponent },
        { path: 'file', component: FileDemoComponent },
        { path: 'documentation', component: DocumentationComponent },
    ]
    }
    ,
    {
        path: 'auth',
        component: AuthLayoutComponent,
        data: {
            title: 'Login'
        },

        children: [
            {
                path: '',
                loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            },
        ]
    },
    {
        path: '',
        component: AppLayoutComponent,
        data: {
            title: 'Settings'
        },
        children: [
            {
                path: '',
                loadChildren: () => import('./component/settings/settings.module').then(m => m.SettingsModule)
            },
        ]
    },
   
    {
        path: '',
        component: AppLayoutComponent,
        data: {
            title: 'shared'
        },
        children: [
            {
                path: '',
                loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
            },
        ]
    },
    {
        path: '',
        component: AppLayoutComponent,
        data: {
            title: 'directive'
        },
        children: [
            {
                path: '',
                loadChildren: () => import('./shared-directive/directive.module').then(m => m.DirectiveModule)
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'auth/not-found'
    },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
