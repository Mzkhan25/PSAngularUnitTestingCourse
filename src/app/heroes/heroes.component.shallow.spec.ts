import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (Shallow test)', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;
    let fixture: ComponentFixture<HeroesComponent>;


    @Component({
        selector: 'app-hero',
        template: '<div></div>'
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
        // @Output() delete = new EventEmitter();
    }

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        HEROES = [
            { id: 1, name: 'Spider man', strength: 8 },
            { id: 2, name: 'Cat woman', strength: 20 },
            { id: 3, name: 'Batman', strength: 21 },
            { id: 4, name: 'Super man', strength: 23 },
            { id: 5, name: 'Black widow', strength: 15 },
            { id: 6, name: 'Ironman', strength: 30 }
        ]
        TestBed.configureTestingModule({

            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            //  schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
        });

        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set Heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(6);

    })

    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(6);

    })


})