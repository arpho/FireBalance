import { ComponentPage } from './app.po';

describe('component App', () => {
  let page: ComponentPage;

  beforeEach(() => {
    page = new ComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
