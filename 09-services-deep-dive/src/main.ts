import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';
// import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent,
//     {
//         providers:[TasksService]
//     }
// ).catch((err) => console.error(err));


export const taskServiceToken = new InjectionToken<TasksService>('Task-service-token');

bootstrapApplication(AppComponent,
    {
        providers:[{provide:taskServiceToken, useClass:TasksService}]
    }
).catch((err) => console.error(err));
