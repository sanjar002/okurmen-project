import React, { Component } from 'react';
import './inputForm.css' 
import { withTranslation } from 'react-i18next';

class Inputform extends Component {
  
  

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //   };
  // }

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log  ч(this.state);
  // }

  render() {
    // const { name, email, message } = this.state;

    // const { t } = useTranslation()
    return (
      <div className='form-control'>
        <div className='p'>
            <h4>{this.props.t("Сабакка жазылыңыз!")}</h4>
        </div>
        <form className='form' onSubmit={this.handleSubmit} action="https://formsubmit.co/okurmen2022@gmail.com" method="POST">
          {/* <label className='label'> */}
            <input className='input-field input-name2' type="text" name="name" placeholder='Имя' onChange={this.handleChange} />
          {/* </label> */}
          <br />
          {/* <label className='label'> */}
            <input className='input-field' type="tel" name="tel" placeholder='телефон' onChange={this.handleChange} />
          {/* </label> */}
          <br />
          <br />
          <button className='submit' type="submit">{this.props.t("Жөнөтүү")}</button>
        </form>
      </div>
    );
  }
}

export default withTranslation()(Inputform) ;