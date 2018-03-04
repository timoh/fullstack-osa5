import React from 'react';


class App extends React.Component {



  render() {

    const doVote = (event) => {
      const store = this.props.store
      store.dispatch({type: 'VOTE', id: event.target.value})   
    }

    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={doVote} value={anecdote.id} >vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App