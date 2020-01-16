/* 3. This is a pure reducer function */
// mutates a state into a new state
function reducer(state = 0, action)
{
  if(action && action.type == "increase")
  {
    return ++state;
  }
  else if(action && action.type == "decrease")
  {
    return --state;
  }
  else
  {
    return state;
  }
}

// renders the mutated state in state view
function render()
{
  let state = stateTree.getState();
  
  // updates state view - renders state
  $stateView.html(state);
};

/* create Redux store */
/* 1. A read only State Tree initialized - A single source of truth */
const stateTree = Redux.createStore(reducer);

// render function associated with the State Tree
stateTree.subscribe(render);

// creates view controls & append to body
let $controlsView = $(
  `<div id="view-controls">
    <button id="btnIncrease">+ increase</button>
    <button id="btnDecrease">- decrease</button>
  </div>`);

// create state view - this is what gets updated by the render method
let $stateView = $(`<div id="view-state">0</div>`);

let $body = $('body');
let $app = $(`<div id="app"></div>`);

$body.append($app);

$app.append($stateView);
$app.append($controlsView);

let $btnIncrease = $("#btnIncrease");
let btnDecrease = $("#btnDecrease");

$btnIncrease.click((e) => {
  stateTree.dispatch({type:"increase"});
})