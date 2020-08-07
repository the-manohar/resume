import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="right">
        <form action="https://formspree.io/xdowaeev" method="POST">
          <div className="form__group">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" required={true} name="name" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" required={true} name="email" />
            </div>
          </div>

          <div className="form__group textarea__wrapper">
            <div>
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="4"
                required={true}
              ></textarea>
            </div>
          </div>
          <button type="submit">Submit Now</button>
        </form>
      </div>
    );
  }
}

export default Form;
