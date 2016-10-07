import { Ng2ExamplesShoppingCardPage } from './app.po';

describe('ng2-examples-shopping-card App', function() {
  let page: Ng2ExamplesShoppingCardPage;

  beforeEach(() => {
    page = new Ng2ExamplesShoppingCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
