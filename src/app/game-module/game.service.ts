export class GameService {

  /* Method to santize the jumpSize and elements and call nextMove */
  public evaluateJumps(jumpSize: number, elements: string): boolean {
    if (jumpSize && elements) {
      // Start with 0th position and traversedMoves as [] initially.
      return this.nextMove(jumpSize, elements.split(''), 0, []);
    }
    return false;
  }


  public nextMove(jumpSize: number, elementsArray: string[], currentPos: number, traversedMoves: string[]): boolean {

    // If the currentPos is already traversed, need to terminate the branch.
    if (traversedMoves.indexOf(currentPos.toString()) > -1) {
      return false;
    }


    // Keep a track of the current position in traversedMoves.
    traversedMoves.push(currentPos.toString());


    // Terminating and Winning Conditions handling.
    if (currentPos < 0 ) {
      // Can't go below 0th position.
      return false;
    } else if (currentPos >= elementsArray.length) {
      // You reach here and you win !
      return true;
    } else if (elementsArray[currentPos] === '1') {
      // Can't jump to a position which holds 1.
      return false;
    } else {
        // call self recursively for all three moves you can.
        // (1). Jump by Jumpsize,
        // (2) Move one step ahead
        // (3) Move one step behind.
        return this.nextMove(jumpSize, elementsArray, currentPos + jumpSize, traversedMoves) ||
               this.nextMove(jumpSize, elementsArray, currentPos + 1, traversedMoves) ||
               this.nextMove(jumpSize, elementsArray, currentPos - 1, traversedMoves);
    }
  }

}
