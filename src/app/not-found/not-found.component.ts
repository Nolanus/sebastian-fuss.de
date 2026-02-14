import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    public currentPath: string;

    constructor(router: Router) {
        this.currentPath = router.url;
    }

    ngOnInit(): void {
    }

}
