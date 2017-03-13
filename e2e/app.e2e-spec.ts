import { TresCoracoesLojaPage } from './app.po';

describe('tres-coracoes-loja App', function() {
  let page: TresCoracoesLojaPage;

  beforeEach(() => {
    page = new TresCoracoesLojaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
