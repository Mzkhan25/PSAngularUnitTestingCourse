import { TestBed, inject } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe ('HeroService',() => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service : HeroService;
    beforeEach(() =>{
        mockMessageService = jasmine.createSpyObj(['add'])
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers:[
                HeroService,
                {provide : MessageService, useValue: mockMessageService}
            ],
                schemas: [NO_ERRORS_SCHEMA]
        });
        httpTestingController = TestBed.get(httpTestingController);
        service= TestBed.get(HeroService);
    });
    describe ('getHero',() => {
        
        //  Incase we want to inject, instead of declaring it
        // it('should call get with the correct URL', inject([HeroService, HttpTestingController],
        //     (service : HeroService, controller : HttpTestingController)  => {

        //     service.getHero(4).subscribe();
        // }));

        // it('should call get with the correct URL', ()  => {

        //     service.getHero(4).subscribe();

        //     const req = httpTestingController.expectOne('api/heroes/4');
        //     req.flush( {id:4, name: 'Super man', strength:23});
        // });
    });
})