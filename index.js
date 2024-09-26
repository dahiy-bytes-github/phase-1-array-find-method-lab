// code your solution here
function superbowlWin(records) {
    // Use the find() method to locate the first win
    const winRecord = records.find(record => record.result === "W");
    
    // Return the year if a win is found, otherwise return undefined
    return winRecord ? winRecord.year : undefined;
  }
  