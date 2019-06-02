import { TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (Shallow tests)', () => {
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero',() => {

        fixture.componentInstance.hero= {id:1, name: 'Spider man', strength:8};

        expect(fixture.componentInstance.hero.name).toEqual('Spider man');
    })

    it('should render the hero name in an anchor tag using debug element',() => {

        fixture.componentInstance.hero= {id:1, name: 'Spider man', strength:8};
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('Spider man');
    })

    it('should render the hero name in an anchor tag using native element',() => {

        fixture.componentInstance.hero= {id:1, name: 'Spider man', strength:8};
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Spider man');
    })
})