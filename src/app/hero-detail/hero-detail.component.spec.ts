import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "../hero.service";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
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
            imports:[FormsModule,RouterTestingModule],
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

      it('should call updateHero when save is called',() => {

        mockHeroService.updateHero.and.returnValue (of ({}));

        fixture.detectChanges();

        fixture.componentInstance.save();

        expect(mockHeroService.updateHero).toHaveBeenCalled();
        // const text= fixture.nativeElement.querySelecter('h2').textContent;

        // expect(text).toContain('SPIDER MAN');
    })
})