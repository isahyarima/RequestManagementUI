import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/primeng';
import { MenuRestrictionService } from 'src/app/authentication/menu-restriction.service';
import { AppLayoutComponent } from '../app-layout/app-layout/app-layout.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="layout-menu"
            [reset]="reset" visible="true" parentActive="true"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: any[];

    constructor(public app: AppLayoutComponent, private menuGuardService: MenuRestrictionService) { }

    ngOnInit() {
        this.model = [
            { label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/main/dashboard'] },
            {
                label: 'System Setting', icon: 'fa fa-cogs',
                items: [
                    // {
                    //     label: 'Certification', icon: 'fa fa-fw fa-user',
                    //     routerLink: ['/certification'],
                    //     visible: this.menuGuardService.hideOrShow(['certification'])
                    // },
                    // {
                    //     label: 'Department', icon: 'fa fa-fw fa-user',
                    //     routerLink: ['/department'],
                    //     visible: this.menuGuardService.hideOrShow(['department'])
                    // },
                    // {
                    //     label: 'Department Unit', icon: 'fa fa-fw fa-user',
                    //     routerLink: ['/department-unit'],
                    //     visible: this.menuGuardService.hideOrShow(['department-unit'])
                    // },

                    {
                        label: 'Document Type', icon: 'fa fa-fw fa-user',
                        routerLink: ['/document-type'],
                        visible: this.menuGuardService.hideOrShow(['document-type'])
                    },

                    {
                        label: 'School Information ', icon: 'fa fa-fw fa-user',
                        routerLink: ['/global-setting'],
                        visible: this.menuGuardService.hideOrShow(['global-setting'])
                    },
                    {
                        label: 'Role Managenent', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['role-management', 'role']),
                        items: [
                            {
                                label: 'Manage Role', icon: 'fa fa-fw fa-user',
                                routerLink: ['/role'],
                                visible: this.menuGuardService.hideOrShow(['role'])
                            },
                            {
                                label: 'Manage Role Privileges', icon: 'fa fa-fw fa-user',
                                routerLink: ['/role-management'],
                                visible: this.menuGuardService.hideOrShow(['role-management'])
                            },
                        ]
                    },                  
                    {
                        label: 'Layout Settings', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Themes', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Solid',
                                        icon: 'fa fa-fw fa-paint-brush',
                                        items: [
                                            {
                                                label: 'Blue', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('blue', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('blue', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('blue', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Cyan', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('cyan', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('cyan', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('cyan', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Green', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('green', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('green', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('green', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Yellow', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('yellow', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('yellow', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('yellow', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Purple', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('purple', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('purple', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('purple', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Pink', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('pink', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('pink', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('pink', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Blue Grey', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('bluegrey', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('bluegrey', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('bluegrey', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Teal', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('teal', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('teal', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('teal', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Orange', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('orange', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('orange', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('orange', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Grey', icon: 'fa fa-fw fa-paint-brush',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('grey', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('grey', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('grey', 'gradient')
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: 'Special',
                                        icon: 'fa fa-fw fa-paint-brush',
                                        items: [
                                            {
                                                label: 'Cappuccino', icon: 'fa fa-fw fa-picture-o',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('cappuccino', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('cappuccino', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('cappuccino', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Montreal', icon: 'fa fa-fw fa-picture-o',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('montreal', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('montreal', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('montreal', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Hollywood', icon: 'fa fa-fw fa-picture-o',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('hollywood', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('hollywood', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('hollywood', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Peak', icon: 'fa fa-fw fa-picture-o',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('peak', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('peak', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('peak', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Alive', icon: 'fa fa-fw fa-certificate',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('alive', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('alive', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('alive', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Emerald', icon: 'fa fa-fw fa-certificate',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('emerald', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('emerald', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('emerald', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Ash', icon: 'fa fa-fw fa-certificate',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('ash', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('ash', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('ash', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Noir', icon: 'fa fa-fw fa-certificate',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('noir', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('noir', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('noir', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Mantle', icon: 'fa fa-fw fa-certificate',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('mantle', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('mantle', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('mantle', 'gradient')
                                                    }
                                                ]
                                            },
                                            {
                                                label: 'Predawn', icon: 'fa fa-fw fa-certificate',
                                                items: [
                                                    {
                                                        label: 'Light', icon: 'fa fa-fw fa-square-o',
                                                        command: (event) => this.changeTheme('predawn', 'light')
                                                    },
                                                    {
                                                        label: 'Dark', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('predawn', 'dark')
                                                    },
                                                    {
                                                        label: 'Gradient', icon: 'fa fa-fw fa-square',
                                                        command: (event) => this.changeTheme('predawn', 'gradient')
                                                    }
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Menu Modes', icon: 'fa fa-fw fa-bars',
                                items: [
                                    { label: 'Static Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'static' },
                                    { label: 'Overlay Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'overlay' },
                                    { label: 'Slim Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'slim' },
                                    { label: 'Horizontal Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'horizontal' }
                                ]
                            },
                            {
                                label: 'Mega Menu', icon: 'fa fa-fw fa-bars', badgeStyleClass: 'text-badge',
                                items: [
                                    { label: 'Light Menu', icon: 'fa fa-sun-o fa-fw', command: () => this.app.megaMenuMode = 'light' },
                                    { label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw', command: () => this.app.megaMenuMode = 'dark' },
                                    { label: 'Gradient Menu', icon: 'fa fa-moon-o fa-fw', command: () => this.app.megaMenuMode = 'gradient' }
                                ]
                            },
                            {
                                label: 'User Menu', icon: 'fa fa-fw fa-user',
                                items: [
                                    { label: 'Inline Profile', icon: 'fa fa-sun-o fa-fw', command: () => this.app.profileMode = 'inline' },
                                    { label: 'Top Profile', icon: 'fa fa-moon-o fa-fw', command: () => this.app.profileMode = 'top' }
                                ]
                            },

                        ]
                    },

                ]
            },

            {
                label: 'Academic Administration', icon: 'fa fa-graduation-cap',
                visible: this.menuGuardService.hideOrShow(['academic-level', 'course-definition'
                    , 'School', 'department', 'degree-type',
                    'degree-programme', 'grade', 'grade-point-average', 'course-category', 'curriculum',
                    'course-definition', 'graduation-plan', 'course-schedule-view', 'course-schedule', 'calendar',
                    'semester-course-registration', 'semester-course-approval', 'time-table', 'grade-point-average'
                    ,  'academic-calendar-event', 'academic-calendar', 'session',
                    'active-semester', 'calendar', 'active-semester', 'academic-schedule', ]),
                items: [
                    {
                        label: 'Settings', icon: 'fa fa-fw fa-user',
                        visible: this.menuGuardService.hideOrShow(['academic-level'
                            , 'School', 'department', 'degree-type',
                            'degree-programme',]),
                        items: [
                            {
                                label: 'School', icon: 'fa fa-fw fa-user',
                                routerLink: ['/faculty'],
                                visible: this.menuGuardService.hideOrShow(['faculty'])
                            },
                            {
                                label: 'Department', icon: 'fa fa-fw fa-user',
                                routerLink: ['/academic-department'],
                                visible: this.menuGuardService.hideOrShow(['department'])
                            },
                            {
                                label: 'Degree Type', icon: 'fa fa-fw fa-user',
                                routerLink: ['/degree-type'],
                                visible: this.menuGuardService.hideOrShow(['degree-type'])
                            },
                            {
                                label: 'Course Category', icon: 'fa fa-fw fa-user',
                                routerLink: ['/course-category'],
                                visible: this.menuGuardService.hideOrShow(['course-category'])
                            },
                            {
                                label: 'Academic Level', icon: 'fa fa-fw fa-user',
                                routerLink: ['/academic-level'],
                                visible: this.menuGuardService.hideOrShow(['academic-level'])
                            },
                            {
                                label: 'Academic Week', icon: 'fa fa-fw fa-user',
                                routerLink: ['/week'],
                                visible: this.menuGuardService.hideOrShow(['week'])
                            },
                            {
                                label: 'Manage Classroom', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['block', 'classroom']),
                                items: [
                                    {
                                        label: 'Block', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/block'],
                                        visible: this.menuGuardService.hideOrShow(['block'])
                                    }
                                    , {
                                        label: 'Classroom', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/classroom'],
                                        visible: this.menuGuardService.hideOrShow(['classroom'])
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Manage Programme', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['degree-programme', 'curriculum']),
                        items: [
                            {
                                label: 'Academic Programme', icon: 'fa fa-fw fa-user',
                                routerLink: ['/degree-programme'],
                                visible: this.menuGuardService.hideOrShow(['degree-programme'])
                            },
                            {
                                label: 'BMAS', icon: 'fa fa-fw fa-user',
                                routerLink: ['/curriculum'],
                                visible: this.menuGuardService.hideOrShow(['curriculum'])
                            },
                        ]
                    },                    
                    {
                        label: 'Manage Course', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['course-definition']),
                        items: [
                            {
                                label: 'Course Definition', icon: 'fa fa-fw fa-user',
                                routerLink: ['/course-definition'],
                                visible: this.menuGuardService.hideOrShow(['course-definition'])
                            }                         

                        ]
                    },
                    {
                        label: 'Graduation Plan', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['graduation-plan']),
                        items: [

                            {
                                label: 'New Graduation Plan', icon: 'fa fa-fw fa-user',
                                routerLink: ['/graduation-plan-setup'],
                                visible: this.menuGuardService.hideOrShow(['graduation-plan'])
                            },
                            {
                                label: 'Manage Plan', icon: 'fa fa-fw fa-user',
                                routerLink: ['/graduation-plan'],
                                visible: this.menuGuardService.hideOrShow(['graduation-plan'])
                            }
                        ]
                    },
                    {
                        label: 'Course Schedule', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['course-schedule', 'course-schedule-view', 'time-table',
                            'academic-schedule']),
                        items: [
                            {
                                label: 'New Course Schedule', icon: 'fa fa-fw fa-user',
                                routerLink: ['/course-schedule'],
                                visible: this.menuGuardService.hideOrShow(['course-schedule'])
                            },
                            {
                                label: 'View Semester Schedule', icon: 'fa fa-fw fa-user',
                                routerLink: ['/academic-schedule'],
                                visible: this.menuGuardService.hideOrShow(['academic-schedule'])
                            },{
                                label: 'View All Schedule', icon: 'fa fa-fw fa-user',
                                routerLink: ['/course-schedule-view'],
                                visible: this.menuGuardService.hideOrShow(['course-schedule-view'])
                            },
                            {
                                label: 'Timetable Setup', icon: 'fa fa-fw fa-user',
                                routerLink: ['/time-table-setup'],
                                visible: this.menuGuardService.hideOrShow(['time-table'])
                            },
                            {
                                label: 'Timetable', icon: 'fa fa-fw fa-user',
                                routerLink: ['/time-table'],
                                visible: this.menuGuardService.hideOrShow(['time-table'])
                            },
                        ]
                    },
                    {
                        label: 'Course Registration', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['semester-course-registration']),
                        items: [
                            {
                                label: 'Semester Course', icon: 'fa fa-fw fa-user',
                                routerLink: ['/semester-course-registration'],
                                visible: this.menuGuardService.hideOrShow(['semester-course-registration'])
                            }

                        ]
                    },
                    {
                        label: 'Registration Approvals', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow([ 'semester-course-approval']),
                        items: [
 {
                                label: 'Course Approval', icon: 'fa fa-fw fa-user',
                                routerLink: ['/semester-course-approval'],
                                visible: this.menuGuardService.hideOrShow(['semester-course-approval'])
                            },


                        ]
                    },
                    {
                        label: 'BMAS', icon: 'fa fa-fw fa-user',
                        routerLink: ['/curriculum'],
                        visible: this.menuGuardService.hideOrShow(['curriculum'])
                    },
                    {
                        label: 'Manage Grading Tool', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['grade-point-average']),
                        items: [
                            {
                                label: 'Grading System', icon: 'fa fa-fw fa-user',
                                routerLink: ['/grade-point-average'],
                                visible: this.menuGuardService.hideOrShow(['grade-point-average'])
                            },
                            // {
                            //     label: 'Grade', icon: 'fa fa-fw fa-user',
                            //     routerLink: ['/grade'],
                            //     visible: this.menuGuardService.hideOrShow(['grade'])
                            // },
                        ]
                    },
                    
                    {
                        label: 'Academic Master', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['academic-calendar-event', 'academic-calendar', 'session',
                            'active-semester', 'calendar', 'active-semester',]),
                        items: [

                            {
                                label: 'Academic Calendar Event', icon: 'fa fa-fw fa-user',
                                routerLink: ['/academic-calendar-event'],
                                visible: this.menuGuardService.hideOrShow(['academic-calendar-event'])
                            },
                            {
                                label: 'Academic Calendar', icon: 'fa fa-fw fa-user',
                                routerLink: ['/academic-calendar'],
                                visible: this.menuGuardService.hideOrShow(['academic-calendar'])
                            },
                            {
                                label: 'Manage Session', icon: 'fa fa-fw fa-user',
                                routerLink: ['/session'],
                                visible: this.menuGuardService.hideOrShow(['session'])
                            },
                            {
                                label: 'Manage Semester', icon: 'fa fa-fw fa-user',
                                routerLink: ['/active-semester'],
                                visible: this.menuGuardService.hideOrShow(['active-semester'])
                            },
                            {
                                label: 'Admission Calendar', icon: 'fa fa-fw fa-user',
                                routerLink: ['/admission-calendar'],
                                visible: this.menuGuardService.hideOrShow(['calendar'])
                            },
                            {
                                label: 'Academic Year Calendar', icon: 'fa fa-fw fa-user',
                                routerLink: ['/academic-year-calendar'],
                                visible: this.menuGuardService.hideOrShow(['calendar'])
                            },

                        ]
                    },
                ]
            },
            {
                label: 'Course Planning', icon: 'fa fa-fw fa-sign-in',
                visible: this.menuGuardService.hideOrShow([
                'course-curriculum' ,'class-lesson-plan']),
                items: [
                    {
                        label: 'Course Planning', icon: 'fa fa-fw fa-user',
                        routerLink: ['/course-curriculum'],
                        visible: this.menuGuardService.hideOrShow(['course-curriculum'])
                    },
                    {
                        label: 'Lesson Planning', icon: 'fa fa-fw fa-user',
                        routerLink: ['/class-lesson-plan'],
                        visible: this.menuGuardService.hideOrShow(['class-lesson-plan'])
                       
                    },

                ]
            },
            {
                label: 'Course Materials Management', icon: 'fa fa-fw fa-sign-in',
                visible: this.menuGuardService.hideOrShow([
                'course-activities' ,]),
                items: [
                    {
                        label: 'Lesson Materials', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow([
                            'course-activities',]),
                        items: [
                            {
                                label: 'Lesson Note Uploads', icon: 'fa fa-fw fa-user',
                                routerLink: ['/course-activities'],
                                visible: this.menuGuardService.hideOrShow(['course-activities'])
                            }


                        ]
                    },

                ]
            },
            {
                label: 'Course Assessment Activities', icon: 'fa fa-fw fa-sign-in',
                visible: this.menuGuardService.hideOrShow(['degree-programme', 'curriculum',
                 ,'assessment-tool', 'assessment-type', 'assessment-marks',]),
                items: [
                    {
                        label: 'CA Grade Setting', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['assessment-tool', 'assessment-type', 'assessment-marks']),
                        items: [
                            {
                                label: 'CA Tool', icon: 'fa fa-fw fa-user',
                                routerLink: ['/assessment-tool'],
                                visible: this.menuGuardService.hideOrShow(['assessment-tool'])
                            },
                            {
                                label: 'CA Type', icon: 'fa fa-fw fa-user',
                                routerLink: ['/assessment-type'],
                                visible: this.menuGuardService.hideOrShow(['assessment-type'])
                            },
                        ]
                    },
                    {
                        label: 'Manage Assessment', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow([
                            'course-assessment',]),
                        items: [
                            {
                                label: 'Create Assessment', icon: 'fa fa-fw fa-user',
                                routerLink: ['/course-assessment'],
                                visible: this.menuGuardService.hideOrShow(['course-assessment'])
                            }


                        ]
                    },

                ]
            },
            {
                label: 'Academic Results Management', icon: 'fa fa-fw fa-sign-in',
                visible: this.menuGuardService.hideOrShow(['degree-programme', 'curriculum',
                'result-posting', 'result-approval', 'result-view', 'student-result-posting',
                'course-activities' ,'assessment-tool', 'assessment-type', 'assessment-marks',]),
                items: [
                    {
                        label: 'Manage Results', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow([
                            'result-posting', 'result-approval', 'result-view', 'student-result-posting']),
                        items: [
                            {
                                label: 'Post Result', icon: 'fa fa-fw fa-user',
                                routerLink: ['/result-posting'],
                                visible: this.menuGuardService.hideOrShow(['result-posting'])
                            }, {
                                label: 'Post Student Result', icon: 'fa fa-fw fa-user',
                                routerLink: ['/student-result-posting'],
                                visible: this.menuGuardService.hideOrShow(['student-result-posting'])
                            }, {
                                label: 'View Results', icon: 'fa fa-fw fa-user',
                                routerLink: ['/result-view'],
                                visible: this.menuGuardService.hideOrShow(['result-view'])
                            }, {
                                label: 'Approval Results', icon: 'fa fa-fw fa-user',
                                routerLink: ['/result-approval'],
                                visible: this.menuGuardService.hideOrShow(['result-approval'])
                            },


                        ]
                    }

                ]
            },
            {
                label: 'Students Management', icon: 'fa fa-user-circle-o',
                visible: this.menuGuardService.hideOrShow(['manage-student','verify-document']),
                items: [
                    {
                        label: 'Student List', icon: 'fa fa-fw fa-user',
                        routerLink: ['/student-list'],
                        visible: this.menuGuardService.hideOrShow(['manage-student'])
                    },
                    {
                        label: 'New Student', icon: 'fa fa-fw fa-user',
                        routerLink: ['/new-student'],
                        visible: this.menuGuardService.hideOrShow(['manage-student'])
                    },
                    {
                        label: 'Manage Student', icon: 'fa fa-fw fa-user',
                        routerLink: ['/student-search'],
                        visible: this.menuGuardService.hideOrShow(['manage-student'])
                    },
                    {
                        label: 'Manage Login Details', icon: 'fa fa-fw fa-user',
                        routerLink: ['/password-reset'],
                        visible: this.menuGuardService.hideOrShow(['manage-student'])
                    },
                    {
                        label: 'Change Student Email', icon: 'fa fa-fw fa-user',
                        routerLink: ['/chnage-email'],
                        visible: this.menuGuardService.hideOrShow(['manage-student'])
                    },
                    // {
                    //     label: 'Settings', icon: 'fa fa-fw fa-sign-in',
                    //             items: [
                    //                 {
                    //                     label: '--Setting--', icon: 'fa fa-fw fa-user',
                    //                     routerLink: ['/academic-level'],
                    //                     visible: this.menuGuardService.hideOrShow(['academic-level'])
                    //                 },
                    //             ]
                    // },

                ]
            },
            {
                label: 'Admission Management', icon: 'fa fa-street-view',
                visible: this.menuGuardService.hideOrShow(['enrol-student','verify-document','admission-approval',
                'required-subject-combination', 'agent', 'required-document']),
                items: [
                    {
                        label: 'Applications', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['enrol-student']),
                        items: [
                            {
                                label: 'Uncompleted', icon: 'fa fa-fw fa-user',
                                routerLink: ['/application-uncompleted'],
                                visible: this.menuGuardService.hideOrShow(['enrol-student'])
                            },
                            {
                                label: 'Unpaid ', icon: 'fa fa-fw fa-user',
                                routerLink: ['/application-unpaid'],
                                visible: this.menuGuardService.hideOrShow(['enrol-student'])
                            }
                        ]
                    },
                    {
                        label: 'Application Summary Report', icon: 'fa fa-fw fa-user',
                        routerLink: ['/application-summary'],
                        visible: this.menuGuardService.hideOrShow(['application-summary'])
                    },
                    {
                        label: 'Application Documents', icon: 'fa fa-fw fa-user',
                        routerLink: ['/verify-document'],
                        visible: this.menuGuardService.hideOrShow(['verify-document'])
                    },
                    {
                        label: 'Application Inbox', icon: 'fa fa-fw fa-user',
                        routerLink: ['/application-search'],
                        visible: this.menuGuardService.hideOrShow(['admission-approval'])
                    }
                    ,
                    {
                        label: 'Failed Application Link', icon: 'fa fa-fw fa-user',
                        routerLink: ['/failed-link'],
                        visible: this.menuGuardService.hideOrShow(['enrol-student'])
                    },
                    {
                        label: 'Settings', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['required-subject-combination', 'agent', 'required-document']),
                        items: [
                            {
                                label: 'Cut Off Mark', icon: 'fa fa-fw fa-user',
                                routerLink: ['/combination'],
                                visible: this.menuGuardService.hideOrShow(['required-subject-combination'])
                            },
                            {
                                label: 'Manage Agent', icon: 'fa fa-fw fa-user',
                                routerLink: ['/agent'],
                                visible: this.menuGuardService.hideOrShow(['agent'])
                            },
                            {
                                label: 'Required Document', icon: 'fa fa-fw fa-user',
                                routerLink: ['/required-document'],
                                visible: this.menuGuardService.hideOrShow(['required-document'])
                            },

                        ]
                    },

                ]
            }, 
            {
                label: 'Student Enrollment', icon: 'fa fa-street-view',
                visible: this.menuGuardService.hideOrShow(['enrol-student']),
                items: [
                    {
                        label: 'New Enrollment', icon: 'fa fa-fw fa-user',
                        routerLink: ['/enrol-student'],
                        visible: this.menuGuardService.hideOrShow(['enrol-student'])
                    },
                    {
                        label: 'Change Programme', icon: 'fa fa-fw fa-user',
                        routerLink: ['/enrol-student'],
                        visible: this.menuGuardService.hideOrShow(['enrol-student'])
                    },
                ]
            },
            {
                label: 'Finance Management', icon: 'fa fa-usd',
                visible: this.menuGuardService.hideOrShow(['application-fee', 'fee-item',
                    'fee-structure', 'payment-verification', 'waiver-category', 'bank', 'general-ledger'
                    , 'waiver-type', 'fee-waiver']),
                items: [
                    {
                        label: 'Edit Fee Waiver', icon: 'fa fa-fw fa-user',
                        routerLink: ['/combination'],
                        visible: this.menuGuardService.hideOrShow(['required-subject-combination'])
                    },
                    {
                        label: 'Incoming Payment', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['payment-verification',]),
                        items: [
                            {
                                label: 'Incoming Payment List', icon: 'fa fa-fw fa-user',
                                routerLink: ['/payment-verification'],
                                visible: this.menuGuardService.hideOrShow(['payment-verification'])
                            },
                            {
                                label: 'Verified Payments', icon: 'fa fa-fw fa-user',
                                routerLink: ['/verified-payment'],
                                visible: this.menuGuardService.hideOrShow(['payment-verification'])
                            }
                        ]
                    },
                    {
                        label: 'Fee Management', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Fee Structure', icon: 'fa fa-fw fa-user',
                                routerLink: ['/fee-structure'],
                                visible: this.menuGuardService.hideOrShow(['fee-structure'])
                            },
                            {
                                label: 'Fee Item', icon: 'fa fa-fw fa-user',
                                routerLink: ['/fee-item'],
                                visible: this.menuGuardService.hideOrShow(['fee-item'])
                            },
                            {
                                label: 'Application Fee', icon: 'fa fa-fw fa-user',
                                routerLink: ['/application-fee'],
                                visible: this.menuGuardService.hideOrShow(['application-fee'])
                            },
                        ]
                    },
                    {
                        label: 'Setting', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['payment-verification', 'waiver-category'
                            , 'waiver-type', 'fee-waiver', 'bank', 'general-ledger']),
                        items: [
                            {
                                label: 'Fee Waiver', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {
                                        label: 'Fee Waiver Category', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/waiver-category'],
                                        visible: this.menuGuardService.hideOrShow(['waiver-category'])
                                    },
                                    {
                                        label: 'Fee Waiver Type', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/waiver-type'],
                                        visible: this.menuGuardService.hideOrShow(['waiver-type'])
                                    },
                                    {
                                        label: 'Fee Waiver', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/fee-waiver'],
                                        visible: this.menuGuardService.hideOrShow(['fee-waiver'])
                                    },
                                ]
                            },
                            {
                                label: 'Bank', icon: 'fa fa-fw fa-user',
                                routerLink: ['/bank'],
                                visible: this.menuGuardService.hideOrShow(['bank'])
                            },
                            {
                                label: 'General Ledger', icon: 'fa fa-fw fa-user',
                                routerLink: ['/general-ledger'],
                                visible: this.menuGuardService.hideOrShow(['general-ledger'])
                            }
                        ]
                    },

                ]
            },
            {
                label: 'Store and Inventory', icon: 'fa fa-university',
                visible: this.menuGuardService.hideOrShow(['inventory-setting', 'asset-supply', 'asset-distribution']),
                items: [
                    {
                        label: 'Settings', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['inventory-setting']),
                        items: [
                            {
                                label: 'Manage Store', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Store Type', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/store-type'],
                                        visible: this.menuGuardService.hideOrShow(['inventory-setting'])
                                    },
                                    {
                                        label: 'Store', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/store'],
                                        visible: this.menuGuardService.hideOrShow(['inventory-setting'])
                                    },
                                ]
                            },
                            {
                                label: 'Manage Asset', icon: 'fa fa-fw fa-paint-brush',
                                items: [
                                    {
                                        label: 'Asset Category', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/asset-category'],
                                        visible: this.menuGuardService.hideOrShow(['inventory-setting'])
                                    },
                                    {
                                        label: 'Asset Type', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/asset-type'],
                                        visible: this.menuGuardService.hideOrShow(['inventory-setting'])
                                    },
                                    
                                ]
                            },
                            {
                                label: 'Supplier', icon: 'fa fa-fw fa-user',
                                routerLink: ['/supplier'],
                                visible: this.menuGuardService.hideOrShow(['inventory-setting'])
                            },

                        ]
                    },
                    {
                        label: 'Manage Asset Supply', icon: 'fa fa-fw fa-user',
                        routerLink: ['/asset'],
                        visible: this.menuGuardService.hideOrShow(['inventory-setting'])
                    },
                    {
                        label: 'Facility Distribution', icon: 'fa fa-fw fa-user',
                        routerLink: ['/inward-facility'],
                        visible: this.menuGuardService.hideOrShow(['asset-supply'])
                    }
                    ,
                    {
                        label: 'Facility Retrieval', icon: 'fa fa-fw fa-user',
                        routerLink: ['/outward-facility'],
                        visible: this.menuGuardService.hideOrShow(['asset-distribution'])
                    }
                ]
            },
            {
                label: 'Hostel Management', icon: 'fa fa-university',
                visible: this.menuGuardService.hideOrShow(['hostel-settings', 'allocate-hostel']),
                items: [
                    {
                        label: 'Settings', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['hostel-settings']),
                        items: [
                            {
                                label: 'Block Building', icon: 'fa fa-fw fa-user',
                                routerLink: ['/block-building'],
                                visible: this.menuGuardService.hideOrShow(['hostel-settings'])
                            },
                            {
                                label: 'Room Category', icon: 'fa fa-fw fa-user',
                                routerLink: ['/room-category'],
                                visible: this.menuGuardService.hideOrShow(['hostel-settings'])
                            },
                            {
                                label: 'Room', icon: 'fa fa-fw fa-user',
                                routerLink: ['/room'],
                                visible: this.menuGuardService.hideOrShow(['hostel-settings'])
                            },
                            {
                                label: 'Bed Type', icon: 'fa fa-fw fa-user',
                                routerLink: ['/bed-type'],
                                visible: this.menuGuardService.hideOrShow(['hostel-settings'])
                            },
                            {
                                label: 'Bed', icon: 'fa fa-fw fa-user',
                                routerLink: ['/bed'],
                                visible: this.menuGuardService.hideOrShow(['hostel-settings'])
                            },

                        ]
                    },
                    {
                        label: 'Bed Allocation', icon: 'fa fa-fw fa-user',
                        routerLink: ['/bed-allocation'],
                        visible: this.menuGuardService.hideOrShow(['allocate-hostel'])
                    },

                ]
            },
            {
                label: 'HRMS', icon: 'fa fa-file-pdf-o',
                visible: this.menuGuardService.hideOrShow(['employee', 'employee-supervisor',
                'employee-team','certification', 'department',
                'department-unit', 'global-setting', 'document-type','role']),
                items: [
                    {
                        label: 'Personnel Info', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['employee', 'employee-supervisor',
                            'employee-team'
                        ]),
                        items: [
                            {
                                label: 'Add Employee', icon: 'fa fa-fw fa-user',
                                routerLink: ['/add-employee'],
                                visible: this.menuGuardService.hideOrShow(['employee'])
                            },
                            {
                                label: 'Manage Employee', icon: 'fa fa-fw fa-user',
                                routerLink: ['/employee-search'],
                                visible: this.menuGuardService.hideOrShow(['employee'])
                            },
                            {
                                label: 'Supervisor', icon: 'fa fa-fw fa-user',
                                routerLink: ['/employee-supervisor'],
                                visible: this.menuGuardService.hideOrShow(['employee-supervisor'])
                            },
                            {
                                label: 'Department', icon: 'fa fa-fw fa-user',
                                routerLink: ['/employee-team'],
                                visible: this.menuGuardService.hideOrShow(['employee-team'])
                            },
        
                        ]
                    },
                    {
                        label: 'Employee Award', icon: 'fa fa-fw fa-user',
                        routerLink: ['/employee-award'],
                        visible: this.menuGuardService.hideOrShow(['employee-award'])
                    },
                    {
                        label: 'Settings', icon: 'fa fa-fw fa-sign-in',
                        visible: this.menuGuardService.hideOrShow(['designation', 'leave-days',
                            'leave-type', 'relationship', 'employee-type'
                        ]),
                        items: [
                            {
                                label: 'Personnel Setup', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['designation', 'leave-days',
                                    'leave-type', 'relationship', 'employee-type'
                                ]),
                                items: [
                                    {
                                        label: 'Designation', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/designation'],
                                        visible: this.menuGuardService.hideOrShow(['designation'])
                                    },
                                    {
                                        label: 'Relationship', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/relationship'],
                                        visible: this.menuGuardService.hideOrShow(['relationship'])
                                    },
                                    {
                                        label: 'Employee Type', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/employee-type'],
                                        visible: this.menuGuardService.hideOrShow(['employee-type'])
                                    },
        
        
                                ]
                            },
                            {
                                label: 'Leave Setup', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['leave-days', 'leave-type'
                                ]),
                                items: [
                                    {
                                        label: 'Leave Days', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/leave-days'],
                                        visible: this.menuGuardService.hideOrShow(['leave-days'])
                                    },
                                    {
                                        label: 'Leave Type', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/leave-type'],
                                        visible: this.menuGuardService.hideOrShow(['leave-type'])
                                    },
                                ]
                            },
                            {
                                label: 'Pension Setup', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['', ''
                                ]),
                                items: [
                                    {
                                        label: '--Setting--', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/academic-level'],
                                        visible: this.menuGuardService.hideOrShow(['academic-level'])
                                    },
                                ]
                            },
                            {
                                label: 'Payroll Setup', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['', ''
                                ]),
                                items: [
                                    {
                                        label: '--Setting--', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/academic-level'],
                                        visible: this.menuGuardService.hideOrShow(['academic-level'])
                                    },
                                ]
                            },
                            {
                                label: 'Appraisal Setup', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['', ''
                                ]),
                                items: [
                                    {
                                        label: '--Setting--', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/academic-level'],
                                        visible: this.menuGuardService.hideOrShow(['academic-level'])
                                    },
                                ]
                            },
                            {
                                label: 'Training Setup', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['', ''
                                ]),
                                items: [
                                    {
                                        label: '--Setting--', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/academic-level'],
                                        visible: this.menuGuardService.hideOrShow(['academic-level'])
                                    },
                                ]
                            },
                            {
                                label: 'Loan Setup', icon: 'fa fa-fw fa-sign-in',
                                visible: this.menuGuardService.hideOrShow(['', ''
                                ]),
                                items: [
                                    {
                                        label: '--Setting--', icon: 'fa fa-fw fa-user',
                                        routerLink: ['/academic-level'],
                                        visible: this.menuGuardService.hideOrShow(['academic-level'])
                                    },
                                ]
                            },
        
                        ]
                    },
        
                    {
                        label: 'System Setting', icon: 'fa fa-fw fa-gg',
                        visible: this.menuGuardService.hideOrShow(['certification', 'department',
                            'department-unit', 'global-setting', 'document-type','role']),
                        items: [
                            {
                                label: 'Certification', icon: 'fa fa-fw fa-user',
                                routerLink: ['/certification'],
                                visible: this.menuGuardService.hideOrShow(['certification'])
                            },
                            {
                                label: 'Department', icon: 'fa fa-fw fa-user',
                                routerLink: ['/department'],
                                visible: this.menuGuardService.hideOrShow(['department'])
                            },
                            {
                                label: 'Department Unit', icon: 'fa fa-fw fa-user',
                                routerLink: ['/department-unit'],
                                visible: this.menuGuardService.hideOrShow(['department-unit'])
                            }
                            ,
                            {
                                label: 'Document Type', icon: 'fa fa-fw fa-user',
                                routerLink: ['/document-type'],
                                visible: this.menuGuardService.hideOrShow(['document-type'])
                            },
                            {
                                label: 'Manage ', icon: 'fa fa-fw fa-user',
                                routerLink: ['/role'],
                                visible: this.menuGuardService.hideOrShow(['role'])
                            },
                            {
                                label: 'School Information ', icon: 'fa fa-fw fa-user',
                                routerLink: ['/global-setting'],
                                visible: this.menuGuardService.hideOrShow(['global-setting'])
                            },
                            {
                                label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    {
                                        label: 'Settings', icon: 'fa fa-fw fa-sign-in',
                                        items: [
                                            {
                                                label: '--Setting--', icon: 'fa fa-fw fa-user',
                                                routerLink: ['/academic-level'],
                                                visible: this.menuGuardService.hideOrShow(['academic-level'])
                                            },
                                        ]
                                    },
        
                                ]
                            },
        
                        ]
                    },

                ]
            }
            ,
            {
                label: 'General Reports', icon: 'fa fa-file-pdf-o',
                visible: this.menuGuardService.hideOrShow(['report']),
                items: [


                ]
            },

            //   {
            //         label: 'Defaul Components', icon: 'fa fa-fw fa-bars',
            //         visible: this.menuGuardService.hideOrShow(['global-setting'

            //         ]),
            //         items: [
            //             {
            //                 label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: '20',
            //                 items: [
            //                     {
            //                         label: 'Solid',
            //                         icon: 'fa fa-fw fa-paint-brush',
            //                         items: [
            //                             {
            //                                 label: 'Blue', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('blue', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('blue', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('blue', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Cyan', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('cyan', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('cyan', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('cyan', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Green', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('green', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('green', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('green', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Yellow', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('yellow', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('yellow', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('yellow', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Purple', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('purple', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('purple', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('purple', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Pink', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('pink', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('pink', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('pink', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Blue Grey', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('bluegrey', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('bluegrey', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('bluegrey', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Teal', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('teal', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('teal', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('teal', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Orange', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('orange', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('orange', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('orange', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Grey', icon: 'fa fa-fw fa-paint-brush',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('grey', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('grey', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('grey', 'gradient')
            //                                     }
            //                                 ]
            //                             }
            //                         ]
            //                     },
            //                     {
            //                         label: 'Special',
            //                         icon: 'fa fa-fw fa-paint-brush',
            //                         items: [
            //                             {
            //                                 label: 'Cappuccino', icon: 'fa fa-fw fa-picture-o',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('cappuccino', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('cappuccino', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('cappuccino', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Montreal', icon: 'fa fa-fw fa-picture-o',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('montreal', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('montreal', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('montreal', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Hollywood', icon: 'fa fa-fw fa-picture-o',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('hollywood', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('hollywood', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('hollywood', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Peak', icon: 'fa fa-fw fa-picture-o',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('peak', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('peak', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('peak', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Alive', icon: 'fa fa-fw fa-certificate',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('alive', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('alive', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('alive', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Emerald', icon: 'fa fa-fw fa-certificate',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('emerald', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('emerald', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('emerald', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Ash', icon: 'fa fa-fw fa-certificate',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('ash', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('ash', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('ash', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Noir', icon: 'fa fa-fw fa-certificate',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('noir', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('noir', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('noir', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Mantle', icon: 'fa fa-fw fa-certificate',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('mantle', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('mantle', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('mantle', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Predawn', icon: 'fa fa-fw fa-certificate',
            //                                 items: [
            //                                     {
            //                                         label: 'Light', icon: 'fa fa-fw fa-square-o',
            //                                         command: (event) => this.changeTheme('predawn', 'light')
            //                                     },
            //                                     {
            //                                         label: 'Dark', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('predawn', 'dark')
            //                                     },
            //                                     {
            //                                         label: 'Gradient', icon: 'fa fa-fw fa-square',
            //                                         command: (event) => this.changeTheme('predawn', 'gradient')
            //                                     }
            //                                 ]
            //                             },
            //                         ]
            //                     }
            //                 ]
            //             },
            //             {
            //                 label: 'Menu Modes', icon: 'fa fa-fw fa-bars',
            //                 items: [
            //                     { label: 'Static Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'static' },
            //                     { label: 'Overlay Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'overlay' },
            //                     { label: 'Slim Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'slim' },
            //                     { label: 'Horizontal Menu', icon: 'fa fa-fw fa-bars', command: () => this.app.layoutMode = 'horizontal' }
            //                 ]
            //             },
            //             {
            //                 label: 'Mega Menu', icon: 'fa fa-fw fa-bars', badgeStyleClass: 'text-badge', badge: 'New',
            //                 items: [
            //                     { label: 'Light Menu', icon: 'fa fa-sun-o fa-fw', command: () => this.app.megaMenuMode = 'light' },
            //                     { label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw', command: () => this.app.megaMenuMode = 'dark' },
            //                     { label: 'Gradient Menu', icon: 'fa fa-moon-o fa-fw', command: () => this.app.megaMenuMode = 'gradient' }
            //                 ]
            //             },
            //             {
            //                 label: 'User Menu', icon: 'fa fa-fw fa-user',
            //                 items: [
            //                     { label: 'Inline Profile', icon: 'fa fa-sun-o fa-fw', command: () => this.app.profileMode = 'inline' },
            //                     { label: 'Top Profile', icon: 'fa fa-moon-o fa-fw', command: () => this.app.profileMode = 'top' }
            //                 ]
            //             },
            //             {
            //                 label: 'Components', icon: 'fa fa-fw fa-sitemap',
            //                 items: [
            //                     { label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/sample'] },
            //                     { label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/forms'] },
            //                     { label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/data'] },
            //                     { label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/panels'] },
            //                     { label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/overlays'] },
            //                     { label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/menus'] },
            //                     { label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/messages'] },
            //                     { label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/charts'] },
            //                     { label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/file'] },
            //                     { label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/misc'] }
            //                 ]
            //             },
            //             { label: 'Landing', icon: 'fa fa-fw fa-certificate', url: 'assets/pages/landing.html', target: '_blank' },
            //             {
            //                 label: 'Template Pages', icon: 'fa fa-fw fa-life-saver',
            //                 items: [
            //                     { label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty'] },
            //                     { label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank' },
            //                     { label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank' },
            //                     { label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank' },
            //                     {
            //                         label: 'Access Denied Page', icon: 'fa fa-fw fa-exclamation-triangle',
            //                         url: 'assets/pages/access.html', target: '_blank'
            //                     }
            //                 ]
            //             },
            //             {
            //                 label: 'Menu Hierarchy', icon: 'fa fa-fw fa-gg',
            //                 items: [
            //                     {
            //                         label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
            //                         items: [
            //                             {
            //                                 label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
            //                                 items: [
            //                                     { label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in' },
            //                                     { label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in' },
            //                                     { label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in' },
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
            //                                 items: [
            //                                     { label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in' },
            //                                     { label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in' }
            //                                 ]
            //                             },
            //                         ]
            //                     },
            //                     {
            //                         label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
            //                         items: [
            //                             {
            //                                 label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
            //                                 items: [
            //                                     { label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in' },
            //                                     { label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in' },
            //                                     { label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in' },
            //                                 ]
            //                             },
            //                             {
            //                                 label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
            //                                 items: [
            //                                     { label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in' },
            //                                     { label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in' }
            //                                 ]
            //                             },
            //                         ]
            //                     }
            //                 ]
            //             },
            //             { label: 'Documentation', icon: 'fa fa-fw fa-book', routerLink: ['/documentation'] }
            //         ]
            //     },


        ];
    }
    //'peak', 'dark'
    changeTheme(theme: string, scheme: string) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';

        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        themeLink.href = 'assets/theme/theme-' + theme + '.css';

        this.app.menuMode = scheme;
    }
}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                   class="ripplelink" *ngIf="!child.routerLink"
                   [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                    <i class="fa fa-fw fa-angle-down layout-menuitem-toggler" *ngIf="child.items"></i>
                </a>

                <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" class="ripplelink" *ngIf="child.routerLink"
                   [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                    <i class="fa fa-fw fa-angle-down layout-menuitem-toggler" *ngIf="child.items"></i>
                </a>
                <div class="submenu-arrow" *ngIf="child.items"></div>
                <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset" [parentActive]="isActive(i)"
                    [@children]="(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?
                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px',
                opacity: 0
            })),
            state('visibleAnimated', style({
                height: '*',
                opacity: 1
            })),
            state('visible', style({
                height: '*',
                'z-index': 100,
                opacity: 1
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*',
                opacity: 0
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    _reset: boolean;

    _parentActive: boolean;

    activeIndex: number;

    constructor(public app: AppLayoutComponent, private menuGuardService: MenuRestrictionService) { }

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }

        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item });
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            } else {
                this.app.resetMenu = false;
            }

            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = null;
        }
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
