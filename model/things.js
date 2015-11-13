Things = new Mongo.Collection('things');

var sectionsSchema = new SimpleSchema({
    'pax' : {type:Boolean,optional:true,defaultValue:false,blackbox: true},
    'geo' : {type:Boolean,optional:true,defaultValue:false,blackbox: true},
    'time' : {type:Boolean,optional:true,defaultValue:false,blackbox: true},
    'rooms' : {type:Boolean,optional:true,defaultValue:false,blackbox: true}
});

var thingSchema = new SimpleSchema({
    'name' :{ type:String,optional:true },
    'nameIta' :{ type:String,optional:true },
    'nameEng' :{ type:String,optional:true },
    'descIta' :{ type:String,optional:true },
    'descEng' :{ type:String,optional:true },
    'publishState' :{ type:String,optional:true,defaultValue:'Inserito'},
    'sections':{type: sectionsSchema,optional:true,blackbox: true},
    'set': {type:String,optional:true,defaultValue:''},
    'createdAt': { type: Date,optional:true}
});

Things.attachSchema(thingSchema);
Things.allow({
	insert: function (userId, thing) {
		return true;
	},
	update: function (userId, thing, fields, modifier) {
		return true;
	},
	remove: function (userId, thing) {
		return true;
	}
	
});

