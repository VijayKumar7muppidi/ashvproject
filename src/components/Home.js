import React from 'react'
import './index.css'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GrClose} from 'react-icons/gr'

class Home extends React.Component {
  state = {
    showCart: false,
    showModal: false,
  }

  renderRow4() {
    return (
      <div className="header-container">
        <select className="select">
          <option>Loan Recommendation</option>
        </select>
      </div>
    )
  }

  renderRow5() {
    return (
      <div className="header-container row align-center">
        <p className="bold-text">Loan Recommendation</p>
        <div className="row align-center">
          <p className="person-name-box">G Venkatesh</p>
          <p className="person-name-box">Action</p>
        </div>
      </div>
    )
  }

  renderRecommendationBox() {
    return (
      <div className="recommendation-container">
        <div className="not-found-image" />
        <p className="not-found-text">No Recommendations Yet !</p>
        <Popup
          modal
          trigger={
            <button
              className="create-button"
              onClick={() => this.setState({showModal: true})}
            >
              Create
            </button>
          }
          overlayStyle={{backgroundColor: '#00000044'}}
        >
          {close => this.renderModal(close)}
        </Popup>
      </div>
    )
  }

  renderModal(closeFunction) {
    return (
      <div className="modal-container">
        <div className="modal-header">
          <p className="modal-header-title">New</p>
          <button className="modal-close-icon" onClick={closeFunction}>
            <GrClose />
          </button>
        </div>
        <div className="column">
          <p className="label-name">Policy</p>
          <select className="select select2">
            <option value="" disabled selected>
              Please Select
            </option>
          </select>
        </div>
        <div className="column">
          <p className="label-name">Loan Amount (INR)</p>
          <input className="input" type="text" value="12,00,000" />
        </div>
        <div className="column">
          <p className="label-name">Interest Rate (%)</p>
          <input className="input" type="text" value="12" />
        </div>
        <div className="column">
          <p className="label-name">No. of Installments</p>
          <input className="input" type="text" value="36" />
        </div>
        <div className="column">
          <p className="label-name">Repayment Frequency</p>
          <select className="select select2">
            <option value="" disabled selected>
              Please Select
            </option>
          </select>
        </div>
        <div className="column">
          <p className="label-name">Tenure</p>
          <input className="input" disabled type="text" value="NA" />
        </div>
        <div className="row button-container">
          <button className="cancel-button" onClick={closeFunction}>
            Cancel
          </button>
          <button
            className="cart-create-button"
            onClick={() => this.setState({showCart: true})}
          >
            Create
          </button>
        </div>
      </div>
    )
  }
  rendorcart() {
    return (
      <div className="main-container">
        <div className="carts-container ">
          <div className="carts-inside">
            <h1>01.SME Loan</h1>
            <div>
              <button className="cart-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
                edit
              </button>
              <button className="cart-button">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>

          <div>
            <div className="carts-middle carts-middle2">
              <div className="carts-matter">
                <p>Loan Amount(INR)</p>
                <p>1834673747.00</p>
              </div>
              <div>
                <p>Rate of intrest</p>
                <p>9%</p>
              </div>
            </div>
            <div className="carts-middle">
              <div>
                <p>Tenure months</p>
                <p>18</p>
              </div>
              <div>
                <p className="policy">Policy</p>
                <a href="" className="policy policy2">
                  view
                </a>
              </div>
            </div>
          </div>

          <div className="carts-end">
            <p className="carts-endpara">
              Please Type your answers and press enter
            </p>
          </div>
        </div>

        <div className="carts-container ">
          <div className="carts-inside">
            <h1>02.Ghati business Loan</h1>
            <div>
              <button className="cart-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
                edit
              </button>
              <button className="cart-button">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>

          <div>
            <div className="carts-middle carts-middle2">
              <div className="carts-matter">
                <p>Loan Amount(INR)</p>
                <p>1834673747.00</p>
              </div>
              <div>
                <p>Rate of intrest</p>
                <p>9%</p>
              </div>
            </div>
            <div className="carts-middle">
              <div>
                <p>Tenure months</p>
                <p>18</p>
              </div>
              <div>
                <p className="policy">Policy</p>
                <a href="" className="policy policy2">
                  view{' '}
                </a>
              </div>
            </div>
          </div>

          <div className="carts-end">
            <p className="carts-endpara">
              Please Type your answers and press enter
            </p>
          </div>
        </div>

        <div className="carts-container ">
          <div className="carts-inside">
            <h1>03.Dukandar Loan</h1>
            <div>
              <button className="cart-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
                edit
              </button>
              <button className="cart-button">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>

          <div>
            <div className="carts-middle carts-middle2">
              <div className="carts-matter">
                <p>Loan Amount(INR)</p>
                <p>1834673747.00</p>
              </div>
              <div>
                <p>Rate of intrest</p>
                <p>9%</p>
              </div>
            </div>
            <div className="carts-middle">
              <div>
                <p>Tenure months</p>
                <p>18</p>
              </div>
              <div>
                <p className="policy">Policy</p>
                <a href="" className="policy policy2">
                  view{' '}
                </a>
              </div>
            </div>
          </div>

          <div className="carts-end">
            <p className="carts-endpara">
              Please Type your answers and press enter
            </p>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="home-container">
        <Header1 />
        <Header2 />
        <Header3 />
        {this.renderRow4()}
        {this.renderRow5()}
        {!this.state.showCart && this.renderRecommendationBox()}
        {this.state.showCart && this.rendorcart()}
      </div>
    )
  }
}

export default Home
