const counterReducer = (state = {good: 0, bad: 0, ok: 0}, action) => {
    switch (action.type) {
      case 'GOOD': {
        const oldBad = state.bad
        const oldOK = state.ok
        const newGood = state.good + 1
        const newState = { bad: oldBad, ok: oldOK, good: newGood}
        return newState
      }
  
      case 'BAD': {
        const newBad = state.bad + 1
        const oldOK = state.ok
        const oldGood = state.good
        const newState = { bad: newBad, ok: oldOK, good: oldGood}
        return newState
      }
  
      case 'OK': {
        const oldBad = state.bad 
        const newOK = state.ok + 1
        const oldGood = state.good
        const newState = { bad: oldBad, ok: newOK, good: oldGood}
        return newState
      }
  
      case 'RESET': return {good: 0, bad: 0, ok: 0}
    }
    return state
  }

  export default counterReducer