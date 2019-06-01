import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe ('HeroesComponent',()=>{
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() =>{
        HEROES = [
            {id:1, name: 'Spider man', strength:8},
            {id:2, name: 'Cat woman', strength:20},
            {id:3, name: 'Batman', strength:21},
            {id:4, name: 'Super man', strength:23},
            {id:5, name: 'Black widow', strength:15},
            {id:6, name: 'Ironman', strength:30}
        ]
        mockHeroService= jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);
        component = new HeroesComponent(mockHeroService);
    })

    describe('delete',()=> {

        it('should remove the inidicater hero from the list',() => {
            mockHeroService.deleteHero.and.returnValue(of (true));
            component.heroes= HEROES;

            component.delete(HEROES[5]);

            expect(component.heroes.length).not.toContain(HEROES[5]);
        })

        it('should call deleteHero',() => {
            mockHeroService.deleteHero.and.returnValue(of (true));
            component.heroes= HEROES;
            

            component.delete(HEROES[5]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[5]);
        })
    })

    
})