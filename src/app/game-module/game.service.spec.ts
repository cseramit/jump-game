import { GameService } from './game.service';

describe('Unit Test for GameService', () => {
  let gameService: GameService;

  beforeEach( () => {
    gameService = new GameService;
  });

  it('should return false if jumpSize is 0', () => {
    const retValue = gameService.evaluateJumps(0, '010101010');
    expect(retValue).toBeFalsy();
  });

  it('should return false if elementString is empty', () => {
    const retValue = gameService.evaluateJumps(4, '');
    expect(retValue).toBeFalsy();
  });

  it('should make a call to nextMove', () => {
    const spy = spyOn(gameService, 'nextMove').and.returnValue(true);
    const splitArray = '0101010101'.split('');
    const retValue = gameService.evaluateJumps(4, '0101010101');
    expect(spy).toHaveBeenCalledWith(4, splitArray, 0, []);
  });

  it('should return false, if previous positions contains the current position', () => {
    const splitArray = '0101010101'.split('');
    const retValue = gameService.nextMove(3, splitArray, 0, ['0']);
    expect(retValue).toBeFalsy();
  });

  it('should return false, if previous positions contains the current position', () => {
    const splitArray = '0101010101'.split('');
    const retValue = gameService.nextMove(3, splitArray, 0, ['0']);
    expect(retValue).toBeFalsy();
  });

  it('should return true, if jumps are 3 and elements array is 00000', () => {
    const splitArray = '00000'.split('');
    const retValue = gameService.nextMove(3, splitArray, 0, []);
    expect(retValue).toBeTruthy();
  });

  it('should return true, if jumps are 5 and elements array is 0000111', () => {
    const splitArray = '0000111'.split('');
    const retValue = gameService.nextMove(5, splitArray, 0, []);
    expect(retValue).toBeTruthy();
  });

  it('should return false, if jumps are 3 and elements array is 001110', () => {
    const splitArray = '001110'.split('');
    const retValue = gameService.nextMove(3, splitArray, 0, []);
    expect(retValue).toBeFalsy();
  });

  it('should return false, if jumps are 1 and elements array is 010', () => {
    const splitArray = '010'.split('');
    const retValue = gameService.nextMove(1, splitArray, 0, []);
    expect(retValue).toBeFalsy();
  });

});
