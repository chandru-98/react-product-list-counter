import React, { Component } from 'react';

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      google: 0,
      microsoft: 0,
      salesforce: 0,
      amazon: 0,
    };
  }

  handleGoogleOnclick = (isAdd) => {
    if (isAdd) {
      this.setState((preState) => ({
        ...preState,
        google: preState.google + 1,
      }));
    } else {
      this.setState((preState) => ({
        ...preState,
        google: preState.google - 1,
      }));
    }
  };

  handleMicrosoftOnclick = (isAdd) => {
    if (isAdd) {
      this.setState((preState) => ({
        ...preState,
        microsoft: preState.microsoft + 1,
      }));
    } else {
      this.setState((preState) => ({
        ...preState,
        microsoft: preState.microsoft - 1,
      }));
    }
  };

  handleSalesforceOnclick = (isAdd) => {
    if (isAdd) {
      this.setState((preState) => ({
        ...preState,
        salesforce: preState.salesforce + 1,
      }));
    } else {
      this.setState((preState) => ({
        ...preState,
        salesforce: preState.salesforce - 1,
      }));
    }
  };

  handleAmazonOnclick = (isAdd) => {
    if (isAdd) {
      this.setState((preState) => ({
        ...preState,
        amazon: preState.amazon + 1,
      }));
    } else {
      this.setState((preState) => ({
        ...preState,
        amazon: preState.amazon - 1,
      }));
    }
  };

  render() {
    const { google, microsoft, salesforce, amazon } = this.state;
    return (
      <div>
        <span class="container-display">
          <h3>Google </h3>
          <button onClick={() => this.handleGoogleOnclick(true)}>Add</button>
          <button
            disabled={google === 0}
            onClick={() => this.handleGoogleOnclick(false)}
          >
            Delete
          </button>
        </span>
        <span>
          <h3>Microsoft</h3>
          <button onClick={() => this.handleMicrosoftOnclick(true)}>Add</button>
          <button
            disabled={microsoft === 0}
            onClick={() => this.handleMicrosoftOnclick(false)}
          >
            Delete
          </button>
        </span>
        <span>
          <h3>Salesforce </h3>
          <button onClick={() => this.handleSalesforceOnclick(true)}>
            Add
          </button>
          <button
            disabled={salesforce === 0}
            onClick={() => this.handleSalesforceOnclick(false)}
          >
            Delete
          </button>
        </span>
        <span>
          <h3>Amazon </h3>
          <button onClick={() => this.handleAmazonOnclick(true)}>Add</button>
          <button
            disabled={amazon === 0}
            onClick={() => this.handleAmazonOnclick(false)}
          >
            Delete
          </button>
        </span>
        <hr />
        <br />
        <div>
          <h3>Google: {google}</h3>
          <h3>Microsoft : {microsoft}</h3>
          <h3>Salesforce : {salesforce}</h3>
          <h3>Amazon : {amazon}</h3>
        </div>
      </div>
    );
  }
}
