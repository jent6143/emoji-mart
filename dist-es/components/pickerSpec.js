import _extends from '../polyfills/extends';
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import Picker from './picker';

var click = TestUtils.Simulate.click;
var renderIntoDocument = TestUtils.renderIntoDocument;
var scryRenderedComponentsWithType = TestUtils.scryRenderedComponentsWithType;
var findRenderedComponentWithType = TestUtils.findRenderedComponentWithType;


describe('Picker', function () {
  var subject = void 0;

  it('works', function () {
    subject = render();
    expect(subject).toBeDefined();
  });

  describe('categories', function () {
    it('shows 10 by default', function () {
      subject = render();
      expect(subject.categories.length).toEqual(10);
    });

    it('will not show some based upon our filter', function () {
      subject = render({ emojisToShowFilter: function emojisToShowFilter(unified) {
          return false;
        } });
      expect(subject.categories.length).toEqual(2);
    });
  });

  function render() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var defaultProps = {};
    return renderIntoDocument(React.createElement(Picker, _extends({}, defaultProps, props)));
  }
});