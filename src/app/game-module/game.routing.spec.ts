import { gameRoutes } from './game.routing.module';
import { GameComponent } from './game/game.component';

describe('Unit Test Suite :: GameRouting', () => {

  it('should ensure that one route exists', () => {
    expect(gameRoutes.length).toBe(1);
  });

  it('should ensure that a route exists for GameComponent', () => {
    expect(gameRoutes).toContain({ path: '', component: GameComponent });
  });

});
