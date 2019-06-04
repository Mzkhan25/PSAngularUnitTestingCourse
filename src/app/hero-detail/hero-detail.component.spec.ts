import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "../hero.service";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";

describe ('HeroDetailComponent',() =>{
    let mockActivatedRoute, mockHeroService, mockLocation;
    let fixture: ComponentFixture<HeroDetailComponent>;
    beforeEach(()=>{
        mockActivatedRoute = {
            snapshot: {paraMap: {get: () => {return '1';}}}
        }
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);

        TestBed.configureTestingModule({
            imports:[FormsModule],
            declarations :[HeroDetailComponent],
            providers: [
                { provide: HeroService, useValue: mockActivatedRoute },
                { provide: ActivatedRoute, useValue: mockHeroService },
                { provide: Location, useValue: mockLocation },
            ]
        });
       fixture = TestBed.createComponent(HeroDetailComponent);

        mockHeroService.getHero.and.returnValue( of ( { id: 1, name: 'Spider man', strength: 8 }));
    })

    // it('should render hero name in a h2 tag',() => {

    //     fixture.detectChanges();
    //     const text= fixture.nativeElement.querySelecter('h2').textContent;

    //     expect(text).toContain('SPIDER MAN');
    // })
})