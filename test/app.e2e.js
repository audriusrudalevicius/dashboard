describe('App', function() {
    var subject;
    var result;

    beforeEach(function() {
        browser.get('/');
    });

    afterEach(function() {
        expect(subject).toEqual(result);
    });

    it('should have a title', function() {
        subject = browser.getTitle();
        result  = 'Dashboard';
    });

    it('should have <div>', function() {
        subject = element(by.deepCss('div')).isPresent();
        result  = true;
    });

});