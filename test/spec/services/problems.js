'use strict';

describe('Service: Problems', function () {

  // load the service's module
  beforeEach(module('adsApp'));

  // instantiate service
  var Problems;
  beforeEach(inject(function (_ProblemsService_) {
    Problems = _ProblemsService_;
  }));

  it('should do something', function () {
    expect(!!Problems).toBe(true);
  });

});
