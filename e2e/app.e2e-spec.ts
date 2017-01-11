import { TickTackToePage } from './app.po';

describe('tick-tack-toe App', function() {
  let page: TickTackToePage;

  beforeEach(() => {
    page = new TickTackToePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
