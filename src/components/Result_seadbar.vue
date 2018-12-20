<style>


</style>
<template>
    <aside class="main-sidebar" style="margin-top:50px;">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../../../static/image/man_user.png" class="img-circle" alt="User Image"></div>
                <div class="pull-left info" style="color:#556081;">
                    <p>{{user.username}}</p>
                    <!-- Status -->
                    <a href="#" style="color:#556081;">
                        <i class="fa fa-circle text-success"></i>在线</a>
                </div>
            </div>
        </section>

        <div class="list">
            <ul class="yiji">
                <li  v-bind:class="{ active: result_title=='clone' }">
                    <a :href="getUrl('clone')"  ><i class="fa fa-binoculars" ></i> <span>检测结果概览</span></a>
                </li>
                <li v-bind:class="{ active: result_title=='task_info' }">
                    <a  :href="getUrl('task_info')"><i class="fa fa-pencil"></i> <span>项目基础信息</span></a>
                </li>
                <li v-bind:class="{ active: result_title=='clone_detail' }" v-show="type!=-1">
                    <a  :href="getUrl('clone_detail')">
                    <i class="fa fa-paste"></i> <span>开源成分分析</span></a>
                </li>
                <li v-bind:class="{ active: result_title=='common_component' }">
                    <a  :href="getUrl('common_component')">
                    <i class="fa fa-paste"></i> <span>开源项目溯源</span></a>
                </li>
                <li v-bind:class="{ active: result_title=='trace_detail' }">
                    <a  :href="getUrl('trace_detail')">
                    <i class="fa fa-paste"></i> <span>溯源推荐</span></a>
                </li>

<!--
                <li v-bind:class="{ active: result_title=='binary_lib' }">
                    <a :href="getUrl('binary_lib')">

                <i class="fa fa-paste"></i> <span>二进制组件检测</span></a></li>
-->

               <!--去掉了开源项目许可证-->
                <li v-bind:class="{ active: result_title=='license_detail'}">
                     <a :href="getUrl('license_detail')">
                     <i class="fa fa-certificate"></i> <span>许可证检测</span></a>
                </li>
                <!--not clone for license-->
<!--
                <li v-bind:class="{ active: result_title=='license_detail'}" v-show="type==-1">
                     <a :href="getUrl('license_detail')">
                              <i class="fa fa-certificate"></i> <span>许可证检测</span></a></li>
-->
                <!--clone for license-->
<!--
                <li v-show="type!=-1">
                    <a class="inactive" id='license-title'><i class="fa fa-certificate"></i>&nbsp;&nbsp;许可证检测</a>
                    <ul style="display: none" id="license">
                        <li v-bind:class="{ active: result_title=='license_detail'}">
                            <a :href="getUrl('license_detail')">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-certificate"></i>&nbsp;&nbsp;开源组件许可证分析</span></a></li>
                        <li  v-bind:class="{ active: result_title=='license_location'}" class="last">
                            <a :href="getUrl('license_location')">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-bookmark"></i>&nbsp;&nbsp;开源项目许可证分析</span></a></li>
                    </ul>
                </li>
-->

                <!--not token for security-->
                <!--<li v-bind:class="{ active: result_title=='vulnerability'}" v-show="token==1">
                    <a :href="getUrl('vulnerability')">
                        <i class="fa fa-bomb"></i> <span>安全漏洞检测</span>
                    </a>
                </li>-->
                <li>
                    <a class="inactive" id="vul-title" ><i class="fa fa-bomb"></i>&nbsp;&nbsp;安全风险检测</a>
                    <ul style="display: none" id="vul">
                        <li  v-bind:class="{ active: result_title=='vulnerability'}" >
                            <a :href="getUrl('vulnerability')">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-bomb"></i>&nbsp;&nbsp;安全漏洞检测</span>
                            </a>
                        </li>
                        <li v-bind:class="{ active: result_title=='trojan_risk'}">
                            <a :href="getUrl('trojan_risk')">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span ><i class="fa fa-exclamation-circle"></i>&nbsp;&nbsp;恶意代码检测</span>
                            </a>
                        </li>
                        <li v-bind:class="{ active: result_title=='protocol_encryption'}">
                            <a :href="getUrl('protocol_encryption')">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-file-text-o"></i>&nbsp;&nbsp;加密算法检测</span>
                            </a>
                        </li>
                        <li v-bind:class="{ active: result_title=='sensitive_risk'}">
                            <a :href="getUrl('sensitive_risk')">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span ><i class="fa fa-thumbs-down"></i>&nbsp;&nbsp;敏感行为检测</span>
                            </a>
                        </li>
<!--
                        <li class="last" v-bind:class="{ active: result_title=='code_error'}">
                            <a :href="getUrl('code_error')">
                                 &nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-bug"></i>&nbsp;&nbsp;代码缺陷检测</span>
                            </a>
                        </li>
