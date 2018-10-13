import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAwardComponent } from './player-award.component';

describe('PlayerAwardComponent', () => {
  let component: PlayerAwardComponent;
  let fixture: ComponentFixture<PlayerAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
