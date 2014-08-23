'use strict';

describe('Directive: nonDraggable', function () {

  // load the directive's module
  beforeEach(module('websiteSnapickApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<non-draggable></non-draggable>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nonDraggable directive');
  }));
});
