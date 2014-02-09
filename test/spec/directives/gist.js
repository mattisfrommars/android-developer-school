'use strict';

describe('Directive: gist', function () {

  // load the directive's module
  beforeEach(module('adsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gist></gist>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gist directive');
  }));
});
