import { expect } from 'chai';
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import CounterPage from '../../src/containers/CounterPage';
import configureStore from '../../src/store/configureStore';

function setup(initialState) {
  const store = configureStore(initialState);
  const app = renderIntoDocument(
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
  return {
    app,
    buttons: scryRenderedDOMComponentsWithTag(app, 'button').map(button => button),
    p: findRenderedDOMComponentWithTag(app, 'p')
  };
}


describe('containers', () => {
  describe('CounterPage', () => {
    it('should display initial count', () => {
      const { p } = setup();
      expect(p.textContent).to.match(/^Clicked: 0 times/);
    });

    it('should display updated count after increment button click', () => {
      const { buttons, p } = setup();
      Simulate.click(buttons[0]);
      expect(p.textContent).to.match(/^Clicked: 1 times/);
    });

    it('should display updated count after decrement button click', () => {
      const { buttons, p } = setup();
      Simulate.click(buttons[1]);
      expect(p.textContent).to.match(/^Clicked: -1 times/);
    });
  });
});
