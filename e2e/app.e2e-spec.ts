import { ADMLTEPage } from './app.po';

describe('admlte App', function() {
  let page: ADMLTEPage;

  beforeEach(() => {
    page = new ADMLTEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
