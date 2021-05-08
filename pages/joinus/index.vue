<template>
  <div class="joinus">
    <div class="block_width">
      <div class="block_width_padding">
        <div class="content_padding">
          <h2 >JOIN US</h2>
          <h1 style="padding-bottom:50px" >加入我们</h1>
          <div class="col_list job_list">
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 0 }" v-on:click="toggle(0)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">集团CTO</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-10-10</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-10-10</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1、根据集团发展战略，统筹规划集团技术发展方向，全面提高集团技术研发实力；<br />
                    2、把握人工智能及物联网的研发方向和发展趋势，以操盘智慧城市等大型IT类集成项目为核心，组织制定和实施重大技术决策和技术方案；<br />
                    3、负责集团整体技术架构优化，规范技术标准，对技术研发流程的规范化管理与过程监控；<br />
                    4、把控集团技术开发、项目产品风险，促进团队技术进步与创新，解决技术难题。<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1、硕士及以上学历，10年以上技术开发及管理经验，具备AI研发背景；<br />
                      2、熟悉人工智能、物联网、大数据、云计算等专业领域技术发展趋势，具备相应成功落地项目经验；<br />
                      3、具备较强的平台化、强整合思维，对大型IT集成类项目的城市级应用领域有前瞻性的理解，有一定的全球化视野；<br />
                      4、具有优秀的团队管理经验及良好的内外部沟通能力，具备高层管理经验；<br />
                      5、极强的内驱力与责任心，出色的职业素养，乐于挑战。<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 1 }" v-on:click="toggle(1)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">生产总监</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-10-10</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-10-10</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.<font face="等线">全面负责</font
                      ><font face="等线">智能硬件产品的</font
                      ><font face="等线"
                        >生产、技术、设备、现场管理、安全生产管理工作，确保生产的正常运行；</font
                      >
                    </p>

                    <p>
                      2.<font face="等线"
                        >配合公司高层制定公司生产目标，编制年度生产计划，进行生产调度、管理和控制；</font
                      >
                    </p>

                    <p>
                      3.<font face="等线"
                        >协调生产过程中的各个环节及资源，及时发现并采取措施解决生产过程中出现的问题；</font
                      >
                    </p>

                    <p>
                      4.<font face="等线"
                        >组织监督生产及技术研发人员改善生产工艺、技术升级，不断提高和改进产品质量；</font
                      >
                    </p>

                    <p>
                      5.<font face="等线"
                        >建立、规范和完善生产体系各部门的运作流程，建立生产体系各部门良好的沟通机制；</font
                      >
                    </p>

                    <p>
                      6.<font face="等线"
                        >组织、完善生产运营体系、成本控制体系、考核体系以及各项制度</font
                      ><font face="等线">流</font><font face="等线">程；</font>
                    </p>

                    <p>
                      7.<font face="等线"
                        >日常管理工作及员工管理、指导、培训及评估，有效激励员工提高工作绩效；</font
                      >
                    </p>

                    <p>
                      8.<font face="等线"
                        >加强安全生产的控制、实施、严格执行安全法规、生产操作规程，确保安全生产。</font
                      >
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.<font face="等线"
                          >大学本科以上学历，机械制造、机电一体化相关专业；</font
                        >
                      </p>

                      <p>
                        2.8<font face="等线"
                          >年以上机加工和注塑件生产制造型企业高层管理经验，有</font
                        ><font face="等线">服务机器人</font
                        ><font face="等线">行业生产管理经验者优先；</font>
                      </p>

                      <p>
                        3.<font face="等线"
                          >精通机械加工工艺，注塑件、挤出件加工工艺；</font
                        >
                      </p>

                      <p>
                        4.<font face="等线"
                          >熟悉制造型企业的生产运作和管理，拥有丰富的生产管理、成本控制、统筹运作等经验；</font
                        >
                      </p>

                      <p>
                        5.<font face="等线"
                          >具备全面的精益生产理念和丰富的精益生产实践经验；</font
                        >
                      </p>

                      <p>
                        6.<font face="等线"
                          >具备良好的计划能力、指导能力、协调能力、决策能力，较强的综合协调能力和组织管理能力。</font
                        >
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 2 }" v-on:click="toggle(2)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">UX/UI设计师</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-10-10</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-10-10</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      UX/UI<font face="Arial Unicode MS"
                        >设计师将配合机器人工业设计团队及软件开发团队从事与机器人交互及图形界面、手机</font
                      >APP<font face="Arial Unicode MS"
                        >软件交互及图形界面设计相关的项目。工作内容将包括数字产品设计的所有方面，从</font
                      >UX<font face="Arial Unicode MS"
                        >规划和应用程序线框图到各类移动和桌面终端的可视化设计。我们的团队分部在</font
                      ><font face="Arial Unicode MS">中</font
                      ><font face="Arial Unicode MS">国、</font
                      ><font face="Arial Unicode MS">美</font
                      ><font face="Arial Unicode MS"
                        >国和中东，该职位需要与在这些地点的同事开展合作，因此需要申请人能够使用英语进行有效交流。</font
                      >
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        <u><font face="Arial Unicode MS">岗位要求</font></u>
                      </p>

                      <p>
                        1-3<font
                          face="Arial Unicode MS"
                          >年相关行业工作经验，从概念到上市的数字产品设计经验</font
                        >
                      </p>

                      <p>
                        <font
                          face="Arial Unicode MS"
                          >对数字产品设计充满热情</font
                        >
                      </p>

                      <p>
                        <font
                          face="Arial Unicode MS"
                          >具备</font
                        >UX<font face="Arial Unicode MS">学科</font
                        ><font face="Arial Unicode MS"
                          >系统性的专业知识，包括</font
                        >Information&nbsp;Architecture<font
                          face="Arial Unicode MS"
                          >，交互设计，系统设计</font
                        ><font face="Arial Unicode MS">和</font>UI<font
                          face="Arial Unicode MS"
                          >设计等</font
                        ><font face="Arial Unicode MS">。</font>
                      </p>

                      <p>
                        <font
                          face="Arial Unicode MS"
                          >熟练使用相关设计软件（</font
                        >&nbsp;Sketch, Adobe&nbsp;Illustrator, Photoshop,
                        Indesign, After Effects<font face="Arial Unicode MS"
                          >等</font
                        ><font face="Arial Unicode MS">）</font>
                      </p>

                      <p>
                        <font
                          face="Arial Unicode MS"
                          >熟练使用数字产品原型制作工具（尤其是</font
                        >Figma<font face="Arial Unicode MS">）或</font
                        ><font face="Arial Unicode MS"
                          >者能够快速学习此类工具</font
                        >
                      </p>

                      <p>
                        <font
                          face="Arial Unicode MS"
                          >对细节有超乎常人的关注</font
                        ><font face="Arial Unicode MS">，</font
                        ><font face="Arial Unicode MS"
                          >具有较强的创造力和沟通能力</font
                        >
                      </p>

                      <p>
                        <font
                          face="Arial Unicode MS"
                          >语言要求：必须能熟练的使用英语进行工作沟通</font
                        >
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <u><font face="Arial Unicode MS">学历要求</font></u>
                      </p>

                      <p>
                        <font face="Arial Unicode MS"
                          >工业设计或交互设计本科学历者优先，</font
                        >&nbsp;<font face="Arial Unicode MS"
                          >其它相关专业本科学历也将被考虑。</font
                        >
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <u><font face="Arial Unicode MS">申请要求</font></u>
                      </p>

                      <p>
                        <font face="Arial Unicode MS">需提供</font>PDF<font
                          face="Arial Unicode MS"
                          >版本的简历及能够体现</font
                        >UX/UI<font face="Arial Unicode MS"
                          >设计能力的作品集。</font
                        >
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 3 }" v-on:click="toggle(3)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">区域销售经理/总监</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆 / 上海 / 广州 / 深圳</span>
                </div>
                <div class="col col_date">发布时间 2020-10-10</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-10-10</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1. <font face="等线">负责</font
                      ><font face="等线">服务机器人及智慧城市</font
                      ><font face="等线">解决</font><font face="等线">方案</font
                      ><font face="等线">在</font><font face="等线">相应</font
                      ><font face="等线">区域</font>/<font face="等线"
                        >行业的市场渠道开拓与销售工作，执行并完成公司产品年度销售计划。</font
                      >
                    </p>

                    <p>
                      2.
                      <font face="等线">挖掘客户需求及痛点，进行差异化营销</font
                      ><font face="等线">，</font
                      ><font face="等线"
                        >积极完成销售指标，扩大产品市场占有率。</font
                      >
                    </p>

                    <p>
                      3.
                      <font face="等线"
                        >开发与维系客户关系，与客户保持良好沟通，实时把握客户需求。</font
                      >
                    </p>

                    <p>
                      4. <font face="等线">负责所在区域</font>/<font face="等线"
                        >行业的合作伙伴生态建立，</font
                      ><font face="等线">结合合</font
                      ><font face="等线">作伙伴</font
                      ><font face="等线">实际情况和</font
                      ><font face="等线">能力范围，</font
                      ><font face="等线">打造相应细分行业的</font
                      ><font face="等线">解决方案，建设并运营合作生态。</font>
                    </p>

                    <p>
                      5.&nbsp;<font face="等线"
                        >定期汇总客户意见、市场信息、竞争对手、行业信息，整理和分析并定期提交相关报告</font
                      ><font face="等线">；</font>
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1<font face="等线">、</font><font face="等线">本科</font
                        ><font face="等线"
                          >以上学历，工科类如电子、计算机、自动化等专业</font
                        ><font face="等线">毕业</font
                        ><font face="等线">；</font>
                      </p>

                      <p>
                        2<font face="等线">、</font
                        ><font face="Helvetica Neue">5</font
                        ><font face="等线">年以上</font
                        ><font face="等线">相关工作</font
                        ><font face="等线"
                          >经验，具有相关行业区域复杂系统销售经验；</font
                        >
                      </p>

                      <p>
                        3<font face="等线">、了解</font
                        ><font face="等线">人工智能</font
                        ><font face="等线">行业</font
                        ><font face="等线">发展</font
                        ><font face="等线"
                          >及国家政策，熟悉人工智能解决方案</font
                        ><font face="等线">的应用与落地；</font>
                      </p>

                      <p>
                        4<font face="等线"
                          >、有丰富的科技产品大客户销售经验，</font
                        ><font face="等线">熟悉项目的立项</font
                        ><font face="等线">，</font
                        ><font face="等线">政府、企业招投标</font
                        ><font face="等线">流程</font
                        ><font face="等线">及订单合同流程</font
                        ><font face="等线">，有渠道拓展与管理经验；</font>
                      </p>

                      <p>
                        5<font face="等线">、有一定政府、金融、</font
                        ><font face="等线">展览展示</font
                        ><font face="等线">、酒店、新零售</font
                        ><font face="等线">、公共服务</font
                        ><font face="等线">等行业客户或渠道资源者优先</font
                        ><font face="等线">；</font>
                      </p>

                      <p>
                        6<font face="等线">、</font><font face="等线">具备</font
                        ><font face="等线">较</font
                        ><font face="等线"
                          >好的语言及文字表达能力、沟通能力、谈判能力，逻辑思维清晰</font
                        ><font face="等线">，有团队合作精神</font
                        ><font face="等线">；</font>
                      </p>

                      <p>
                        7<font face="等线">、</font
                        ><font face="等线"
                          >学习能力强、逻辑性强，喜欢简单、激情、全力以赴、客户第一的价值观</font
                        ><font face="等线">。</font>
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 4 }" v-on:click="toggle(4)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">销售助理</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆 / 上海 / 广州 / 深圳</span>
                </div>
                <div class="col col_date">发布时间 2020-10-10</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-10-10</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1. <font face="等线">负责部门各项</font
                      ><font face="等线">销售</font
                      ><font face="等线"
                        >指标的统计、分析工作，建立销售台帐，提供部门及营销员销售任务完成情况统计，按时编制报表及领导要求的其他报表，</font
                      >
                    </p>

                    <p>
                      2. <font face="等线">各区域</font
                      ><font face="等线">或行业</font
                      ><font face="等线">销售日常事务统计汇总，监督执行</font
                      ><font face="等线">相关</font><font face="等线">工作</font
                      ><font face="等线">落实（</font
                      ><font face="等线"
                        >日、周、月报，出差等），日常问题处理，以及其他行政事宜跟进。</font
                      >
                    </p>

                    <p>
                      3.
                      <font face="等线"
                        >负责销售与内部团队之间的业务往来沟通，做好业务衔接和跟进。</font
                      >
                    </p>

                    <p>
                      4.
                      <font face="等线"
                        >营销费用管理及流程审批，制度化建设。</font
                      >
                    </p>

                    <p>
                      5.
                      <font face="等线"
                        >销售合同管理和跟踪，规范制度及相关流程制度，异常合同处理经验丰富。</font
                      >
                    </p>

                    <p>
                      6.
                      <font face="等线"
                        >统计销售商机与进展，落地客户服务与营销支持</font
                      ><font face="等线">。</font>
                    </p>

                    <p>
                      7.
                      <font face="等线"
                        >销售合同标书制作及其他部门内部事宜。</font
                      >
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.
                        <font face="等线"
                          >外贸英语、国际贸易等相关专业本科以上学历；</font
                        >
                      </p>

                      <p>
                        2.
                        <font face="等线"
                          >英语六级，听说读写优秀，可作为工作语言；</font
                        >
                      </p>

                      <p>
                        3. <font face="等线">熟练操作办公软件，如：</font
                        ><font face="Helvetica Neue">Word</font
                        ><font face="等线">、</font
                        ><font face="Helvetica Neue">Excel</font
                        ><font face="等线">、</font
                        ><font face="Helvetica Neue">Power Point</font>
                      </p>

                      <p>
                        4. <font face="等线">具有</font
                        ><font face="Helvetica Neue">2</font
                        ><font face="等线">年以销售运营管理工作经验</font
                        ><font face="等线">，有人工智能从业经验者优先；</font>
                      </p>

                      <p>
                        5.
                        <font face="等线"
                          >丰富团队销售管理经验，具有一定的抗压力；</font
                        >
                      </p>

                      <p>
                        6.
                        <font face="等线"
                          >良好的沟通能力和表达能力，认真独立进取的工作态度和责任感。</font
                        >
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.joinus{
   overflow: hidden;
}
.block_width {
  
    margin:0 auto;
    max-width: 1066px;
}
.block_width_padding {
    margin: 0 42px;
}
.content_padding {
    padding-top: 130px;
    padding-bottom: 135px;
}
.section_sub_page_top h3.content_block_title, .section_sub_page h4.section_title {
    text-align: left;
    font-size: 42px;
    margin-top: 42px;
}

