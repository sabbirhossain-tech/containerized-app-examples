import { bootstrapApplication } from '@angular/platform-browser';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <main>
            <h1>Angular SPA container</h1>
            <p>The application is running.</p>
        </main>
    `,
})
class App {}

bootstrapApplication(App).catch((error: unknown) => console.error(error));
