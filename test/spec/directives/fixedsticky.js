'use strict';

describe('Directive: fixedsticky', function () {

  // load the directive's module
  beforeEach(module('websiteSnapickApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fixedsticky></fixedsticky>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fixedsticky directive');
  }));
});
