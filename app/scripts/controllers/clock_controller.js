WorldClock.ClockController = Ember.ObjectController.extend({
    updateTime: function() {
        var _this = this;
 
        // Update the time every second.
        Ember.run.later(function() {
            _this.set('localTime', moment().format('h:mm:ss a'));
 
            _this.get('model').forEach(function(model) {
                model.set('time',
                          moment().tz(model.get('name')).format('h:mm:ss a'));
            });
 
            _this.updateTime();
        }, 1000);
    }.on('init'),
 
    localTime: moment().format('h:mm:ss a')
});
