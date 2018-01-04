import {Injectable, Inject, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Injectable()
export class GlobalService {

    constructor(
        @Inject(PLATFORM_ID) private platform_id
    ) {

    }

    IsBrowser(){
        return isPlatformBrowser(this.platform_id)
    }

}