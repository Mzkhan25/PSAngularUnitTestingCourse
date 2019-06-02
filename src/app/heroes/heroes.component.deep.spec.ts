import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";

describe('HeroesComponent (Deep test)', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;
    let fixture: ComponentFixture<HeroesComponent>;

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
                HeroComponent
            ],
             schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
        });

        fixture = TestBed.createComponent(HeroesComponent);
       
    });

    it('should render each hero as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        
        //run ngOnInit
        fixture.detectChanges();

        //Basically going to check how many hero compnent are created in Heroes page. 
        let heroCompenents= fixture.debugElement.queryAll(By.directive(HeroComponent));

        expect(heroCompenents.length).toBe(6);
        expect(heroCompenents[0].componentInstance.hero.name).toEqual('Spider man');

    })

    it('should check whether hero list is same as input or not', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        
        //run ngOnInit
        fixture.detectChanges();

        
        let heroCompenents= fixture.debugElement.queryAll(By.directive(HeroComponent));

        //Checking every component individually
        for (let index = 0; index < HEROES.length; index++) {
            
            expect(heroCompenents[index].componentInstance.hero).toEqual(HEROES[index]);
            
        }
    

    })


})