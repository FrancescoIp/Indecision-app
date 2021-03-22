import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
        //per far si che i dati risalissero il flusso con il button, abbiamo definito una funzione che riceve "e"
        //grazie a questo possiamo passare i dati alla funzione 
      }}
    >
      remove
    </button>
  </div>
)
export default Option;