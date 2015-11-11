Things = new Mongo.Collection('things');

Things.allow({
	insert: function (userId, thing) {
		thing.createdAt = new Date();
		thing.name_sort = thing.name.toUpperCase();
		


		return true;
	},
	update: function (userId, thing, fields, modifier) {
		thing.createdAt = new Date();



		return true;
	},
	remove: function (userId, thing) {
		return true;
	}
	
	
});

