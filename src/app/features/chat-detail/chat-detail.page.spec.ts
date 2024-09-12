import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatDetailPage } from './chat-detail.page';

describe('ChatDetailPage', () => {
  let component: ChatDetailPage;
  let fixture: ComponentFixture<ChatDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