.col_list {
    border-top: 1px solid #c9c9c9;
}
.col_list .row {
    border-bottom: 1px solid #c9c9c9;
    position: relative;
}
.col_list .row_openable {
    cursor: pointer;
}
.col_list .col_bg {
    background-color: #19459a;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -1px;
    bottom: -1px;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    visibility: hidden;
}
.col_list .col_wrap {
    position: relative;
}
.col_list .col_name {
    width: 33%;
    font-weight: 500;
}
.col_list .col_area {
    width: 34%;
}
.col_list .col {
    display: inline-block;
    padding: 1.8em 0;
    vertical-align: top;
    position: relative;
}
.col_list .col .text {
    display: inline-block;
    padding-right: 1em;
}
.icon_plus {
    position: absolute;
    right: 14px;
    top: 50%;
    width: 21px;
    height: 21px;
    margin-top: -10px;
    -webkit-transition: transform .3s ease-out;
    transition: transform .3s ease-out;
}
.row_open{
  color: #fff;
}

.icon_plus:before, .icon_plus:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    top: 10px;
    background: #f3cd1d;
    position: absolute;
}
.icon_plus:after {
    width: 1px;
    height: 100%;
    top: 0;
    left: 10px;
}
.row_open .icon_plus {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
}
.row_open .col_bg, .row_hoverable.active .col_bg, .web .row_hoverable:hover .col_bg {
    opacity: 1;
    visibility: visible;
}
.row_detail {
    display: none;
    border-top: 1px solid #fff;
    padding: 2em 0 4.7em;
    position: relative;
}
.row_open .row_detail {
    display: block;
}
.row_detail .col_date {
    display: none;
}
.row_detail .col_left {
    width: 66%;
}
.section_sub_page.section_auto_height .content_text, .section_sub_page .feature {
    opacity: 1;
    visibility: visible;
    -webkit-transform: none;
    transform: none;
    pointer-events: all;
}
.row_detail .col_left .content_text {
    margin-right: 3.5em;
}
.content_text {
    line-height: 1.625;
}
.section_sub_page .item_title {
    font-size: 1.5em;
    padding-bottom: .6em;
}
</style>
<script>
export default {
   data() {
    return {
      index:null
    };
  },
  methods: {
    toggle: function (index) {
      // `this` 在方法里指向当前 Vue 实例
    
      // `event` 是原生 DOM 事件
      if (this.index==index) {
        this.index = null
      }else{
        this.index=index
      }
    }
  }
}
</script>