import { NgModule } from "@angular/core";
import { MyLibraryComponent } from "./my-library.component";
import { MyButtonComponent } from "./my-button/my-button.component";

@NgModule({
    declarations: [MyLibraryComponent, MyButtonComponent],
    imports: [],
    exports: [MyLibraryComponent, MyButtonComponent]

})
export class MyLibraryModule{}