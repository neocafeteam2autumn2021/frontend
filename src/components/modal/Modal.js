import React from "react";

const Modal = ({ show, close }) => {
    return (
      <>
       {
       show ?
       
        <div
          className="modalContainer"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title">Modal Title</h2>
              <button className="close" onClick={() => close()}>
                X
              </button>
            </header>
            <main className="modal_content">This is modal content</main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>
  
              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default Modal;