'use strict';

describe('Service: organizations', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizations;
  beforeEach(inject(function (_organizations_) {
    organizations = _organizations_;
  }));

  it('should do something', function () {
    expect(!!organizations).toBe(true);
  });

});
