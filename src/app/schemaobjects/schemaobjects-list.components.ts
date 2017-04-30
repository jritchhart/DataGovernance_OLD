import { Component, OnInit , Input }  from '@angular/core';

import { ISchemaObjects } from './schemaobjects';
import { SchemaObjectsService } from './schemaobjects.service';

@Component({
    selector: 'schemaobjects-app',
    templateUrl: './schemaobjects-list.component.html',
    styleUrls:  ['./schemaobjects-list.component.css']
})
export class schemaobjectsListComponent implements OnInit {
    @Input() pageTitle: string;
    @Input() appType: string;

    //pageTitle: string = 'WMS ODS TABLES AND VIEWS';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    schemaobjects: ISchemaObjects[];

    constructor(private _schemaobjectsService: SchemaObjectsService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        
        this._schemaobjectsService.getSchemaObjects(this.appType)
                .subscribe(schemaobjects => this.schemaobjects = schemaobjects,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Schema Objects List: ' + message;
    }
}
