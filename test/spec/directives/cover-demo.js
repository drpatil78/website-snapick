'use strict';

describe('Directive: coverDemo', function () {

  // load the directive's module
  beforeEach(module('websiteSnapickApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cover-demo></cover-demo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the coverDemo directive');
  }));
});
