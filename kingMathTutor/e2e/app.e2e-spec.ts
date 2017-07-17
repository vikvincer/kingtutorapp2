import { KingMathTutorPage } from './app.po';

describe('king-math-tutor App', () => {
  let page: KingMathTutorPage;

  beforeEach(() => {
    page = new KingMathTutorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