-->
                    </ul>
                </li>
                <li  v-bind:class="{ active: result_title=='detail_report' }">
                    <a :href="getUrl('detail_report')"><i class="fa fa-pencil"></i> <span>定制检测报告</span></a>
                </li>

              <!--<li  v-bind:class="{ active: result_title=='fortify' }">
                <a :href="getUrl('fortify')"><i class="fa fa-pencil"></i> <span>fortify</span></a>
              </li>-->


            </ul>
        </div>
    </aside>
</template>
<script>
    export default {
        data: function() {
            return {
                user: {},
                task_id: '',
                //跳转页面信息
                result_title: '',
                projectInfo: [],
                token: 1, //default 0 as sourcecode
                type: 1 //default -1 as non clone
            }
        },
        mounted: function() {
            var vm = this;
            $.ajax({
                type: 'get',
                dataType: "json",
                url: '/api/user/me',
                data: null,
                success: function(data) {
                    if (data.status === 1) {
                        vm.id = data.data.id;
                        vm.user = data.data;
                    } else {
                        vm.$router.push({
                            path: '/login'
                        })
                    }
                },
                error: function(data) {
                    console.log(data);
                }
            });

            //    控制左侧导航点击样式
            $(document).ready(function() {
                $('.inactive').click(function() {
                    if ($(this).siblings('ul').css('display') == 'none') {
                        $(this).parent('li').siblings('li').removeClass('inactives');
                        $(this).addClass('inactives');
                        $(this).siblings('ul').slideDown(100).children('li');
                        if ($(this).parents('li').siblings('li').children('ul').css('display') == 'block') {
                            $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                            $(this).parents('li').siblings('li').children('ul').slideUp(100);

                        }
                    } else {
                        //控制自身变成+号
                        $(this).removeClass('inactives');
                        //控制自身菜单下子菜单隐藏
                        $(this).siblings('ul').slideUp(100);
                        //控制自身子菜单变成+号
                        $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
                        //控制自身菜单下子菜单隐藏
                        $(this).siblings('ul').children('li').children('ul').slideUp(100);

                        //控制同级菜单只保持一个是展开的（-号显示）
                        $(this).siblings('ul').children('li').children('a').removeClass('inactives');
                    }
                })
            });
            this.task_id = this.$route.params.id;
            vm.getTitle();
            vm.getSideBar();
            //getTaskData(vm,vm.task_id + '/info', vm.projectInfo);

        },
        methods: {
            logout: function() {
                $.ajax({
                    type: 'get',
                    url: '/api/user/logout',
                    success: function(data) {
                        window.location.href = "login.html#!/";
                    }
                });
            },
            getUrl(title) {
                var vm = this;
                return '#/task/' + vm.task_id + "/" + title + "?user_id=" + this.user.id;
            },

            getTitle: function() {
                var vm = this;
                var url = window.location.href;
                if (url.indexOf("?")) {
                    var args = url.split("?");
                    vm.result_title = args[0].split("/")[args[0].split("/").length - 1];
                    if (vm.result_title == "" || vm.result_title == undefined || vm.result_title == null) {
                        vm.result_title = "clone";
                    }
                }
            },
            //控制二级导航栏刷新后还保持样式
            getSideBar: function() {
                var vm = this;
                //许可证DIV
                var licensDiv = document.getElementById("license");
                //安全漏洞DIV
                var vulDiv = document.getElementById("vul");
                //                if (vm.result_title == "license_detail" || vm.result_title == "license_location") {
                //                    //将ul样式设置为block展开形式，none为隐藏
                //                    licensDiv.style.display = 'block';
                //                    console.log(licensDiv.style.display);
                //                    //将license最外层右侧变为“-”号
                //                    $('#license-title').addClass('inactives');
                //                };
                if (vm.result_title == "sensitive_risk" || vm.result_title == "trojan_risk" || vm.result_title == "vulnerability" || vm.result_title == "protocol_encryption" || vm.result_title == "code_error") {
                    //将ul样式设置为block展开形式，none为隐藏
                    vulDiv.style.display = 'block';
                    //将license最外层右侧变为“-”号
                    $('#vul-title').addClass('inactives');
                }
            },

        },
        /*watch: {
            projectInfo: function(val) {
                var vm = this;
                if (val.length != 0) {
                    var newDate = new Date();

                    //将任务创建时间转换成当地时间，格式为：2014年6月18日 上午10:33:24
                    newDate.setTime(val[0].create_time);
                    var local_create_time = newDate.toLocaleString();
                    vm.create_time = local_create_time;

                    //将任务结束时间转化为当地时间
                    newDate.setTime(val[0].finish_time);
                    var local_finish_time = newDate.toLocaleString();
                    vm.finish_time = local_finish_time;

                    vm.token = val[0].token;
                    vm.type = val[0].type;
                    console.log("vm.vm.token:" + vm.token)
                }
            }
        }*/
    }

</script>
