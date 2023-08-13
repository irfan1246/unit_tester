import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(waitForAsync(
    () => {
      TestBed.configureTestingModule({
        declarations: [ HomeComponent ]
      }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      });
    }
  ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct content', () => {
    let pElements = el.queryAll(By.css('p'));
    expect(pElements[0].nativeElement.textContent).toBe('home works!');
    let buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();
    component.title = "Welcome to angular testing";
    fixture.detectChanges();
    let textElements = el.queryAll(By.css('.title'));
    expect(textElements[0].nativeElement.textContent).toBe('Welcome to angular testing');
  });
});
