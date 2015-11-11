//codice per la Dropzone

Template.imageUpload.rendered = function(){

    var arrayOfImageIds = [];

    Dropzone.autoDiscover = false;

    // Adds file uploading and adds the imageID of the file uploaded
    // to the arrayOfImageIds object.

    var dropzone = new Dropzone("form#dropzone", {
        accept: function(file, done){
            MyImages.insert(file, function(err, fileObj){
                if(err){
                  alert("Error");
                } else {
                  // gets the ID of the image that was uploaded
                  var imageId = fileObj._id;
                  // do something with this image ID, like save it somewhere
                  arrayOfImageIds.push(imageId);
                };
            });
        }
    });
 

};