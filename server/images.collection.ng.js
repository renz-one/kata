//definizione di FsCollection per gestire le immagini con upload dalla dropzone

MyImages = new FS.Collection('myImages', {
    stores: [new FS.Store.GridFS("myImages")]
});