import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public positions = [
        {
            start: 2019,
            end: null,
            title: 'Managing Director Technology',
            company: 'United Workspace GmbH',
            location: 'Frankfurt, Germany',
            description: 'Scaled SleevesUp! Spaces GmbH locations & tech rollout (merged in 2024). Leading process automation, AI tooling, quality management, and legal operations today',
        },
        {
            start: 2021,
            end: null,
            title: 'Software Development Consultant',
            company: 'Skylink Technologies GmbH',
            location: 'Frankfurt, Germany / Remote',
            description: 'Software & cloud architecture, AI research & prototyping, and AI-driven workflow tooling',
        },
        {
            start: 2013,
            end: 2019,
            title: 'Web Developer',
            company: 'FIS Systeme GmbH',
            location: 'Frankfurt, Germany / Cape Town, South Africa',
            description: 'Agile software and web development (HTML, CSS, AngularJS, Angular, and Java)',
        },
        {
            start: 2014,
            end: 2017,
            title: 'Android Developer',
            company: 'RanX GmbH',
            location: 'Frankfurt, Germany',
            description: 'Lead development of the Android app (Java). Planning, implementation and control of company-wide release processes',
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
