import { ChinausimModule } from './chinausim.module';

describe('ChinausimModule', () => {
  let chinausimModule: ChinausimModule;

  beforeEach(() => {
    chinausimModule = new ChinausimModule();
  });

  it('should create an instance', () => {
    expect(chinausimModule).toBeTruthy();
  });
});
