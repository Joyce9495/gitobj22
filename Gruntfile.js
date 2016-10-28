module.exports=function (grunt) {
//    配置
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        //检查css语法
        csslint:{
            src:['public/stylesheets/*.css']
        },
        //    合并
        concat:{
            css:{
                src:['public/stylesheets/*.css'],
                //根据目录下文件情况配置
                dest:'public/stylesheets/dist/<%= pkg.name%>.css'
            }
        },
        //    压缩css 文件名 .min.css
        cssmin:{
            options:{
                //    移除css文件中的所有注释
                keepSpecialComments:0
            },

            minify:{
                expand:true,
                cwd:'public/stylesheets/dist',
                src:['<%= pkg.name%>.css'],
                dest:'public/stylesheets/dist',
                ext:'.min.css'
            }
        },
        //压缩优化图片大小
        imagemin:{
            dist:{
                options:{
                    optimizationLevel:3
                },
                files:[
                    {
                        expand:true,
                        cwd:'public/images/',
                        //        优化img目录下的所有 png/jpg/Jpeg图片
                        src:['**/*.{png,jpg,jpeg}'],
                        //        优化后的图片保存位置，默认覆盖
                        dest:'public/images/'

                    }
                ]
            }

        },
    //    检查JavaScript语法
        jshint:{
            all: [
                'Gruntfile.js',
                'public/javascripts/myjs.js',
                'public/javascripts/myjs2.js',
                'public/javascripts/new10.28.js'
            ]
        },
    //    合并，精简压缩
        uglify:{
            build:{
                src:'public/javascripts/*.js',
                dest:'public/build/javascripts/<%= pkg.name %>.min.js'
            }
        },
    // 监控
        watch:{
            css:{
                files:'public/stylesheets/*.css',
                tasks:['csslint'],
                options:{
                    spawn:false,
                }
            },
            scripts:{
                files:'public/javascripts/*.js',
                tasks:['jshint'],
                options:{
                    spawn:false,
                }
            }
        }

    });



//    加载插件

    [
        'grunt-contrib-csslint',
        'grunt-contrib-concat',
        'grunt-contrib-cssmin',
        'grunt-contrib-imagemin',
        'grunt-contrib-uglify',
        'grunt-contrib-jshint',
        'grunt-contrib-watch'
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);

    });

    //    默认任务
    // grunt.registerTask('default',['jshint']);
    // grunt.registerTask('default',['csslint','concat','cssmin','imagemin']);
    grunt.registerTask('static',['csslint','concat','cssmin','imagemin','uglify','jshint','watch']);
    grunt.registerTask('watch',['watch',]);
};

//默认任务用于后端(服务器)





