import { NgCloudmusicPage } from './app.po';

describe('ng-cloudmusic App', function() {
  let page: NgCloudmusicPage;

  beforeEach(() => {
    page = new NgCloudmusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
