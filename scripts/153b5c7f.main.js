!function(){window.App=Ember.Application.create()}(),function(){Ember.Handlebars.registerHelper("t",function(a,b){var c=b.hash,d=this;return Object.keys(c).forEach(function(a){c[a]=Ember.Handlebars.get(d,c[a],b)}),I18n.t(a,c)})}(),function(){I18n.defaultLocale="en-US",I18n.locale=window.navigator.language||"en-US",I18n.fallbacks=!0,I18n.translations={en:{app:{title:"WorldClock"},welcome:"Welcome to Rec Room!"},fr:{app:{title:"WorldClock"},welcome:"Bievenue à Rec Room !"}}}(),function(){WorldClock.ClockController=Ember.ObjectController.extend({updateTime:function(){var a=this;Ember.run.later(function(){a.set("localTime",moment().format("h:mm:ss a")),a.get("model").forEach(function(a){a.set("time",moment().tz(a.get("name")).format("h:mm:ss a"))}),a.updateTime()},1e3)}.on("init"),localTime:moment().format("h:mm:ss a")})}(),function(){App.TimezoneController=Ember.ObjectController.extend({})}(),function(){App.TimezoneEditController=Ember.ObjectController.extend({needs:"timezone",actions:{save:function(){var a=this;this.get("buffer").forEach(function(b){a.get("controllers.timezone.model").set(b.key,b.value)}),this.transitionToRoute("timezone",this.get("model"))}}})}(),function(){WorldClock.TimezonesController=Ember.ObjectController.extend({init:function(){var a=[];for(var b in moment.tz._zones)a.push({name:moment.tz._zones[b].name,offset:moment.tz._zones[b].offset[0]});this.set("timezones",a),this._super()},selectedTimezone:null,actions:{add:function(){var a=this.store.createRecord("timezone",{name:this.get("selectedTimezone").name,offset:this.get("selectedTimezone").offset});a.save()},remove:function(a){a.destroyRecord()}}})}(),function(){App.ApplicationAdapter=DS.FixtureAdapter,App.ApplicationAdapter===DS.FixtureAdapter&&DS.FixtureAdapter.reopen({queryFixtures:function(a,b){return a.filter(function(a){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];if(a[c]!==d)return!1}return!0})}})}(),function(){WorldClock.Timezone=DS.Model.extend({name:DS.attr("string"),offset:DS.attr("number")}),App.Timezone.FIXTURES=[{id:0},{id:1}]}(),function(){WorldClock.ApplicationRoute=Ember.Route.extend({redirect:function(){this.transitionTo("clock")}})}(),function(){WorldClock.ClockRoute=Ember.Route.extend({model:function(){return this.get("store").find("timezone")}})}(),function(){App.TimezoneEditRoute=Ember.Route.extend({model:function(){return this.get("store").find("timezone",this.modelFor("timezone").id)},setupController:function(a,b){a.set("model",b)}})}(),function(){App.TimezoneRoute=Ember.Route.extend({model:function(a){return this.get("store").find("timezone",a.timezone_id)}})}(),function(){App.TimezonesRoute=Ember.Route.extend({model:function(){return this.get("store").find("timezone")}})}(),function(){App.ClockView=Ember.View.extend({})}(),function(){App.TimezoneEditView=Ember.View.extend({})}(),function(){App.TimezoneView=Ember.View.extend({})}(),function(){App.TimezonesView=Ember.View.extend({})}(),function(){App.Router.map(function(){})}();