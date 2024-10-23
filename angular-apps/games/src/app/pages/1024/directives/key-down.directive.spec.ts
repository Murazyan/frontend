import { OtteService } from '../services/otte.service';
import { KeyDownDirective } from './key-down.directive';

describe('KeyDownDirective', () => {
  it('should create an instance', () => {
    const directive = new KeyDownDirective(new OtteService());
    expect(directive).toBeTruthy();
  });
});
