/**
 * Created by renzo.rombola on 17/11/2015.
 */
Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("original")
    ],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

if (Meteor.isServer) {
    Images.allow({
        insert: function (userId) {
            return true ;
        },
        remove: function (userId) {
            return true ;
        },
        download: function () {
            return true;
        },
        update: function (userId) {
            return true ;
        }
    });

    Meteor.publish('images', function() {
        return Images.find({});
    });
}