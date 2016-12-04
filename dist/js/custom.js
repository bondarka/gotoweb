var app = angular.module('gotoweb', []);
app.controller('MainCtrl', function($scope) {
});

$(function() {
    var $upload = $('.form_upload');

    function showImages(files){
        console.log(files);
        var $imagesList = $('.form_images');
        $imagesList.hide();
        for (var i = 0; i < files.length; i++) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("<div>")
                    .addClass('form_image')
                    .css('background-image', 'url(' + e.target.result + ')')
                    .appendTo($imagesList);
            }
            reader.readAsDataURL(files[i]);
        }
        $imagesList.show();
        $('.form_upload-info').hide();
    }

    $(".form_upload-link", $upload).on('click', function(e){
        console.log('cliclk');
        e.preventDefault();
        $(".form_upload-element:hidden").trigger('click');
    });

    $(".form_upload-element").on('change', function(event){
        showImages(event.target.files);
    });

    $upload.on('drag dragstart dragend dragover dragenter dragleave drop', function(event) {
        event.preventDefault();
        event.stopPropagation();
    })
    .on('dragover dragenter', function() {
        $upload.addClass('is-dragover');
    })
    .on('dragleave dragend drop', function() {
        $upload.removeClass('is-dragover');
    })
    .on('drop', function(event) {
        droppedFiles = event.originalEvent.dataTransfer.files;
        showImages(droppedFiles);
    });

});