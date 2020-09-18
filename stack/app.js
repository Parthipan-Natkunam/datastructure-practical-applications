const UNDO_STACK = [];
const REDO_STACK = [];

window.addEventListener("DOMContentLoaded", () => {
  const boldBtn = document.getElementById("bold-btn");
  const italicsBtn = document.getElementById("italics-btn");
  const underlineBtn = document.getElementById("underline-btn");
  const undoBtn = document.getElementById("undo-btn");
  const redoBtn = document.getElementById("redo-btn");
  const textbox = document.getElementById("text-container");
  const undoSize = document.getElementById("undo-size");
  const redoSize = document.getElementById("redo-size");

  const updateStackSizeDisplay = () => {
    undoSize.innerText = UNDO_STACK.length;
    redoSize.innerText = REDO_STACK.length;
  };

  const execFormatCommand = (command) => {
    UNDO_STACK.push(textbox.innerHTML);
    updateStackSizeDisplay();
    document.execCommand(command);
  };

  boldBtn.addEventListener("click", () => execFormatCommand("bold"));
  italicsBtn.addEventListener("click", () => execFormatCommand("italic"));
  underlineBtn.addEventListener("click", () => execFormatCommand("underline"));

  undoBtn.addEventListener("click", () => {
    if (UNDO_STACK.length) {
      REDO_STACK.push(textbox.innerHTML);
      const prevState = UNDO_STACK.pop();
      if (prevState) {
        textbox.innerHTML = prevState;
      }
      updateStackSizeDisplay();
    }
  });

  redoBtn.addEventListener("click", () => {
    if (REDO_STACK.length) {
      UNDO_STACK.push(textbox.innerHTML);
      const nextState = REDO_STACK.pop();
      if (nextState) {
        textbox.innerHTML = nextState;
      }
      updateStackSizeDisplay();
    }
  });
});
