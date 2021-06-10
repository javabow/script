var editor_config = {

                  path_absolute : "/",
                  selector: "textarea",
                  height : "600",
                  image_dimensions: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                    "searchreplace wordcount visualblocks visualchars code fullscreen",
                    "insertdatetime media nonbreaking save table contextmenu directionality",
                    "emoticons template paste textcolor colorpicker textpattern"
                  ],
                  toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
                  relative_urls: false,
                  min_width: 600,
                  file_browser_callback : function(field_name, url, type, win) {
                    var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                    var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

                    var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
                    if (type == 'image') {
                      cmsURL = cmsURL + "&type=Images";
                    } else {
                      cmsURL = cmsURL + "&type=Files";
                    }

                    tinyMCE.activeEditor.windowManager.open({
                      file : cmsURL,
                      title : 'Filemanager',
                      width : x * 0.8,
                      height : y * 0.8,
                      resizable : "yes",
                      close_previous : "no"
                    });
                  },
                    setup: function (editor) {
                        editor.on('init', function(args) {
                            editor = args.target;

                            editor.on('NodeChange', function(e) {
                            if (e && e.element.nodeName.toLowerCase() == 'img') {
                                width = e.element.width;
                                height = e.element.height;
                                set_tengah = "display: block; margin-left: auto; margin-right: auto;";
                                class_bootstrap = "img-fluid"
                                // if (width != 10) {
                                //     height = 400;
                                //     width = 720;
                                // }
                                height = 'auto';
                                width = 'auto';
                            tinyMCE.DOM.setAttribs(e.element, {'width': width, 'height': height, 'style': set_tengah, 'class': class_bootstrap});
                            }
                            });
                        });
                    }

                };

                tinymce.init(editor_config);