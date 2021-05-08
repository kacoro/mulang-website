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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 5 }" v-on:click="toggle(5)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">交付经理/总监</span>
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
                      1.
                      <font face="等线"
                        >建立和健全项目交付管理体系、标准和流程，推进交付管理的规范化水平；</font
                      >
                    </p>

                    <p>
                      2.
                      <font face="等线"
                        >负责工程方案设计和制定项目交付计划，协调相关资源支撑</font
                      ><font face="等线">；</font
                      ><font face="等线"
                        >优化实施交付方法，强化项目管理，合理安排资源与进度，提升项目管理水平，加强管理和规范；</font
                      >
                    </p>

                    <p>
                      3.
                      <font face="等线"
                        >现场勘察，整体方案定制化，软硬件安装调试、对接联调</font
                      ><font face="等线">，</font
                      ><font face="等线"
                        >组织技术攻关与钻研，解决项目交付过程中出现的技术问题；</font
                      >
                    </p>

                    <p>
                      4.
                      <font face="等线"
                        >项目文件及成果的梳理，并按照公司要求进行管理</font
                      ><font face="等线">；</font>
                    </p>

                    <p>
                      5. <font face="等线">负责项</font
                      ><font face="等线"
                        >目实施团队的管理，做好跟客户之间的沟通，做好需求把控</font
                      ><font face="等线">；</font>
                    </p>

                    <p>
                      6.
                      <font face="等线"
                        >产品验收、检验，保证产品可交付性，组织方案评审；</font
                      >
                    </p>

                    <p>
                      7. <font face="等线">参与产品、方案设计及质量监控</font
                      ><font face="等线">，</font
                      ><font face="等线"
                        >参与招投标，对招投标流程进行技术支持</font
                      ><font face="等线">。</font>
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1. <font face="等线">计算机、</font
                        ><font face="Helvetica Neue">AI</font
                        ><font face="等线"
                          >、机器人、自动化相关专业本科以上学历；</font
                        >
                      </p>

                      <p>
                        2. 5<font face="等线"
                          >年以上电子、信息产品领域交付经验</font
                        ><font face="等线">，</font
                        ><font face="等线">熟悉电子产品</font
                        ><font face="等线">，</font>2<font face="等线"
                          >个以上大、中型</font
                        ><font face="等线">系统集成</font
                        ><font face="等线">项目交付</font
                        ><font face="等线">项目</font
                        ><font face="等线">管理的完整经历；</font>
                      </p>

                      <p>
                        3.
                        <font face="等线"
                          >具备处理复杂问题的能力，优秀的资源协调整合能力</font
                        ><font face="等线">，有机</font
                        ><font face="等线">器人</font
                        ><font face="等线">或人工智能产</font
                        ><font face="等线">品从业经验者优先；</font>
                      </p>

                      <p>
                        4. <font face="等线">优秀的中英文听说读写能力，</font
                        ><font face="等线">英文可以作为工作、谈判语言，</font
                        ><font face="等线">有海外项目交付经验者优先；</font>
                      </p>

                      <p>
                        5.
                        <font face="等线"
                          >优秀的沟通能力，能够准确理解技术人员、销售人员或客户的思维和表述；</font
                        >
                      </p>

                      <p>
                        6.
                        <font face="等线"
                          >客户导向意识明确、抗压能力强，具备良好的职业素养和优秀的学习能力；</font
                        >
                      </p>

                      <p>
                        7.
                        <font face="等线"
                          >具备处理复杂问题的能力，优秀的资源协调整合能力；</font
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 6 }" v-on:click="toggle(6)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">售前解决方案工程师</span>
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
                      1<font face="等线"
                        >、
                        负责项目的前期咨询与整体规划，参与拟定销售策略，配合销售人员有效推动商务，促成项目签约；</font
                      >
                    </p>

                    <p>
                      2<font face="等线"
                        >、
                        挖掘客户需求痛点，快速设计并构建典型行业及关键客户的机器人产品解决方案；</font
                      >
                    </p>

                    <p>
                      3<font face="等线">、 分析场景业务需求，结合公司</font
                      ><font face="Helvetica Neue">AIoT</font
                      ><font face="等线"
                        >技术及产品，编制公司级销售工具，包括产品、解决方案和行业案例等；</font
                      >
                    </p>

                    <p>
                      4<font face="等线"
                        >、
                        配合销售完成产品市场推广，能够进行价值讲解和概念提炼，引导客户对技术和产品的选择；</font
                      >
                    </p>

                    <p>
                      5<font face="等线"
                        >、 维护客户关系，持续跟进客户需求；</font
                      >
                    </p>

                    <p>
                      6<font face="等线"
                        >、
                        负责产品演示和技术答疑，能独立完整机器人调试、部署等工作；</font
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
                        1<font face="等线"
                          >、
                          五年以上解决方案支持工作经验，工科类专业本科及以上学历；</font
                        >
                      </p>

                      <p>
                        2<font face="等线">、 熟悉</font
                        ><font face="等线">智慧城市</font>/<font face="等线"
                          >金</font
                        ><font face="等线">融</font>/<font face="等线"
                          >商业</font
                        ><font face="Helvetica Neue">/</font
                        ><font face="等线"
                          >文旅等行业客户需求，有安防、弱电智能化等相关产品支持经验者优先；</font
                        >
                      </p>

                      <p>
                        3<font face="等线">、 至少</font
                        ><font face="Helvetica Neue">1</font
                        ><font face="等线">年以上硬件产品实施经验，</font
                        ><font face="Helvetica Neue">3</font
                        ><font face="等线">个以上项目完整实施经验；</font>
                      </p>

                      <p>
                        4<font face="等线"
                          >、
                          具备极佳的沟通和表达能力，良好的人际交往能力；</font
                        >
                      </p>

                      <p>
                        5<font face="等线"
                          >、 具有同理心，能站在客户角度思考和解决问题</font
                        >
                      </p>

                      <p>
                        6<font face="等线">、 了解</font
                        ><font face="Helvetica Neue">AI</font
                        ><font face="等线"
                          >技术，对机器人有浓厚兴趣，具备较强的学习能力；</font
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 7 }" v-on:click="toggle(7)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">交付工程师</span>
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
                      1<font face="等线"
                        >、学习和掌握交付产品的功能、性能、部署、使用、维护、故障处理等相关知识和技能；</font
                      >
                    </p>

                    <p>
                      2<font face="等线">、完成产品的交付和用户培训。</font>
                    </p>

                    <p>
                      3<font face="等线"
                        >、完成产品的维护、升级、迁移、故障处理等售后服务；</font
                      >
                    </p>

                    <p>
                      4<font face="等线"
                        >、为客户提供完整准确的方案及信息，解决客户问题，提供现场指导和技术支持。</font
                      >
                    </p>

                    <p>
                      5<font face="等线"
                        >、跟踪用户使用中出现的产品技术问题，收集故障种类，并进行记录与报告；</font
                      >
                    </p>

                    <p>
                      6<font face="等线"
                        >、反馈用户产品评价信息和需求，并形成汇报和总结。</font
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
                        1<font face="等线">、本科及以上学历，计算机</font
                        ><font face="等线">、电子、自动化</font
                        ><font face="等线">及相关专业；</font>
                      </p>

                      <p>
                        2<font face="等线">、精通</font
                        ><font face="等线">安卓编程</font
                        ><font face="等线">，熟悉软硬件常识，熟悉</font
                        ><font face="等线">机器人及人工智能系统安</font
                        ><font face="等线">装部署，接受出差；</font>
                      </p>

                      <p>
                        3<font face="等线"
                          >、具有较强的学习能力和问题分析、解决能力，能快速熟练掌握公司各类</font
                        ><font face="等线">机器人</font
                        ><font face="等线">产品的各种功能；</font>
                      </p>

                      <p>
                        4<font face="等线"
                          >、具有较强的理解及沟通能力，能耐心的倾听客户的问题，快速理解用户问题，善于与客户沟通；</font
                        >
                      </p>

                      <p>
                        5<font face="等线"
                          >、勤奋踏实，工作严谨细致，有较强服务意识，应变能力强，有责任心，对人热情，具有良好的团队合作</font
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 8 }" v-on:click="toggle(8)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人团队首席科学家CTO</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1、技术规划：持续完善产品功能和设计，推动产品演进、优化与迭代升级，确保机器人产品场景应用、功能和类别定位，成为集团重点项目支撑，满足客户需求,指导并参与核心代码研发，组织解决重难点技术攻关，形成同行业技术壁垒；
                    </p>

                    <p>
                      2、目标管理：作为研发部门整体目标制定的技术带头人，指导研发人员在整体架构下开展产品规划、研发、生产等工作，把控产品开发项目中软件、算法、硬件、结构技术的紧密联动，确保产品研发到批量生产过程的有效衔接，实现产品目标，保障技术工作顺利落地执行；
                    </p>

                    <p>
                      3、流程建设：主导制定并持续优化研发工作流程和规范，团队内部及集团相关部门间的配合协作，保证高效率、高质量的输出市场所需优质产品；
                    </p>

                    <p>
                      4、团队组建：负责整体产品技术团队的组织架构、人员招聘和优化培养，有效地监控项目进展，提升团队的工作体验、质量、效率和技术能力，组织技术培训和分享。
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1、211、985统招硕士以上学历，机器人、人工智能、计算机、电子工程、自动化等相关专业，海归博士优先，英语听说读写流利，能以英文作为工作语音；
                      </p>

                      <p>
                        2、五年以上机器人或自动驾驶技术相关研发经验，参与并带领团队进行自动驾驶功能开发，提升团队的专业能力和核心竞争力；
                      </p>

                      <p>
                        3、精通无人自动驾驶核心模块算法（感知、融合、定位、决策、规划、控制），熟练掌握其中至少一个技术领域；
                      </p>

                      <p>
                        4、精通服务机器人产品软硬件研发技术，包括结构设计、硬件电路设计、SLAM算法、嵌入式开发、APP及云平台开发、系统集成等相关技术；熟练使用ROS操作系统，有基于ROS系统搭建过机器人架构的经验；<br />
                        5、具备优秀的团队管理能力和前沿技术视野，有过带领60人以上研发团队的管理经验，有良好的组织协调和沟通能力；<br />
                        6、具有较强的大局意识与商业头脑，能跟进行业特点因地制宜确定公司产品、技术发展规划，具备良好的职业素养，在高科技领域有广泛的人脉关系，热衷技术创新与学术开拓，具备较强的沟通和资源整合能力，在高科技领域有技术资源优先。
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 9 }" v-on:click="toggle(9)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人运动底盘架构师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1、负责底盘算法团队的建设<br />
                    2、负责室内外底盘技术路线制定、参与机器人底盘的产品规划。<br />
                    3、负责带领算法团队完成室内外底盘的软件研发。<br />
                    4、负责整合已有软件资源，降低研发成本、缩短研发周期。<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1、硕士及以上学历，数学，计算机，自动化，机器人等相关专业有良好的数学功底，8年以上工作经验。<br />
                      2、有团队管理经验；<br />
                      3、具有基于ROS（机器人操作系统）的机器人开发经验；<br />
                      4、了解主流掌握SLAM理论和算法；<br />
                      5、熟悉机器人自主避障、路径规划、及运动规划的相关算法；<br />
                      6、熟悉基于视觉、激光、超声波等多传感器融合的室内导航算法；<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 10 }" v-on:click="toggle(10)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人安防园区软件平台架构师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1.&nbsp;&nbsp;
                    &nbsp;负责服务机器人项目与安防、园区项目整合，云、边、端业务软件系统架构设计<br />
                    2.&nbsp;&nbsp;
                    &nbsp;参与需求分析、评审，撰写技术架构文档、软件详细设计文档和技术交付相关文档。<br />
                    3.&nbsp;&nbsp;
                    &nbsp;收集市场需求和行业发展情况，结合公司技术及产品规划，制定产品策略和研发方向。<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1.Java基础扎实，具备7年以上的代码编写经验，4年以上架构设计经验，做过大型安防、园区项目优先考虑；有国内大型安防、园区软件平台开发经验优先。<br />
                      2.熟悉网络编程知识和多线程编程、缓存技术，服务器优化，集群技术处理、网站负载均衡、系统性能调优等软件编程高级技术。<br />
                      3.对数据库的基本理论和内部实现机制有深刻的理解，对关系型数据库/k-v存储/宽表存储选型有丰富经验，有实际大数据量的数据库设计经验。熟悉常见开源中间件。<br />
                      4.对微服务架构、RestfulAPI设计有深入的理解，有SpringBoot、SpringCloud、Docker相关开发经验。<br />
                      5.熟悉Linux操作系统和Shell脚本语言<br />
                      6.良好的逻辑思维能力，熟悉业务抽象和数据模型设计，具有很强的分析问题和解决问题的能力，对解决具有挑战性问题充满激情。<br />
                      7.具有安防、园区软件平台从业背景者优先。<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 11 }" v-on:click="toggle(11)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">软件研发经理</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1、深刻理解产品/项目需求，参与集团服务机器人产品的软件设计和核心编码开发；<br />
                    2、整理服务机器人基础服务组件和业务服务组件，进行优化改造、核心代码编写、沉淀技术积累；<br />
                    3、负责技术攻关和创新技术引用，解决产品开发过程中的高性能、高并发和高可靠性问题；<br />
                    4、进行服务机器人技术构架、研发、设计，完成技术平台及产品开发，以及日常维护、升级管理、运维管理，监督指导团队的整体工作情况；<br />
                    5、负责项目管理、开发质量管理、开发进度控制等；<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1、本科以上学历，计算机、软件工程相关专业，3年以上JAVA开发经验，带过15人以上软件开发团队；<br />
                      2、有很强的后端开发经验，精通J2EE核心技术，熟悉Spingboot、SpingCloud、MQ、Redis、Mybatis等开源框架；<br />
                      3、有较强的前端开发经验，掌握主流前端框架（如VUE、React等）和主流前端技术；<br />
                      4、熟练掌握Tomcat、Apache等应用中间件，具有较强的性能优化能力；<br />
                      5、精通MySQL、MongoDB等数据库，具有良好的数据库设计能力、SQL编写能力、性能调优能力；<br />
                      6、精通各环境搭建，jenkins部署调试、nginx配置，环境调试，底层配置，可独立完成生产环境发布；<br />
                      7、熟悉相关网络安全产品，如防火墙、IPS、网管、日志分析等；<br />
                      8、熟悉安全服务业务（漏洞扫描、渗透测试、风险评估、安全评估、安全培训、代码审计、应急响应、网络安保等其中之一）；<br />
                      9、熟悉Android APP开发优先；<br />
                      10、具有良好的沟通能力，思维活跃，有较强的创造力。<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 12 }" v-on:click="toggle(12)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text"
                    >技术文档工程师-Technical Illustrator方向</span
                  >
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                    <span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >机器人产品技术资料中的插画设计和平面呈现创意设计。<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >2.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >产品解决方案（<span lang="EN-US">PPT</span
                        >）插画设计，动态图形设计。<span lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >3.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >为快速有效传播信息，能根据项目具体需求进行原创插画和动态图形设计。<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >4.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >具备成熟的平面排版以及视觉能力，擅长绘画或三维等表现手法完成技术图解。<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >5.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >能够聚焦发现产品资料体验提升的机会点，通过创意思维，使用最佳的信息呈现方式如视频、<span
                          lang="EN-US"
                          >3D</span
                        >、<span lang="EN-US">VR</span
                        >等，传递用户喜闻乐见的有关机器人使用，配置，维修，维护等信息。<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >6.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >与研发，产品经理，售前支持等部门协同，将系统、流程、组件或想法的口头或书面描述转换为原始设计、图解等可视化形式，清楚直观地传达技术信息。<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >1.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >工业设计、数字媒体设计、视觉设计、人因工程、交互设计、计算机、用户研究等专业本科及以上学历，三年以上工作经验（优秀者可放宽）；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >2.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >有使用<span lang="EN-US">Illustrator</span>、<span
                            lang="EN-US"
                            >InDesign</span
                          >、<span lang="EN-US">SolidWorks</span>、<span
                            lang="EN-US"
                            >Adobe Suite</span
                          >、<span lang="EN-US">Creative Cloud</span>、<span
                            lang="EN-US"
                            >AutoCAD</span
                          >或类似设计和插图应用程序的经验；<span lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >3.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >掌握以下一项或多项能力：交互设计、平面<span
                            lang="EN-US"
                            >/3D</span
                          >视觉设计、<span lang="EN-US">HCI</span
                          >设计、动效设计、<span lang="EN-US">3D</span
                          >建模渲染、<span lang="EN-US"
                            >Web/Android/iOS/C++/JAVA/JavaScript
                            /HTML/Flash/CSS</span
                          >等前端界面编程者优先；<span lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >4.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >对机器人有浓厚兴趣，有机器人从业经验者优先（有世界<span
                            lang="EN-US"
                            >500</span
                          >强<span lang="EN-US">ABB/ SIEMENS/Honeywell</span
                          >等企业相关工作经验者优先）；<span lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >5.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >优秀的中文书写能力，具备一定英语书写能力（英语四级以上，读写流利，具有较强的中英文互译能力者优先）；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >6.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >优秀的沟通能力，能够准确理解技术人员的思维和表述；
                          <span lang="EN-US"></span
                        ></span>
                      </p>

                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >7.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >优秀的逻辑表达和流程化思维，总结归纳能力；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        align="left"
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-align: left;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >8.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >优秀的美术功底，简历需附作品集；<span lang="EN-US"
                            ></span
                        ></span>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 13 }" v-on:click="toggle(13)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人项目经理</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >1.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >负责服务机器人重大项目的实施交付管理，负责与关键用户的需求交流和确认工作；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >2.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >负责机器人方案设计确认，制定项目交付计划，协调相关资源支撑；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >3.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >根据项目整体计划，制定合适的执行计划表，管理、跟进项目软硬件需求范围、进度、质量及交付；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >4.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >负责项目实施过程管理，对执行进度，项目质量，项目交付负责；
                        <span lang="EN-US"></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >5.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >统筹调度部门内各类资源，协调跨部门资源；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >1.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >211/985</span
                        ><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >本科以上学历，计算机、<span lang="EN-US">AI</span
                          >、机器人、自动化相关专业；<span lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >2.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >5</span
                        ><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >年以上电子、信息产品领域交付经验；熟悉电子产品，具备中大型终端、类终端产品的交付实操经验；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >3.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >良好的英文读写能力，有海外项目交付经验者优先；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >4.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >优秀的沟通能力，能够准确理解技术人员、销售人员或客户的思维和表述；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >5.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >优秀的逻辑表达和流程化思维及总结归纳能力；<span
                            lang="EN-US"
                            ></span
                        ></span>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 14 }" v-on:click="toggle(14)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人解决方案经理</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >1.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >以机器人应用为核心，协调公司内部资源，完成生态解决方案规划和组织实施；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >2.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >典型场景（酒店，园区等）机器人应用，针对行业共性场景梳理，组织实施并输出行业创新解决方案；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >3.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >拓展行业内关联产品，联合生态合作伙伴，打造具备一定行业壁垒的集成化，系统性整体应用方案；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >4.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >挖掘客户需求痛点，完成项目前期规划，快速设计并构建典型行业及关键客户的机器人产品解决方案；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >5.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >分析场景业务需求，结合公司<span lang="EN-US">AIoT</span
                        >技术及产品，编制公司级销售工具，包括产品、解决方案和行业案例等；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >1.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >211/985</span
                        ><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >工科类专业本科及以上学历，<span lang="EN-US">5</span
                          >年以上人工智能、服务型机器人、物联网行业售前项目对接或方案设计工作经验者优先；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >2.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >具备丰富的智能化场景应用经验，对某一个或某几个行业（酒店，银行，园区等）有深度理解，能够主动探索和挖掘行业需求，持续推动产品方案深化；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >3.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >具备较强的解决方案提炼、输出和宣讲能力，同时具备项目管理能力，能够有效的进行团队间的业务合作；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >4.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >善于学习、有强的业务理解能力和商业敏感度，思维活跃，有创新思路，能针对企业行业特点有前瞻性布局；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >5.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >具备极佳的沟通和表达能力，良好的人际交往能力；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >6.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >了解<span lang="EN-US">AI</span
                          >技术，对机器人有浓厚兴趣，具备较强的学习能力；<span
                            lang="EN-US"
                            ></span
                        ></span>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 15 }" v-on:click="toggle(15)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人园区产品规划经理</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p
                      class="MsoListParagraphCxSpFirst"
                      style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-family: 'Abadi', sans-serif;
                          mso-fareast-font-family: Abadi;
                          mso-bidi-font-family: Abadi;
                        "
                        ><span style="mso-list: Ignore"
                          >1.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-family: 等线;
                          mso-ascii-font-family: Abadi;
                          mso-fareast-font-family: 等线;
                          mso-fareast-theme-font: minor-fareast;
                          mso-hansi-font-family: Abadi;
                        "
                        >负责基于</span
                      ><span
                        lang="EN-US"
                        style="font-family: 'Abadi', sans-serif"
                        >AI+IOT</span
                      ><span
                        style="
                          font-family: 等线;
                          mso-ascii-font-family: Abadi;
                          mso-fareast-font-family: 等线;
                          mso-fareast-theme-font: minor-fareast;
                          mso-hansi-font-family: Abadi;
                        "
                        >技术打造智慧园区，规划智慧园区中机器人、低速无人驾驶、或者其他</span
                      ><span
                        lang="EN-US"
                        style="font-family: 'Abadi', sans-serif"
                        >AI</span
                      ><span
                        style="
                          font-family: 等线;
                          mso-ascii-font-family: Abadi;
                          mso-fareast-font-family: 等线;
                          mso-fareast-theme-font: minor-fareast;
                          mso-hansi-font-family: Abadi;
                        "
                        >智能终端的创新应用场景和产品体系；</span
                      ><span
                        lang="EN-US"
                        style="font-family: 'Abadi', sans-serif"
                        ></span>
                    </p>

                    <p
                      class="MsoListParagraphCxSpMiddle"
                      style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-family: 'Abadi', sans-serif;
                          mso-fareast-font-family: Abadi;
                          mso-bidi-font-family: Abadi;
                        "
                        ><span style="mso-list: Ignore"
                          >2.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-family: 等线;
                          mso-ascii-font-family: Abadi;
                          mso-fareast-font-family: 等线;
                          mso-fareast-theme-font: minor-fareast;
                          mso-hansi-font-family: Abadi;
                        "
                        >追踪国内外行业发展趋势、动态，将先进的经验和思路导入公司产品体系；</span
                      ><span
                        lang="EN-US"
                        style="font-family: 'Abadi', sans-serif"
                        ></span>
                    </p>
                    <p
                      class="MsoListParagraphCxSpMiddle"
                      style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-family: 'Abadi', sans-serif;
                          mso-fareast-font-family: Abadi;
                          mso-bidi-font-family: Abadi;
                        "
                        ><span style="mso-list: Ignore"
                          >3.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-family: 等线;
                          mso-ascii-font-family: Abadi;
                          mso-fareast-font-family: 等线;
                          mso-fareast-theme-font: minor-fareast;
                          mso-hansi-font-family: Abadi;
                        "
                        >从行业业务价值创新角度，进行需求调研、竞品调研、方案设计、产品需求撰写，跟团队一起提出并细化新产品定义，进行原型验证，制定产品的商业模式和路标；</span
                      ><span
                        lang="EN-US"
                        style="font-family: 'Abadi', sans-serif"
                        ></span>
                    </p>

                    <p
                      class="MsoListParagraphCxSpLast"
                      style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-family: 'Abadi', sans-serif;
                          mso-fareast-font-family: Abadi;
                          mso-bidi-font-family: Abadi;
                        "
                        ><span style="mso-list: Ignore"
                          >4.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-family: 等线;
                          mso-ascii-font-family: Abadi;
                          mso-fareast-font-family: 等线;
                          mso-fareast-theme-font: minor-fareast;
                          mso-hansi-font-family: Abadi;
                        "
                        >公司或部门交办的其他任务；</span
                      ><span
                        lang="EN-US"
                        style="font-family: 'Abadi', sans-serif"
                        ></span>
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p
                        class="MsoListParagraphCxSpFirst"
                        style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-family: 'Abadi', sans-serif;
                            mso-fareast-font-family: Abadi;
                            mso-bidi-font-family: Abadi;
                          "
                          ><span style="mso-list: Ignore"
                            >1.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >计算机、通信、电子信息技术等相关专业</span
                        ><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          >211</span
                        ><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >或者</span
                        ><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          >985</span
                        ><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >全日制本科及以上学历；</span
                        ><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          ></o:p
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraphCxSpMiddle"
                        style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-family: 'Abadi', sans-serif;
                            mso-fareast-font-family: Abadi;
                            mso-bidi-font-family: Abadi;
                          "
                          ><span style="mso-list: Ignore"
                            >2.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          >5</span
                        ><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >年以上相关工作经验，有技术工作背景，熟悉云计算、大数据、人工智能、物联网等一种或多种技术，熟悉平台架构、应用软件开发、数据模型设计等；</span
                        ><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          ></o:p
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraphCxSpMiddle"
                        style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-family: 'Abadi', sans-serif;
                            mso-fareast-font-family: Abadi;
                            mso-bidi-font-family: Abadi;
                          "
                          ><span style="mso-list: Ignore"
                            >3.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >对服务机器人、低速无人驾驶技术和应用场景非常熟悉；</span
                        ><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          ></o:p
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraphCxSpMiddle"
                        style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-family: 'Abadi', sans-serif;
                            mso-fareast-font-family: Abadi;
                            mso-bidi-font-family: Abadi;
                          "
                          ><span style="mso-list: Ignore"
                            >4.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >优秀的文档编制能力、语言沟通能力；</span
                        ><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          ></o:p
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraphCxSpMiddle"
                        style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-family: 'Abadi', sans-serif;
                            mso-fareast-font-family: Abadi;
                            mso-bidi-font-family: Abadi;
                          "
                          ><span style="mso-list: Ignore"
                            >5.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >热爱学习、渴望变革，具备行业洞察力和商业思维，工作积极主动，有较好的团队意识和合作精神，能承受工作压力；</span
                        ><span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          ></o:p
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraphCxSpLast"
                        style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-family: 'Abadi', sans-serif;
                            mso-fareast-font-family: Abadi;
                            mso-bidi-font-family: Abadi;
                          "
                          ><span style="mso-list: Ignore"
                            >6.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                          "
                          >创新型人才优先，有国际化视野优先；</span
                        ><br />
                      </p>

                      <p
                        class="MsoListParagraphCxSpLast"
                        style="text-indent: -18pt; mso-list: l0 level1 lfo1"
                      >
                        <span
                          lang="EN-US"
                          style="font-family: 'Abadi', sans-serif"
                          ></span
                        >7.&nbsp;
                        <span
                          style="
                            font-size: 11pt;
                            line-height: 107%;
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                            mso-bidi-font-family: 'Times New Roman';
                            mso-bidi-theme-font: minor-bidi;
                            mso-ansi-language: EN-US;
                            mso-fareast-language: ZH-CN;
                            mso-bidi-language: AR-SA;
                          "
                          >智慧园区</span
                        ><span
                          lang="EN-US"
                          style="
                            font-size: 11pt;
                            line-height: 107%;
                            font-family: 'Abadi', sans-serif;
                            mso-fareast-font-family: 等线;
                            mso-fareast-theme-font: minor-fareast;
                            mso-bidi-font-family: 'Times New Roman';
                            mso-bidi-theme-font: minor-bidi;
                            mso-ansi-language: EN-US;
                            mso-fareast-language: ZH-CN;
                            mso-bidi-language: AR-SA;
                          "
                          >IoT</span
                        ><span
                          style="
                            font-size: 11pt;
                            line-height: 107%;
                            font-family: 等线;
                            mso-ascii-font-family: Abadi;
                            mso-fareast-theme-font: minor-fareast;
                            mso-hansi-font-family: Abadi;
                            mso-bidi-font-family: 'Times New Roman';
                            mso-bidi-theme-font: minor-bidi;
                            mso-ansi-language: EN-US;
                            mso-fareast-language: ZH-CN;
                            mso-bidi-language: AR-SA;
                          "
                          >平台产品经理或者解决方案经理，或者美团、阿里巴巴、京东等机器人团队平台或解决方案类产品经理优先；</span
                        ><br />
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 16 }" v-on:click="toggle(16)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">运营经理</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >1.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >负责机器人产品中心日常管理，建立健全管理制度，提高作效率；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >2.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >对各部门（含供应商，研发，交付，品质，销售等）的运行情况负责，跟进并统计各板块工作进展情况；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >3.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >协助制定运营工作目标，发展方向，组织框架和长远计划，调控各部门工作量，划分工作界面；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >4.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >合理分配机器人产品中心各小组间因工作需要进行的交叉协作和工作配合；<span
                          lang="EN-US"
                          ></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >5.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >对部门内各岗位工作进行定期监督及检查，严格按照各项规章制度进行<span
                          lang="EN-US"
                          >KPI</span
                        >量化考核；<span lang="EN-US"></span
                      ></span>
                    </p>

                    <p
                      class="MsoListParagraph"
                      style="
                        margin-left: 42pt;
                        text-indent: -21pt;
                        mso-char-indent-count: 0;
                        line-height: 150%;
                        mso-list: l0 level1 lfo1;
                      "
                    >
                      <!--[if !supportLists]--><span
                        lang="EN-US"
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                          mso-bidi-font-family: 宋体;
                        "
                        ><span style="mso-list: Ignore"
                          >6.<span style="font: 7pt 'Times New Roman'"
                            >&nbsp;&nbsp;
                          </span></span
                        ></span
                      ><!--[endif]--><span
                        style="
                          font-size: 12pt;
                          mso-bidi-font-size: 14pt;
                          line-height: 150%;
                          font-family: 宋体;
                        "
                        >整合各项关键运营数据，并及时向部门负责人汇报；
                        <span lang="EN-US"></span
                      ></span>
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >1.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >211/985</span
                        ><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >工科类专业本科及以上学历，<span lang="EN-US">5</span
                          >年以上人工智能、服务型机器人、物联网行业企业管理岗位经验；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >2.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >逻辑思维能力强，执行力强，有良好的团队管理能力，深厚的组织协调能力。<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >3.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >极强的抗压能力、高度的工作投入；<span lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >4.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >优秀的数据挖掘能力和较强的沟通能力，有至少一年的数据分析经验；<span
                            lang="EN-US"
                            ></span
                        ></span>
                      </p>

                      <p
                        class="MsoListParagraph"
                        style="
                          margin-left: 42pt;
                          text-indent: -21pt;
                          mso-char-indent-count: 0;
                          line-height: 150%;
                          mso-list: l0 level1 lfo1;
                        "
                      >
                        <!--[if !supportLists]--><span
                          lang="EN-US"
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                            mso-bidi-font-family: 宋体;
                          "
                          ><span style="mso-list: Ignore"
                            >5.<span style="font: 7pt 'Times New Roman'"
                              >&nbsp;&nbsp;
                            </span></span
                          ></span
                        ><!--[endif]--><span
                          style="
                            font-size: 12pt;
                            mso-bidi-font-size: 14pt;
                            line-height: 150%;
                            font-family: 宋体;
                          "
                          >了解<span lang="EN-US">AI</span
                          >技术，对机器人有浓厚兴趣，具备较强的学习能力；<span
                            lang="EN-US"
                            ></span
                        ></span>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 17 }" v-on:click="toggle(17)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">算法专家</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>负责用户画像，推荐算法和机器学习平台的搭建;</li>
                      <li>
                        应用机器学习、自然语言处理等技术，基于海量用户日志和内容，建立用户画像，构建内容质量及内容标签体系；
                      </li>
                      <li>
                        以数据挖掘和数据分析为基础，发现新的产品改进点，驱动产品改进，探索新的产品形态；
                      </li>
                      <li>
                        跟踪业界最新的机器学习算法和研究趋势，并将其应用于实际的生产环境。
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          数学/物理/计算机相关专业硕士及以上学历，博士优先；
                        </li>
                        <li>
                          对深度学习理论有深刻理解，对卷积神经网络有良好的理论和实操经验熟悉至少一个主流的深度学习工具，如Tensorflow/Caffe/Pytorch等；
                        </li>
                        <li>
                          精通数据挖掘项目的流程和思路，精通常用机器学习算法，包括但不限于聚类、分类、LR、RF、SVM、GBDT等；
                        </li>
                        <li>
                          熟悉自然语言处理、机器学习、模式识别等常用算法，并进行过相关的实践；
                        </li>
                        <li>
                          较强的技术攻关能力，能够跟进领域内最新技术研究成果，并结合应用场景快速实验和调优；
                        </li>
                        <li>
                          有5年以上推荐、ranking、NLP、文本挖掘等方向的实际工程和项目经验；
                        </li>
                        <li>具备良好的团队合作精神和沟通意识。</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 18 }" v-on:click="toggle(18)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">人工智能科学家/领域专家</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        全面负责公司人工智能产品线的创新和研发工作；领导通信人工智能实验室的算法科学家，人工智能工程师团队进行人工智能，机器学习产品在通信，互联网，IT和垂直行业的创新，研发与商用
                      </li>
                      <li>
                        公司致力于基于标准的、开放的平台框架以场景化的模式支撑企业面向各应用赋能的完整产品集和解决方案。
                      </li>
                      <li>
                        作为重要战略部署，公司人工智能实验室致力于推进AI与通信，互联网、IT技术的融合，着力打造AI在新领域，新行业、新技术中的应用；
                      </li>
                      <li>
                        在公司已有的AI平台的基础上开发新的产品特性和功能，建立全领域人工智能解决方案，打造AI在5G和垂直行业的广泛应用。
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          通信，信息，电子工程，计算机，数学，统计学等相关专业博士学位（优先）或优秀硕士；
                        </li>
                        <li>
                          8+年以上通信，互联网，IT，人工智能，机器学习，领域的工作经验；5+年以上研发团队管理经验；
                        </li>
                        <li>
                          &nbsp;优秀的团队领导能力，在通信运营商/设备商/互联网/IT公司担任过机器学习/数据科学/人工智能领域的团队领导者优先；
                        </li>
                        <li>
                          具备丰富的人工智能、机器学习、数据挖掘、移动通信等相关领域的研究和实践经验；
                        </li>
                        <li>
                          良好的通信或互联网行业知识，包括人工智能和机器学习在通信网络，终端，互联网，芯片，或垂直行业的应用经验；
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 19 }" v-on:click="toggle(19)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">Java架构师（云平台研发岗）</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责公司整体云平台的发展战略、技术规划，统筹运维、安全等方向；&nbsp;
                      </li>
                      <li>
                        管理团队及梯队化建设，领导团队并组织实施年度工作计划，完成年度任务目标；&nbsp;
                      </li>
                      <li>
                        建设具有公司特色，行业领先、稳定、高效、安全的云平台，有效支撑业务规划的落地，加速云平台建设，助力
                        AI、IoT、大数据等核心业务达到并保持行业领先；&nbsp;
                      </li>
                      <li>
                        匹配业务发展节奏，支撑相关产品的技术实现和稳定运行，从平台角度不断提升产品体验。&nbsp;
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          精通Java/JavaScript/SQL/XML/JSP/velocity，熟练使用Struts/Spring/Hibernate/Ibatis等常见开源框架；熟悉MySQL等主流数据库,具备一定的SQL性能调优能力；
                        </li>
                        <li>
                          熟悉weblogic、
                          WebSphere等应用和服务器配置；熟悉微服务架构，熟练掌握springboot，springcloud；
                        </li>
                        <li>
                          了解前台Web开发以及vue等主流框架者；有大容量、高性能、高并发、分布式系统的设计开发经验者优先；有良好的沟通能力，可以根据以往项目经验提出合适的方案及建议；
                        </li>
                        <li>计算机、电子等相关专业本科及以上学历；</li>
                        <li>5年以上开发经验；</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 20 }" v-on:click="toggle(20)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">云平台技术专家</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责公司整体云平台的发展战略、技术规划，统筹运维、安全等方向；&nbsp;
                      </li>
                      <li>
                        管理团队及梯队化建设，领导团队并组织实施年度工作计划，完成年度任务目标；&nbsp;
                      </li>
                      <li>
                        建设具有公司特色，行业领先、稳定、高效、安全的云平台，有效支撑业务规划的落地，加速云平台建设，助力
                        AI、IoT、大数据等核心业务达到并保持行业领先；&nbsp;
                      </li>
                      <li>
                        匹配业务发展节奏，支撑相关产品的技术实现和稳定运行，从平台角度不断提升产品体验。&nbsp;
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          计算机专业本科学历以上，10年以上云平台工作经验；&nbsp;
                        </li>
                        <li>
                          具备丰富的技术团队管理经验，具有极强的事业心和创新、创业精神，能承受较大工作压力；&nbsp;
                        </li>
                        <li>
                          精通云计算、大数据、安全运维等相关技术经验，有过私有云、公有云、混合云的相关工作经验，拥有较强的系统设计和实现能力，拥有优秀的需求把握与分析能力，技术撰写审查能力和大型项目落地的经验；&nbsp;
                        </li>
                        <li>
                          具备目标设定与执行、项目管理、进度安排和控制、质量管理、有效促进他人行动的能
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 21 }" v-on:click="toggle(21)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">高级硬件工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        根据产品需求确定硬件解决方案，规划硬件系统实现原理；
                      </li>
                      <li>
                        硬件产品的设计实现，包括器件选型、原理图和PCB设计、电路调试，参与结构及外壳的协同设计；
                      </li>
                      <li>
                        进行关键物料选型、供应商沟通与管理、原理图绘制、PCB绘制与加工、结构外形及安装方式沟通与设计、BOM生成与样机物料采购、PCB焊接调试、线束加工及样机组装；
                      </li>
                      <li>
                        PCB优化、改进、定型；产品量产支持；功能维护与升级；产品迭代支持等；
                      </li>
                      <li>负责产品的电磁兼容排查与整改；</li>
                      <li>OEM硬件产品研发过程管理及验收；</li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>5年以上网页前端开发工作经验；</li>
                        <li>
                          精通前端语言（JavaScript、HTML、CSS、Xml等），熟悉jquery、ajax优先；
                        </li>
                        <li>
                          有良好的沟通能力及团队合作精神，能独立解决问题、钻研新技术，兼具设计思维者更佳；
                        </li>
                        <li>有移动客户端开发、服务端API开发经验者优先；</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 22 }" v-on:click="toggle(22)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">前端开发工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        按照UI设计稿进行网站、移动客户端产品（iOS/Android）前端构建；
                      </li>
                      <li>可实现交互设计、js互动等各类需求；</li>
                      <li>负责前端系统和功能的开发、调试以及维护</li>
                      <li>
                        与产品经理、设计师、后台开发人员沟通配合，进行页面原型转换、实现；
                      </li>
                      <li>协助产品的性能优化；</li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>5年以上网页前端开发工作经验；</li>
                        <li>
                          精通前端语言（JavaScript、HTML、CSS、Xml等），熟悉jquery、ajax优先；
                        </li>
                        <li>
                          有良好的沟通能力及团队合作精神，能独立解决问题、钻研新技术，兼具设计思维者更佳；
                        </li>
                        <li>有移动客户端开发、服务端API开发经验者优先；</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 23 }" v-on:click="toggle(23)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">后端工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        参与后台系统架构、性能、安全、扩展等优化的设计和实现；
                      </li>
                      <li>
                        根据功能需求和设计方案进行开发，完成代码的编写和调试工作；
                      </li>
                      <li>
                        需要较强的沟通能力协调配合产品,测试和其他开发人员；
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          本科及以上学历。五年以上Java开发经验，有大型互联网公司开发背景优先；
                        </li>
                        <li>
                          Java基本功扎实，熟悉Java SE和Java
                          EE技术，掌握JVM运作机制，了解常见算法和设计模式，有JVM调优经验优先；
                        </li>
                        <li>
                          熟练使用ORM框架，熟悉常见的RPC框架，了解其运行原理和设计思想；
                        </li>
                        <li>
                          熟悉分布式、缓存（Redis）、消息（ActiveMQ/RabbitMQ/MQTT）等机制，有分布式系统开发、优化、集群架构的设计和使用经验优先；掌握Nginx原理和配置；
                        </li>
                        <li>熟练掌握Spring、SpringBoot、SpringCloud等框架。</li>
                        <li>
                          能提供完善的WebApp技术方案，熟练掌握HTML、CSS、Vue、Javascript、TypeScript、WebPack等技术；
                        </li>
                        <li>
                          熟练使用MySQL进行应用开发，熟悉数据库原理以及常用性能优化技术，对数据库索引、事务、锁机制等原理有较深的了解；
                        </li>
                        <li>熟悉Linux系统，熟练使用Shell、VIM、Linux命令；</li>
                        <li>
                          熟练掌握持续集成、自动化运维部署、Docker、Kunbernetes技术；
                        </li>
                        <li>全栈工程师优先，机器人行业优先。</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 24 }" v-on:click="toggle(24)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">Android工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>负责公司机器人应用产品开发及维护；</li>
                      <li>根据公司产品策略，开发Android平台上的应用程序；</li>
                      <li>验证和修改测试中发现的问题；</li>
                      <li>根据开发过程中的体验对产品提出改进意见；</li>
                      <li>与团队成员充分、有效沟通协作。&nbsp;</li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          本科及以上学历，计算机相关专业毕业，两年及以上Android软件开发经验；
                        </li>
                        <li>具有扎实JAVA语言基础，具备良好的编程习惯；</li>
                        <li>
                          熟悉Android基本架构和开发技术，包括SDK、控件、界面、多线程、网络通信、SQLite数据库等；
                        </li>
                        <li>熟悉HTTP协议，XML, JSON数据格式;</li>
                        <li>熟悉本地H5混合编程；</li>
                        <li>
                          擅长与人沟通，具有良好的团队合作意识，责任心强，能够积极主动的完成项目开发。
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 25 }" v-on:click="toggle(25)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">软件测试经理</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>负责分析产品需求，制定合理高效的测试计划；</li>
                      <li>
                        根据需求编写测试用例和测试脚本，搭建自动化测试环境，执行测试及Bug跟踪；
                      </li>
                      <li>
                        设计并执行功能测试、接口测试、压力测试、性能测试、兼容性测试，跟踪定位产品软件中的缺陷或问题；
                      </li>
                      <li>配合研发人员进行功能调试，以及突发事件的解决；</li>
                      <li>根据测试过程编写相关测试报告；</li>
                      <li>有移动设备测试经验者优先；</li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          计算机相关专业，本科及以上学历，3年以上测试或开发经验,2
                          年以上性能测试经验；
                        </li>
                        <li>
                          工作细心，耐心，有责任心，有较强的沟通能力和团队协作精神；
                        </li>
                        <li>
                          掌握软件测试技术、测试流程及方法；有自动化测试经验者优先，有分布式系统测试经验优先；
                        </li>
                        <li>
                          熟悉loadrunner/Jmeters
                          性能测试工具的使用、调试、执行，具备测试数据的分析能力；
                        </li>
                        <li>
                          熟悉、Linux、Windows等操作系统；熟悉Mysql数据库；掌握Shell，Python等脚本语言；
                        </li>
                        <li>
                          抗压能力强，富有激情，能胜任重复性的工作和能快速融入高节奏的工作环境；
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 26 }" v-on:click="toggle(26)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人研发专家</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    负责研发机器人相应技术，产品创新体系的整体规划及实施，根据机器人场景使用效果、市场格局以及公司业务发展，持续完善产品功能和设计，推动产品演进、优化与迭代升级，确保机器人产品应用、功能和类别定位，成为公司重点项目支撑，满足客户需求。
                    <ol>
                      <li>
                        根据公司的发展战略目标，负责制定机器人研发产品发展战略及实施，推动公司战略布局落地，帮助公司战略升级和人工智能领域地位升级；
                      </li>
                      <li>
                        负责带领机器人研发团队，搭建关键技术架构平台，完成研发中心所有机器人产品线设计、运行、管理，根据产品实施效果，推动产品演进、优化与迭代升级，以达成公司AI产品创新研发目标，帮助公司战略目标实现；
                      </li>
                      <li>
                        对行业界的机器学习算法、机器人产品的定义架构有丰富了解并且能够跟踪进展，对自动控制技术、个性化推荐、图像处理、NLP语音等领域有成熟地指导经验；
                      </li>
                      <li>
                        根据机器人研究发展战略，负责产品管理体系，不断优化组织架构、优秀工程师人员配置，提升产品研发效率和创新性；
                      </li>
                      <li>
                        根据机器人产品线规划，负责对项目进行评估，确定重点在研项目进度计划的按期进行和顺利完成。
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          对机器人产品、智能化产品研发工作有超过十年以上经验，在相关领域具备行业影响力，承担过国家级科研专项、获得过国际科技奖励，有显著的科研成果和工作成绩；
                        </li>
                        <li>
                          在机器学习与计算机视觉，具有较深厚的研发基础并已取得一些较好的研究成果、主导或参与过有市场影响力的AI产品或开源项目的研发等；
                        </li>
                        <li>
                          具备优秀的团队管理能力和前沿技术视野，有过带领60人以上研发团队的管理经验，有良好的组织协调和沟通能力；&nbsp;
                        </li>
                        <li>
                          具备良好的职业素养，在高科技领域有广泛的人脉关系，热衷技术创新与学术开拓，具备较强的沟通和资源整合能力，在高科技领域有技术资源优先。
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 27 }" v-on:click="toggle(27)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">数据分析师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        搭建运营数据指标，管理业务数据与报表，对数据准确性负责；
                      </li>
                      <li>
                        与各部门协调沟通，将运营所需数据对接至数据库，明确字段含义与逻辑，汇总并按逻辑存储数据；
                      </li>
                      <li>
                        对运营报表所覆盖的数据维度、分析的逻辑、指标预警机制及数据呈现方式提出改进建议并落实；
                      </li>
                      <li>报表自动化与数据输出；</li>
                      <li>统一的业务数据接口人。</li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统计、数学、计算机等相关专业，大学本科及以上学历。
                        </li>
                        <li>具有相关工作岗位5年以上经验。</li>
                        <li>
                          熟悉运营分析体系，熟悉量化分析方法与指标预警机制的建立
                        </li>
                        <li>
                          了解搭建数据库与数据平台的基本思路，熟练使用SQL,
                          至少熟练使用Python/SPSS/Excel等数据分析软件中的一种。
                        </li>
                        <li>具有较强的逻辑分析能力、计划与执行能力；</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 28 }" v-on:click="toggle(28)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">数据挖掘专家</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>承担物联网相关的数据挖掘需求；</li>
                      <li>
                        进行公司业务用户行为分析研究，包括需求分析与分层，人群划分与刻画等；
                      </li>
                      <li>配合运营体系相关的数据挖掘；</li>
                      <li>从实际需求出发，研究和改进数据挖掘算法。</li>
                      <li>
                        对特定领域数据进行挖掘，能应用机器学习及深度学习建模。
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          熟悉数据挖掘相关算法(决策树、SVM、聚类、逻辑回归、贝叶斯)，有扎实的数理基本功和良好的逻辑思维能力；
                        </li>
                        <li>
                          对数据敏感，有强烈的好奇心，喜欢研究数据并从中发现价值；
                        </li>
                        <li>熟悉C/C++/java或者Python语言；</li>
                        <li>
                          有Hadoop，Spark，MPI相关经验或者其它大规模数据处理经验者优先。
                        </li>
                        <li>对R,tensorflow,sklearn有研究者优先。</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 29 }" v-on:click="toggle(29)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">大数据架构师</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        利用统计和机器学习方法对数据进行分析，评估用户需求、用户生命周期价值。模型开发和使用贯穿数据的整个生命周期管理；
                      </li>
                      <li>建立并部署业界领先的机器学习模型；</li>
                      <li>
                        参与数据产品与应用的数据研发，发掘数据商业价值，打造极致体验的数据产品，提高用户增长和风险管理效率和能力；
                      </li>
                      <li>
                        在深度学习，加强学习，文本图像处理，语音识别，NLP，统计，AI等领域展开基础研究。
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>统招本科以上学历，至少6年以上实际工作经验；</li>
                        <li>
                          负责过大型数据平台或数据仓库设计，具有扎实的大数据和数据仓库的理论功底；精通至少一门编程语言(java/python)，熟练运用各种常用算法和数据结构，有独立的实现能力；
                        </li>
                        <li>
                          对Hadoop的大数据体系有深入认识，对Hadoop、Hive、HBase、Spark、Storm、
                          Kafka、ES等有实际应用研发经验，对源码有深入理解；
                        </li>
                        <li>
                          很强的学习、分析和解决问题能力，良好的团队意识和协作精神，有较强的内外沟通能力；
                        </li>
                        <li>有物联网产品相关的的技术经验优先；</li>
                        <li>有开源社区代码commit者优先。</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 30 }" v-on:click="toggle(30)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">数据科学家</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        利用统计和机器学习方法对数据进行分析，评估用户需求、用户生命周期价值。模型开发和使用贯穿数据的整个生命周期管理；
                      </li>
                      <li>建立并部署业界领先的机器学习模型；</li>
                      <li>
                        参与数据产品与应用的数据研发，发掘数据商业价值，打造极致体验的数据产品，提高用户增长和风险管理效率和能力；
                      </li>
                      <li>
                        在深度学习，加强学习，文本图像处理，语音识别，NLP，统计，AI等领域展开基础研究。
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          计算机，数学，统计，经济，运筹学或其他量化相关专业的硕士和博士；
                        </li>
                        <li>
                          了解常用统计和机器学习算法，包括并不限于LR，GBDT，neural
                          network, deep learning, reinforcement learning, NLP,
                          graph
                          embedding,预测，能够熟练使用R，Python或SAS等软件进行分析和建模；
                        </li>
                        <li>
                          有数据挖掘和大型数据处理的经验，需要一定的SQL能力；
                        </li>
                        <li>
                          优秀的逻辑思维能力，高度的业务敏感性与数据敏感性，能够适应高强度、快节奏的工作氛围；优秀的书面和口头沟通能力；
                        </li>
                        <li>具备相关风控，策略，分析，建模从业经验优先；</li>
                        <li>具备快速学习和解决问题能力，团队合作协调能力。</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 31 }" v-on:click="toggle(31)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">运维工程师（物联网方向）</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责系统及业务平台的高并发服务体系的规划与部署工作；
                      </li>
                      <li>
                        保证公司系统及业务平台的安全，为其稳定的运行提供技术支持&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                      </li>
                      <li>负责系统及网络设备的日常安全检查和风险报告；</li>
                      <li>
                        对服务器进行日常维护，确保各项服务连续正常运行，无重大事故；
                        &nbsp;&nbsp; &nbsp;
                      </li>
                      <li>
                        配合开发人员进行相关数据统计、参数配置、系统测试及系统监控；&nbsp;
                      </li>
                      <li>研究运维相关技术，根据系统需求制定运维技术方案。</li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招学历、计算机相关专业优先；3年以上运维或系统管理经验；
                        </li>
                        <li>精通Linux操作系统管理及相关运维；</li>
                        <li>
                          熟悉关系型数据库（MySQL、Oracle、SQL
                          Server），熟悉Redis、Elasticsearch、Cassandra等NoSQL及相关工具；
                        </li>
                        <li>
                          有丰富的MySQL等关系数据库的运维经验；熟悉Cacti，nagios，Zabi等相关监控系统架设，脚本编写；
                        </li>
                        <li>
                          有较好的逻辑思维能力，工作态度端正、积极，有团队合作意识；
                        </li>
                        <li>
                          责任心强、肯吃苦、善于学习、工作态度认真，积极发现问题并解决问题；
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 32 }" v-on:click="toggle(32)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">c++工程师（物联网方向）</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        参与核心系统具体的设计，负责具体的编码、测试及性能调优；
                      </li>
                      <li>辅助进行系统的功能定义、程序设计；</li>
                      <li>配合研发负责人完成相关任务目标；</li>
                      <li>
                        具有很强的学习、独立分析能力、工作责任心、良好的沟通能力和团体合作精神；
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机相关专业，5年以上C/C++开发经验；</li>
                        <li>
                          熟练Windows平台C/C++开发，熟练使用VS
                          2010/2015等开发工具；
                        </li>
                        <li>
                          熟悉网络通信协议（UDP/TCP、HTTP/HTTPS），熟悉关系型数据库（MySQL、Oracle、SQL
                          Server等）以及相应数据库调优、SQL优化，熟悉Redis、Cassandra等NOSQL，熟悉常用第三方库；
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 33 }" v-on:click="toggle(33)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">产品规划负责人（物联网方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>参与整体产品战略规划的制定和执行；&nbsp;</li>
                      <li>
                        负责管理并带领产品团队，了解市场信息，制定产品战略以及制定产品标准化；&nbsp;
                      </li>
                      <li>
                        根据业务需求，制定市场推广计划，负责管理多个产品线整体规划和GTM战略（包括但不限于物联网、零售、电商、医疗、健康、金融、供应链等相关领域），负责市场的开拓及产品的引入，并不断优化及提升其市场运营效果；&nbsp;
                      </li>
                      <li>
                        整体把控产品全生命周期的迭代建设，同时不断提升客户体验和价值能够很好的落地布局并配合业务部门达成销售目标，促进不同类型产品的落地。
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          本科以上学历，具备 10
                          年及以上产品相关工作经验和团队管理经验，有大中型公司产品总监相关工作经验，且独立负责过不同类型产品的落地；&nbsp;
                        </li>
                        <li>
                          具备良好的产品规划及市场策略分析能力，具有敏锐的市场洞察力；&nbsp;
                        </li>
                        <li>
                          具备优秀的资源整合及业务推进及拓展能力，和不同类型产品管理经验，熟悉其从需求分析到上线的整个流程；&nbsp;
                        </li>
                        <li>
                          具备较强的沟通协调能力，执行力高且具有良好的团队合作精神，对工作充满热情，富有创新精神，能承受较大的工作压力。
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 34 }" v-on:click="toggle(34)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">物联网系统高级架构师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责智慧城市操作系统整体技术规划设计；根据公司战略进行整体系统架构规划和技术规划并领导实施；
                      </li>
                      <li>
                        智能城市操作系统相关平台的技术选型、架构确定及核心技术问题的解决；
                      </li>
                      <li>
                        带领团队，开发智能城市相关的平台和产品；培养技术梯队；
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          有8年及以上智能城市操作系统相关工作经验，3年以上架构师经验；
                        </li>
                        <li>
                          对于智能城市操作系统、云计算、IoT等领域有深刻的理解
                        </li>
                        <li>
                          具备智能城市操作系统整体架构设计的经验，深度参与过城市计算、城市大脑相关项目架构设计及开发；
                        </li>
                        <li>
                          对云计算、IoT、大数据、人工智能等前沿技术具有深刻的理解，并设计参与过多个相关项目的实施；
                        </li>
                        <li>具有智慧城市项目的开发与交付的经验；</li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 35 }" v-on:click="toggle(35)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">测试工程师</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责公司所开发产品的测试工作，保证公司的产品质量；开发测试工具和自动化测试框架、自动化测试脚本，进行自动化测试；<br />
                      </li>
                      <li>
                        参与需求评审、产品评审等工作并提出建议；对项目开发流程和工具进行优化，提高研发和整个项目的交付效率；<br />
                      </li>
                      <li>
                        学习和研究新技术以提高测试效率和质量，满足质量保证的需求。<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机、电子等相关专业本科及以上学历；<br /></li>
                        <li>3年以上测试开发工作经验；<br /></li>
                        <li>
                          学习能力强，有较强的关注细节，沟通和理解能力；善于团队合作，理解和适应变化，结果导向；有较好的自动化测试脚本开发能力；有测试管理经验者优先。<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 36 }" v-on:click="toggle(36)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">大数据高级开发工程师</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        参与大数据平台的开发，实现数据驱动业务；根据业务需求进行数据模型的调研、设计、开发及验证工作，并持续进行模型的优化；<br />
                      </li>
                      <li>
                        负责数据模型架构的构建，建立数据抽取、清洗、校验等数据加工流程规范及OLAP多维数据分析模型；<br />
                      </li>
                      <li>
                        持续对系统的技术架构进行改进和优化，提升海量数据的查询性能和用户体验；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机、电子等相关专业本科及以上学历；<br /></li>
                        <li>五年以上的大数据开发相关的经验；<br /></li>
                        <li>
                          熟悉linux开发环境，熟练掌握Java/Python，有脚本语言（shell,Go）开发经验者优先；
                        </li>
                        <li>熟悉Hadoop、Spark/Flink等大数据框架和开发技术；</li>
                        <li>
                          掌握HBase、ElasticSearch、Kylin等开源大数据存储技术，并能结合不同的业务场景深入使用；
                        </li>
                        <li>
                          对解决具有挑战性的问题充满激情，具有良好的分析问题和解决问题的能力。<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 37 }" v-on:click="toggle(37)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">项目经理（技术研发中心）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责项目全过程管理工作，制定合理的整体项目计划；<br />
                      </li>
                      <li>
                        负责项目的过程控制、成本控制、进度控制、质量控制等，确保按时按质完成项目；<br />
                      </li>
                      <li>
                        负责项目运行中关键问题的协调与解决，以及项目内实施团队的管理与协调，解决项目开发过程中遇到的质量问题和管理问题，完成协调、项目验收等工作；<br />
                      </li>
                      <li>
                        项目管理体系建设：推动现有体系的实施、优化和改进；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机、电子等相关专业本科及以上学历；<br /></li>
                        <li>
                          三年以上的软件工程管理或项目管理经验，有开发背景的优先；<br />
                        </li>
                        <li>具有较强的需求分析、项目规划和项目管理能力；</li>
                        <li>
                          较强的书面和口头沟通技巧、对自己有较高的要求，责任心强，有较强的抗压能力，能够自我驱动，并能驱动他人；
                        </li>
                        <li>
                          具备较强的跨团队协作推动能力，能促进团队间高效合作；
                        </li>
                        <li>
                          较强的发现问题、解决问题能管理，具有创新型思维；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 38 }" v-on:click="toggle(38)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">移动开发工程师（技术研发中心）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>参与移动端APP功能设计、开发和实现；<br /></li>
                      <li>
                        优化移动端APP，改善用户体验；解决应用的问题；<br />
                      </li>
                      <li>
                        参与应用开发规范的制定及开发流程的优化；研究移动端应用开发新技术。<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机、电子等相关专业本科及以上学历；<br /></li>
                        <li>3年以上Android APP或者iOS APP开发经验；<br /></li>
                        <li>
                          Android开发工程师：1、熟悉Java语言、Android
                          SDK和NDK，熟悉Android平台体系结构 2、精通Android
                          App开发，熟练掌握常见的开源框架及其设计原理，优秀的面向对象化编程思想
                          3、有基础框架设计、公共组件开发、UI布局开发、App重构和优化等实践经验、4、对
                          Android
                          系统应用管理、进程管理、内存管理机制有深入理解；
                          5、有多个完整的Android
                          App项目经验，至少参加过一个完整的Android
                          APP的技术框架搭建、关键技术选型工作；6、熟悉Android、iOS跨平台开发框架；
                        </li>
                        <li>
                          &nbsp;iOS开发工程师：1、有3年以上 iOS
                          开发经验，有作为主力工程师完整开发过一个以上 iOS
                          应用的经历； 2、有扎实的编程功底和编程经验，熟悉
                          Objective-C，C/C++ 开发语言，了解 Swift 开发语言；
                          3、精通 iOS SDK中的
                          UI、网络、数据库、Webkit、JavascriptCore
                          等开发技巧，熟悉常见 iOS 第三方开源库；
                          4、熟悉多线程，内存管理，内存优化； 5、熟悉 Git
                          代码管理工具； 6、熟悉跨 Android、iOS
                          平台开发框架；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 39 }" v-on:click="toggle(39)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">Web前端工程师（技术研发中心）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>参与公司产品Web前端功能设计、开发和实现；<br /></li>
                      <li>
                        优化Web前端设计，改善用户体验；解决产品前端的问题；<br />
                      </li>
                      <li>
                        参与Web前端开发规范的制度及开发流程的优化；研究Web前端技术的发展，丰富Web交互方式。<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机、电子等相关专业本科及以上学历；<br /></li>
                        <li>3年以上大中型互联网项目前端开发经验；<br /></li>
                        <li>
                          精通各种Web前端技术，包括HTML5、CSS3、原生Javascript等；<br />
                        </li>
                        <li>
                          熟悉浏览器的差异，原理，熟悉vue、jQuery等js框架；熟悉针对主流浏览器的代码兼容及优化；<br />
                        </li>
                        <li>熟悉B/S架构和常见页面布局；<br /></li>
                        <li>
                          有良好的审美观和用户体验意识，良好的沟通能力与团队合作意识，能够承担一定工作压力。<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 40 }" v-on:click="toggle(40)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">高级JAVA工程师（技术研发中心）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        参与公司云平台、IoT平台、网关、大数据平台等相关技术平台的建设及生态产品的开发；<br />
                      </li>
                      <li>
                        参与需求分析、架构设计、软件开发及相关测试部署等工作；学习先进技术框架并在项目中应用；<br />
                      </li>
                      <li>
                        参与技术、产品等文档的编写与维护；参与业务部门技术支持等工作；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机、电子等相关专业本科及以上学历；<br /></li>
                        <li>3年以上开发经验；<br /></li>
                        <li>
                          精通Java/JavaScript/SQL/XML/JSP/velocity，熟练使用Struts/Spring/Hibernate/Ibatis等常见开源框架；<br />
                        </li>
                        <li>
                          熟悉MySQL等主流数据库,具备一定的SQL性能调优能力；熟悉weblogic、
                          WebSphere等应用和服务器配置；<br />
                        </li>
                        <li>
                          熟悉微服务架构，熟练掌握springboot，springcloud；了解前台Web开发以及vue等主流框架者；<br />
                        </li>
                        <li>
                          有大容量、高性能、高并发、分布式系统的设计开发经验者优先；<br />
                        </li>
                        <li>
                          有良好的沟通能力，可以根据以往项目经验提出合适的方案及建议；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 41 }" v-on:click="toggle(41)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">研发总监（技术研发中心）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        根据公司战略规划和业务需求，制定技术发展方向并推动技术方案实施，尤其是云计算、物联网、大数据等技术的发展方向；
                      </li>
                      <li>
                        结合公司现有的云计算、物联网、大数据等方向的能力，确定技术整合的方向以及技术赋能的路线；<br />
                      </li>
                      <li>
                        参与平台与产品系统分析、架构设计，把控核心技术的问题处理，从技术层面推动产品创新和技术优化，确保公司在技术、应用以及生态方面的核心竞争力；<br />
                      </li>
                      <li>
                        支持产品中心、业务部门快速打造产品并推向市场；支持产品的优化迭代；<br />
                      </li>
                      <li>
                        负责研发技术团队的梯队建设，制定并实施团队培养计划；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招硕士及以上学历，计算机、电子等相关专业；<br />
                        </li>
                        <li>
                          5年以上云计算、物联网等领域工作经验，20人以上团队管理经验，丰富的团队建设及全局技术管理经验，善于调动团队积极性和创造性；<br />
                        </li>
                        <li>
                          对新技术有充分的敏感性，能迅速理解新技术并予以运用；
                        </li>
                        <li>能迅速发现问题并给出解决问题的思路和方案；</li>
                        <li>
                          较强的团队和项目管理能力，对软件质量有较高要求和严格标准；
                        </li>
                        <li>具有To B端产品的开发经验；<br /></li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 42 }" v-on:click="toggle(42)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">产品经理（大数据方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责部门数据中台及相关产品的需求分析、功能规划、产品设计；<br />
                      </li>
                      <li>
                        和业务团队、产品中心、开发团队共同讨论产品实现方案；并协助开发团队进行项目开发，保证项目的顺利实施；<br />
                      </li>
                      <li>
                        根据市场及业务部门反馈，不断优化产品，引导以用户为中心的产品迭代；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招本科及以上学历，计算机、电子等相关专业；<br />
                        </li>
                        <li>3年以上大数据领域的产品设计的经验；<br /></li>
                        <li>对大数据行业应用有深刻理解；</li>
                        <li>有多个相关产品设计的经验；</li>
                        <li>
                          具有优秀的沟通能力，良好的协作意识和组织能力，能够带领团队完成开发任务；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 43 }" v-on:click="toggle(43)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">产品经理（物联网方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责部门产品的需求分析、功能规划、产品设计；<br />
                      </li>
                      <li>
                        和业务团队、产品中心、开发团队共同讨论产品实现方案；并协助开发团队进行项目开发，保证项目的顺利实施；<br />
                      </li>
                      <li>
                        根据市场及业务部门反馈，不断优化产品，引导以用户为中心的产品迭代；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招本科及以上学历，计算机、电子等相关专业；<br />
                        </li>
                        <li>3年以上物联网领域的产品设计的经验；<br /></li>
                        <li>对物联网行业应用有深刻理解；</li>
                        <li>有多个相关产品设计的经验；</li>
                        <li>
                          具有优秀的沟通能力，良好的协作意识和组织能力，能够带领团队完成开发任务；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 44 }" v-on:click="toggle(44)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">产品经理（API网关方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责部门API网关及相关产品的需求分析、功能规划、产品设计；<br />
                      </li>
                      <li>
                        和业务团队、产品中心、开发团队共同讨论产品实现方案；并协助开发团队进行项目开发，保证项目的顺利实施；<br />
                      </li>
                      <li>
                        根据市场及业务部门反馈，不断优化产品，引导以用户为中心的产品迭代；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招本科及以上学历，计算机、电子等相关专业；<br />
                        </li>
                        <li>
                          3年以上API网关、云计算等领域的产品设计的经验；<br />
                        </li>
                        <li>有API网关、云市场等平台的设计经验；</li>
                        <li>有多个相关产品设计的经验；</li>
                        <li>
                          具有优秀的沟通能力，良好的协作意识和组织能力，能够带领团队完成开发任务；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 45 }" v-on:click="toggle(45)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">产品经理（云计算方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        负责部门产品的需求分析、功能规划、产品设计；<br />
                      </li>
                      <li>
                        和业务团队、产品中心、开发团队共同讨论产品实现方案；并协助开发团队进行项目开发，保证项目的顺利实施；<br />
                      </li>
                      <li>
                        根据市场及业务部门反馈，不断优化产品，引导以用户为中心的产品迭代；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招本科及以上学历，计算机、电子等相关专业；<br />
                        </li>
                        <li>3年以上云计算领域的产品设计的经验；<br /></li>
                        <li>对云计算行业应用有深刻理解；</li>
                        <li>有多个相关产品设计的经验；</li>
                        <li>
                          具有优秀的沟通能力，良好的协作意识和组织能力，能够带领团队完成开发任务；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 46 }" v-on:click="toggle(46)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">产品总监（技术研发中心）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>
                        产品全流程管理，包括制定产品规划、设计系统功能、收集用户/客户需求、进行市场和竞争分析、升级产品组合等；<br />
                      </li>
                      <li>
                        规划产品发展路径，在项目推进过程中跨部门协调沟通，组织协调跨部门资源高效完成产品开发；<br />
                      </li>
                      <li>
                        深度研究市场产品，把握产品和运营现状，判断机会和潜力点，切实有效地采取行动；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>计算机、电子等相关专业本科及以上学历；<br /></li>
                        <li>
                          5年以上产品设计经验，具有云平台、大数据平台、物联网至少一方面产品设计经验；具有产品团队管理经验；<br />
                        </li>
                        <li>熟悉中台设计，具有多个平台产品设计经验；</li>
                        <li>
                          具备创造性思维、快速学习适应能力，对用户需求有很强的洞察力和判断力；
                        </li>
                        <li>
                          优秀的创新能力、钻研精神，出色的执行能力和沟通协调能力，及独立解决问题的能力；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 47 }" v-on:click="toggle(47)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">架构师（大数据方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>负责数据中台的规划、设计；<br /></li>
                      <li>
                        大数据平台的技术选型、架构确定及核心技术问题的解决；<br />
                      </li>
                      <li>负责平台调研以及业务调研 ；</li>
                      <li>设计标准赋能API；</li>
                      <li>
                        和产品中心、业务部门一起联合打造生态产品和行业解决方案；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招本科以上学历，计算机、电子等相关专业；<br />
                        </li>
                        <li>
                          有5年及以上大数据方面相关工作经验，2年以上架构师经验；
                        </li>
                        <li>对于大数据行业应用有深刻的理解；<br /></li>
                        <li>
                          具有大数据平台架构设计经验，熟悉业务数据调研方法，精通数据仓库的设计理念，有成功的数据仓库架构和实施经验；
                        </li>
                        <li>有跨行业领域数据仓库模型设计者优先；</li>
                        <li>
                          熟悉通用的ETL流程，
                          熟悉数据安全管控流程，熟悉数据质量管理流程；
                        </li>
                        <li>
                          熟悉Hadoop系统，对HDFS、HBASE、HIVE以及Mapreduce框架计算有全面的研究和实践；
                        </li>
                        <li>
                          熟悉java语言，熟悉linux平台及shell脚本开发；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 48 }" v-on:click="toggle(48)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">架构师（API网关方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>负责API网关的规划、设计<br /></li>
                      <li>
                        负责API网关的技术选型、架构确定及核心技术问题的解决<br />
                      </li>
                      <li>负责平台相关的业务调研 ；</li>
                      <li>
                        与产品中心、业务部门一起联合打造生态产品和行业解决方案；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <ol>
                        <li>
                          统招本科以上学历，计算机、电子等相关专业；<br />
                        </li>
                        <li>有5年及以上开发工作经验，2年以上架构师经验；</li>
                        <li>
                          对API网关、云计算等有深刻的理解；具有API网关架构设计经验；<br />
                        </li>
                        <li>
                          精通API网关架构设计；具有高并发API网关架构经验；
                        </li>
                        <li>
                          了解Docker，熟悉基于Docker的云计算生态体系，熟悉Openstack、Kubernate开源架构及Docker编排技术；
                        </li>
                        <li>
                          熟悉DevOps构建，熟悉开源的代码管理、编译部署、BUG管理等开发工具，精通JAVA和Python语言；熟悉Lua脚本语言；<br />
                        </li>
                      </ol>
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 49 }" v-on:click="toggle(49)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">架构师（物联网方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <ol>
                      <li>负责物联网平台的规划、设计；</li>
                      <li>物联网相关产品的设计与开发；<br /></li>
                      <li>
                        物联网平台的技术选型、架构确定及核心技术问题的解决；<br />
                      </li>
                      <li>负责平台调研以及业务调研 ；</li>
                      <li>设计标准赋能API；</li>
                      <li>
                        与产品中心、业务部门一起联合打造物联网行业解决方案；<br />
                      </li>
                    </ol>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>1.统招本科以上学历，计算机、电子等相关专业；<br /></p>

                      <p>
                        2.有5年及以上物联网方面相关工作经验，2年以上架构师经验；<br />
                        3.对于物联网行业有深刻的理解；<br />
                      </p>

                      <p>
                        4.计算机及相关专业本科学历及以上，5年以上相关工作经验；<br />
                        5.对于物联网有深刻的理解，有主持物联网平台设计与开发的经验；<br />
                        6.精通MQTT、CoAP、NB-IoT、LoRa、2/3/4G、串口等通讯协议；<br />
                        7.具备良好的沟通能力及业务分析能力，具备良好的文档规范；<br />
                        8.具备较强学习能力，能独立研究及解决技术问题的能力；<br />
                        9.具有物联网行业应用的经验；<br />
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 50 }" v-on:click="toggle(50)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">架构师（云计算方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>1.负责云平台的规划、设计；<br /></p>

                    <p>
                      2.负责云平台的技术选型、架构确定及核心技术问题的解决；<br />
                    </p>

                    <p>
                      3.负责平台相关的业务调研
                      ；与产品中心、业务部门一起联合打造生态产品和行业解决方案；
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>1.统招本科以上学历，计算机、电子等相关专业；<br /></p>

                      <p>
                        2.有5年及以上云计算方面相关工作经验，2年以上架构师经验；<br />
                        3.对公有云、私有云及其行业应用有深刻的理解；<br />
                      </p>

                      <p>
                        4.对于公有云、私有云架构有深刻的理解；<br />
                        5.具有云PAAS层开发经验；<br />
                        6.熟悉虚拟化相关技术，对Linux虚拟化、KVM有比较深入的了解；<br />
                        7.了解Docker，熟悉基于Docker的云计算生态体系，熟悉Openstack、Kubernate开源架构及Docker编排技术；<br />
                        8.熟悉DevOps构建，熟悉开源的代码管理、编译部署、BUG管理等开发工具精通JAVA和Python语言，熟悉shell脚本并能在Linux环境进行开发；<br />
                        9.有过云计算平台或私有云产品开发经验；<br />
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 51 }" v-on:click="toggle(51)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">架构师（智能城市操作系统方向）</span>
                </div>
                <div class="col col_area"><span class="text"></span></div>
                <div class="col col_date">发布时间 2020-09-29</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-29</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.负责智慧城市操作系统整体技术规划设计；根据公司战略进行整体系统架构规划和技术规划并领导实施；<br />
                    </p>

                    <p>
                      2.智能城市操作系统相关平台的技术选型、架构确定及核心技术问题的解决；<br />
                    </p>

                    <p>
                      3.带领团队，开发智能城市相关的平台和产品；培养技术梯队；<br />
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>1.统招本科以上学历，计算机、电子等相关专业；<br /></p>

                      <p>
                        2.有5年及以上智能城市操作系统相关工作经验，3年以上架构师经验；<br />
                        3.对于智能城市操作系统、云计算、IoT等领域有深刻的理解；<br />
                      </p>

                      <p>
                        4.具备智能城市操作系统整体架构设计的经验，深度参与过城市计算、城市大脑相关项目架构设计及开发；<br />
                        5.对云计算、IoT、大数据、人工智能等前沿技术具有深刻的理解，并设计参与过多个相关项目的实施；<br />
                        6.具有智慧城市项目的开发与交付的经验；
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 52 }" v-on:click="toggle(52)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机械工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-21</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-21</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1.&nbsp;&nbsp;
                    &nbsp;负责室内外机器人底盘设计，包括不限于传动、悬挂、承重机构设计，熟悉步进、伺服电机及减速、减震装置；<br />
                    2.&nbsp;&nbsp;
                    &nbsp;负责室内外机器人整体外观壳体、内部器件堆叠的结构设计，可进行强度校核；<br />
                    3.&nbsp;&nbsp;
                    &nbsp;独立完成机械设备的总装图及部件图设计出图；<br />
                    4.&nbsp;&nbsp;
                    &nbsp;负责产品研发设计过程中零部件外协加工，有批量化改型经验；<br />
                    5.&nbsp;&nbsp;
                    &nbsp;总结产品研发经验，持续改进产品性能，并根据用户或其他部门的要求进行设计修改和设计改进，完成产品定型工作；<br />
                    6.&nbsp;&nbsp;
                    &nbsp;负责设计文档和技术文件（图纸）的归档；工艺管理及改进；<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1.&nbsp;&nbsp;
                      &nbsp;本科以上学历，5年以上工作经验，机械设计、机电一体化及相关专业；<br />
                      2.&nbsp;&nbsp;
                      &nbsp;设计过的机械传动如带传动、齿轮传动、丝杠传动等，有机器人底盘相关设计经验优先；<br />
                      3.&nbsp;&nbsp;
                      &nbsp;能够自行选配电机及对其进行计算，能够利用相应软件对机械结构进行静力学分析及运动动力分析；<br />
                      4.&nbsp;&nbsp;
                      &nbsp;具有团队合作精神，思维敏捷，创新能力强，善于沟通；<br />
                      5、有良好的现场处理解决问题的能力，良好的沟通能力；<br />
                      6.&nbsp;&nbsp;
                      &nbsp;有机器人底盘类似产品研发经验者、熟练掌握机械结构设计常用软件优先；<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 53 }" v-on:click="toggle(53)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器人运动底盘算法工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-21</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-21</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1、研究并开发基于多传感器（惯导、视觉、激光雷达）融合的地图构建SLAM算法以及自主定位算法；<br />
                    2、研究并开发机器人自主路径规划以及运动规划算法；<br />
                    3、负责算法的优化、移植和产品化<br />
                    4、负责ROS应用程序开发<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1、本科及以上学历，数学，计算机，自动化，机器人等相关专业有良好的数学功2、3年以上相关工作经验；<br />
                      3、熟悉里程计，IMU，单目或双目等视觉传感器RGBD，激光雷达等多传感器信息融合，并有相关项目经验；<br />
                      4、
                      熟悉主流SLAM算法，了解前沿技术与产品，对于机器人算法方面有浓厚兴趣者优先。<br />
                      5、有ROS开发经验<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 54 }" v-on:click="toggle(54)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">Java后端开发工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-20</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-20</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1. 参与后台系统架构、性能、安全、扩展等优化的设计和实现；<br />
                    2.
                    根据功能需求和设计方案进行开发，完成代码的编写和调试工作；<br />
                    3. 需要较强的沟通能力协调配合产品,测试和其他开发人员；<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1、本科及以上学历。两年以上Java开发经验，有大型互联网公司开发背景优先；<br />
                      2、Java基本功扎实，熟悉Java SE和Java
                      EE技术，掌握JVM运作机制，了解常见算法和设计模式，有JVM调优经验优先；<br />
                      3、熟练使用常用的MVC、ORM框架，熟悉常见的RPC框架（SSH等），了解其运行原理和设计思想；<br />
                      4、熟悉分布式、缓存（Redis/Mongodb）、消息（ActiveMQ/RabbitMQ）等机制，有分布式系统开发、优化、集群架构的设计和使用经验优先；<br />
                      5、熟练使用MySQL,Oracal进行应用开发，熟悉数据库原理以及常用性能优化技术，对数据库索引、事务、锁机制等原理有较深的了解。；<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 55 }" v-on:click="toggle(55)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">Web开发工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-20</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-20</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1. 利用HTML5/CSS/JS等各种web技术进行产品界面开发；高度还原
                    UI 设计稿与交互实现，处理各种浏览器兼容问题；<br />
                    2.
                    根据工作安排高效、高质地完成代码编写，确保符合前端代码规范；<br />
                    3. 日常的bug修复，性能调优等工作；<br />
                    4. 参与产品评审，能提出可行的技术方案。<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1、本科及以上学历，计算机相关专业，两年以上工作经验；<br />
                      2、精通HTML/XHTML、CSS，JavaScript等前端开发技术，对JS异步编程有较深刻理解
                      ；<br />
                      3、熟悉jQuery、Vue，对模块化（RequireJS/SeaJS之一）等前端常用类库有一定的了解
                      ；有Web App/Native App内嵌页面开发经验优先；<br />
                      4、具有一定的软件工程意识，了解常用的数据结构和算法设计；了解版本管理，有git使用经验；<br />
                      5、具有良好的沟通能力和团队合作精神、优秀的分析问题和解决问题的能力，能承受较大工作压力。<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 56 }" v-on:click="toggle(56)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">Android开发工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2020-09-20</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2020-09-20</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1、根据业务需求，基于Android平台进行应用程序开发<br />
                    2、参与移动平台软件框架的研究，设计和实现，技术验证和选型工作<br />
                    3、参与移动开发规范的制定，技术文档编写<br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1、全日制本科及以上学历，计算机相关专业毕业，两年及以上Android软件开发经验；<br />
                      2、具有扎实JAVA语言基础，具备良好的编程习惯；<br />
                      3、精通Android基本架构和开发技术，包括SDK、控件、界面、多线程、网络通信、SQLite数据库等；<br />
                      4、熟悉HTTP协议，XML,
                      JSON数据格式；熟悉主流开源组件以及框架优先，如Rxjava，Retrofit<br />
                      5、有人工智能SDK集成经验优先，如语音识别、语音合成、人脸识别、人体跟踪等<br />
                      6、擅长与人沟通，具有良好的团队合作意识，责任心强，能够积极主动的完成项目开发<br />
                      7、有智能硬件研发经验优先，如智能音箱、智能机器人等<br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      HR@Terminusgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 57 }" v-on:click="toggle(57)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">品牌传播策划经理</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2019-08-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2019-08-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p line="QNuO">
                      1、负责公司品牌在重庆地区的推广，创意内容与文案输出，包括但不限于公关稿、产品手册、活动文案等；
                    </p>

                    <p line="t1E8">
                      2、负责公司在重庆地区媒体关系，了解媒体运营流程，高效完成与媒体在多维度上的深度合作；
                    </p>

                    <p line="xD5X">
                      3、负责与设计与创意团队配合，参与创意项目的构思，完成相关平面及视频创意文字的撰写；
                    </p>

                    <p line="NZ4W">
                      4、关注行业发展趋势，了解行业热点话题，定期撰写行业调研报告。
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p line="Tk9l">
                        1、国内重点大学本科及以上学历，中文系、新闻系或广告等相关专业毕业；
                      </p>

                      <p line="Ashc">
                        2、具有良好的英文读写和表达能力，具有互联网企业PR策划背景优先；
                      </p>

                      <p line="VUZ0">
                        3、2-3年工作经验，财经类、科技类新闻媒体、4A或知名广告公司工作经历优先；<br />
                      </p>

                      <p line="PGgu">
                        4、具有扎实的文字功底和较强的PPT撰写水平，有极强的逻辑思维能力和快速学习能力，新闻敏感性强，善于抓住采编和写作重点；
                      </p>

                      <p line="DlpV">
                        5、对互联网、人工智能、物联网行业具有敏锐的洞察力，有一定的行业知识储备和市场分析能力。
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
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 58 }" v-on:click="toggle(58)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">人工智能研究员</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      <style type="text/css">
                        <!--/* Style Definitions */p.MsoNormal, li.MsoNormal, div.MsoNormal{mso-style-unhide:no;mso-style-qformat:yes;mso-style-parent:"";margin:0cm;margin-bottom:.0001pt;mso-pagination:widow-orphan;font-size:12.0pt;font-family:"Times New Roman",serif;mso-fareast-font-family:等线;mso-fareast-theme-font:minor-fareast;}p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph{mso-style-priority:34;mso-style-unhide:no;mso-style-qformat:yes;margin:0cm;margin-bottom:.0001pt;text-align:justify;text-justify:inter-ideograph;text-indent:21.0pt;mso-char-indent-count:2.0;mso-pagination:none;font-size:10.5pt;mso-bidi-font-size:11.0pt;font-family:等线;mso-ascii-font-family:等线;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:等线;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:等线;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;mso-font-kerning:1.0pt;}.MsoChpDefault{mso-style-type:export-only;mso-default-props:yes;font-size:10.5pt;mso-ansi-font-size:10.5pt;mso-bidi-font-size:11.0pt;font-family:等线;mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;} /* Page Definitions */@page{mso-page-border-surround-header:no;mso-page-border-surround-footer:no;}@page WordSection1{size:612.0pt 792.0pt;margin:72.0pt 90.0pt 72.0pt 90.0pt;mso-header-margin:36.0pt;mso-footer-margin:36.0pt;mso-paper-source:0;}div.WordSection1{page:WordSection1;} /* List Definitions */@list l0{mso-list-id:1849828730;mso-list-type:hybrid;mso-list-template-ids:1760722688 -1075266390 67698713 67698715 67698703 67698713 67698715 67698703 67698713 67698715;}@list l0:level1{mso-level-text:%1、;mso-level-tab-stop:none;mso-level-number-position:left;margin-left:18.0pt;text-indent:-18.0pt;}@list l0:level2{mso-level-number-format:alpha-lower;mso-level-text:"%2\)";mso-level-tab-stop:none;mso-level-number-position:left;margin-left:48.0pt;text-indent:-24.0pt;}@list l0:level3{mso-level-number-format:roman-lower;mso-level-tab-stop:none;mso-level-number-position:right;margin-left:72.0pt;text-indent:-24.0pt;}@list l0:level4{mso-level-tab-stop:none;mso-level-number-position:left;margin-left:96.0pt;text-indent:-24.0pt;}@list l0:level5{mso-level-number-format:alpha-lower;mso-level-text:"%5\)";mso-level-tab-stop:none;mso-level-number-position:left;margin-left:120.0pt;text-indent:-24.0pt;}@list l0:level6{mso-level-number-format:roman-lower;mso-level-tab-stop:none;mso-level-number-position:right;margin-left:144.0pt;text-indent:-24.0pt;}@list l0:level7{mso-level-tab-stop:none;mso-level-number-position:left;margin-left:168.0pt;text-indent:-24.0pt;}@list l0:level8{mso-level-number-format:alpha-lower;mso-level-text:"%8\)";mso-level-tab-stop:none;mso-level-number-position:left;margin-left:192.0pt;text-indent:-24.0pt;}@list l0:level9{mso-level-number-format:roman-lower;mso-level-tab-stop:none;mso-level-number-position:right;margin-left:216.0pt;text-indent:-24.0pt;}-->
                      </style>
                    </p>

                    <p>1.在人工智能各领域进行深入研究；</p>

                    <p>2.探索机器学习领域的各种前沿问题，推动领域创新</p>

                    <p>3.针对各种实际应用场景提供最优算法方案</p>

                    <p>4.提出新算法，解决人工智能在实践中面临的问题；</p>

                    <p>5.参与AI领域的世界顶级学者竞争，参与比赛，撰写论文。</p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.有人工智能各领域的相关研究经验，有高水平论文发表者优先；
                      </p>

                      <p>
                        2.关注并了解机器学习算法，自然语言理解，知识图谱，图像与视觉等领域的现状与最新进展，并在其中一个领域有实践经验，并保持对前沿的深刻理解；
                      </p>

                      <p>
                        3.了解深度学习，概率推理，图模型，强化学习，迁移学习，对抗学习等工具的基本原理，并在其中一个领域做到深入理解；
                      </p>

                      <p>4.对现实问题有较强的数学建模能力；</p>

                      <p>
                        5.有较强实践能力，能够实际实现算法、系统，并进行可重复性的实验；
                      </p>

                      <p>
                        6.热爱人工智能领域，具有激情，愿意在此领域进行深入研究；
                      </p>

                      <p>7.对理论的完善与算法效果有极致追求；</p>

                      <p>8.对业界前沿的相关技术嗅觉敏锐；</p>

                      <p>
                        9.逻辑思维和表达能力出色，快速理解，并快速传递信息。
                      </p>

                      <p><strong>加分项：</strong></p>

                      <p>1.熟悉AI理论及其应用；</p>

                      <p>2.有物联网、实时大数据、AI项目经验。</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 59 }" v-on:click="toggle(59)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">高级php工程师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.根据功能需求和设计方案进行开发，完成代码的编写和调试工作；
                    </p>

                    <p>2.参与产品需求分析和系统分析，参与制订技术解决方案；</p>

                    <p>
                      3.参与后台系统架构、性能、安全、扩展等优化的设计和实现；
                    </p>

                    <p>
                      4.需要较强的沟通能力协调配合产品，测试和其他开发人员；
                    </p>

                    <p>5.应用项目架构评审把控，系统高可用性把控；</p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.三年以上PHP开发经验，有大平台高并发开发经验者优先；
                      </p>

                      <p>
                        2.熟悉Web开发，熟练掌握HTTP协议、对TCP/IP有深入了解；
                      </p>

                      <p>3.具备良好的计算机基础，了解常用的数据结构和算法；</p>

                      <p>4.有较强的业务抽象能力，对业务有浓厚的兴趣；</p>

                      <p>5.精通LNMP环境，熟悉MVC模块开发；</p>

                      <p>
                        6.积极、乐观具有较好的团队合作精神、主动性与责任心。
                      </p>

                      <p><strong>加分项：</strong></p>

                      <p>1.有SaaS/PaaS开发经验者优先；</p>

                      <p>2.了解PHP内核和扩展，有扩展开发经验者优先；</p>

                      <p>3.有C/C++、Golang、Java、python等其他语言优先；</p>

                      <p>4.有GitHub有托管项目者优先。</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 60 }" v-on:click="toggle(60)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">高级大数据工程师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>1.基于海量数据，支持业务对数据的分析和使用；</p>

                    <p>
                      2.支持业务处理数据的实时处理，精通各种流式数据处理等；
                    </p>

                    <p>3.基于海量数据开发大数据应用。</p>

                    <p>4.基于海量数据进行BI应用开发。</p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.3-5年以上工作经验，计算机相关专业统招本科及以上学历；&nbsp;
                        &nbsp;
                      </p>

                      <p>
                        2.有扎实的编程能力，有优秀的设计和代码品位，对解决具有挑战性问题充满激情；
                      </p>

                      <p>
                        3.精通至少一门编程语言(java/python)，熟练运用各种常用算法和数据结构，有独立的实现能力；
                      </p>

                      <p>
                        4.熟悉常用的开源组件：Hadoop/Hive/Spark/Storm/Hbase，并了解其特性和使用场景优先；
                      </p>

                      <p>
                        5.熟悉机器学习、数据挖掘、数据分析、分布式计算至少某一方面，有较深的理论研究和实践经验优先；
                      </p>

                      <p>
                        6.优秀的沟通理解能力，能快速理解业务，用数据解读业务；
                      </p>

                      <p>
                        7.数据分析、推荐、机器学习、数据挖掘相关的开发工作优先。
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 61 }" v-on:click="toggle(61)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">大数据架构师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.负责公司大数据方向的整体架构设计，结合公司实际业务情况进行技术选型；
                    </p>

                    <p>
                      2.负责数据平台产品的整体评估、设计、架构及关键模块的开发；
                    </p>

                    <p>
                      3.负责架构优化及系统关键模块的设计开发，协助团队解决开发过程中的技术难题；
                    </p>

                    <p>4.参与数据开发规范制定。</p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>1.统招本科以上学历，至少7年以上实际工作经验；</p>

                      <p>
                        2.负责过大型数据平台或数据仓库设计，具有扎实的大数据和数据仓库的理论功底；精通至少一门编程语言(java/python)，熟练运用各种常用算法和数据结构，有独立的实现能力；
                      </p>

                      <p>
                        3.对Hadoop的大数据体系有深入认识，对Hadoop、Hive、HBase、Spark、Storm、Kafka、ES等有实际应用研发经验，对源码有深入理解；
                      </p>

                      <p>
                        4.很强的学习、分析和解决问题能力，良好的团队意识和协作精神，有较强的内外沟通能力；
                      </p>

                      <p>5.有物联网产品相关的技术经验优先；</p>

                      <p>6.有开源社区代码commit者优先。</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 62 }" v-on:click="toggle(62)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">机器学习工程师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.参与智慧城市，安防数据AI应用以及其他AI相关的机器学习建模和改进；
                    </p>

                    <p>2.研发机器学习模型，解决实际业务问题；</p>

                    <p>3.跟进业界新的研究成果，使用新技术促进业务发展。</p>

                    <p>4.在大数据平台上工程化机器学习成果。</p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.机器学习相关专业研究生以上学历（985，211院校），3年以上工作经验；
                      </p>

                      <p>
                        2.熟悉常用的机器学习理论，熟悉理论推导以及参数优化等过程，有良好的数学基础；
                      </p>

                      <p>
                        3.熟悉linux环境，精通(JAVA/C++/Python)等程序设计语言；
                      </p>

                      <p>
                        4.具有良好的分析问题能力和解决问题能力，对解决具有挑战性问题充满激情。
                      </p>

                      <p><strong>有如下经历者优先</strong></p>

                      <p>
                        1.有深度学习开发或应用经验,&nbsp;对深度学习底层数学理论有深入理解；
                      </p>

                      <p>
                        2.有机器学习工具改进经验，或在顶级会议上发表过高质量论文；
                      </p>

                      <p>3.有机器学习系统架构设计和开发经验；</p>

                      <p>4.有个人机器学习技术博客或在各AI学习社区活跃。</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 63 }" v-on:click="toggle(63)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">算法研究员</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.针对智慧城市、智慧消防等领域设计及研发高性能AI及机器学习算法;
                    </p>

                    <p>
                      2.参与基于算法的原型系统的实现，以及大数据算法平台维护升级及优化;
                    </p>

                    <p>3.为客户产出高价值的技术解决方案以及高水平学术论文;</p>

                    <p>4.参与用户画像，推荐算法和机器学习平台的搭建;</p>

                    <p>5.改进产品的推荐系统，优化用户的使用体验;</p>
                    <br />
                    <br /><br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.国内外知名大学的计算机科学，数学统计等相关专业博士（优秀硕士也可考虑）;
                      </p>

                      <p>
                        2.具备扎实的贝叶斯、模型泛化、深度学习、强化学习等理论知识及相关研究经验;
                      </p>

                      <p>
                        3.有较强的算法实现能力，熟练掌握Python、R、Matlab至少一种语言;
                      </p>

                      <p>
                        4.对机器学习系统有一定了解；熟悉最优化的基础理论，能够将业务问题转化成相关的优化问题并求解，深刻理解并独立实现过相关算法（回归、决策树、分类问题、深度神经网络、图模型，概率统计，最优化方法等）;
                      </p>

                      <p>
                        5.10年以上互联网工作经验，对自然语言处理、图像语音、广告、推荐系统等任何一个领域有实践经验；
                      </p>

                      <p>
                        6.良好的业务理解能力和逻辑思维能力，能够从海量数据中发现关键特征，出色的问题分析及解决能力。
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 64 }" v-on:click="toggle(64)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">区块链研发工程师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.使用Go、Node.js、Python语言完成区块链基础架构开发和DAPP开发；
                    </p>

                    <p>
                      2.结合不同客户的业务场景，在区块链架构上开发、部署、实施、监控审计节点、智能合约；
                    </p>

                    <p>
                      3.了解和研究国内外区块链发展动向，和产品经理一起提供和制定区块链产品解决方向和研发方向；
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.计算机或相关专业，本科及以上学历；对区块链底层技术有基本了解，了解比特币原理；
                      </p>

                      <p>
                        2.具有区块链底层技术开发经验，参与过知名公有区块链项目开发；
                      </p>

                      <p>
                        3.熟悉区块链平台产品，如Hyperledger，Ethereum，corda等；
                      </p>

                      <p>
                        4.熟练使用如GoLang、C++、Python、Java、JavaScript、node.js等开发语言；
                      </p>

                      <p>5.了解并对区块链领域相关技术有较强的求知欲；</p>

                      <p>
                        6.熟悉各种数据结构和算法、有加密数字货币或区块链技术实际实施经验者优先；
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 65 }" v-on:click="toggle(65)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">算法架构师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆 / 深圳</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.带领算法团队，负责智慧城市相关人工智能算法的研发、策略设计和场景落地；
                    </p>

                    <p>2.负责公司AI平台架构设计、体系及其标准制定；</p>

                    <p>3.能够对应用领域做出合理的算法架构和解决方案设计；</p>

                    <p>
                      4.能够持续对算法和模型提出改进思路，跟进最新研究成果；
                    </p>

                    <p>5.组织分析并解决算法研发过程中遇到的问题；</p>

                    <p>
                      6.研究机器学习/自然语言处理/计算机视觉/语音识别等领域的前沿理论并应用于业务、技术创新，构建业务理论体系，发现并攻克存在的技术难点，进行算法改进、架构优化和策略研发；
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.5年以上人工智能算法相关科研或工作经验（含在校研究经历）；
                      </p>

                      <p>2.能够详细描述NLP相关领域重要模型的算法思想；</p>

                      <p>
                        3.熟悉深度学习的进展，精通Caffe、Tensorflow、Torch、Theano、MxNet、CNTK等至少一种深度学习框架；
                      </p>

                      <p>
                        4.具有图像处理，机器学习理论基础；有做过人脸识别，人形识别，行为识别等相关研发的优先考虑；
                      </p>

                      <p>5.有谷歌/微软/百度等商业研究院工作经验者优先。</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      深圳/北京：CV-BJ@tslsmart.com
                      <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 66 }" v-on:click="toggle(66)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">数据科学家</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆 / 深圳</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.利用统计和机器学习方法对数据进行分析，评估用户需求、用户生命周期价值。模型开发和使用贯穿数据的整个生命周期管理；
                    </p>

                    <p>2.建立并部署业界领先的机器学习模型；</p>

                    <p>
                      3.参与数据产品与应用的数据研发，发掘数据商业价值，打造极致体验的数据产品，提高用户增长和风险管理效率和能力；
                    </p>

                    <p>
                      4.在深度学习，加强学习，文本图像处理，语音识别，NLP，统计，AI等领域展开基础研究。
                    </p>
                    <br /><br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.计算机，数学，统计，经济，运筹学或其他量化相关专业的硕士和博士；
                      </p>

                      <p>
                        2.了解常用统计和机器学习算法，包括并不限于LR，GBDT，neural
                        network, deep learning, reinforcement learning, NLP,
                        graph
                        embedding,预测，能够熟练使用R，Python或SAS等软件进行分析和建模；
                      </p>

                      <p>
                        3.有数据挖掘和大型数据处理的经验，需要一定的SQL能力；
                      </p>

                      <p>
                        4.优秀的逻辑思维能力，高度的业务敏感性与数据敏感性，能够适应高强度、快节奏的工作氛围；优秀的书面和口头沟通能力；
                      </p>

                      <p>5.相关风控，策略，分析，建模从业经验优先；</p>

                      <p>6.快速学习和解决问题能力，团队合作协调能力；</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京/深圳：CV-BJ@tslsmart.com
                      <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 67 }" v-on:click="toggle(67)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">算法专家</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆 / 深圳</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>1.负责用户画像，推荐算法和机器学习平台的搭建;</p>

                    <p>
                      2.应用机器学习、自然语言处理等技术，基于海量用户日志和内容，建立用户画像，构建内容质量及内容标签体系；
                    </p>

                    <p>
                      3.以数据挖掘和数据分析为基础，发现新的产品改进点，驱动产品改进，探索新的产品形态；
                    </p>

                    <p>
                      4.跟踪业界最新的机器学习算法和研究趋势，并将其应用于实际的生产环境。
                    </p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>1.数学/物理/计算机相关专业硕士及以上学历，博士优先</p>

                      <p>
                        2.对深度学习理论有深刻理解，对卷积神经网络有良好的理论和实操经验熟悉至少一个主流的深度学习工具，如Tensorflow/Caffe/Pytorch等
                      </p>

                      <p>
                        3.精通数据挖掘项目的流程和思路，精通常用机器学习算法，包括但不限于聚类、分类、LR、RF、SVM、GBDT等
                      </p>

                      <p>
                        4.熟悉自然语言处理、机器学习、模式识别等常用算法，并进行过相关的实践；
                      </p>

                      <p>
                        5.较强的技术攻关能力，能够跟进领域内最新技术研究成果，并结合应用场景快速实验和调优；
                      </p>

                      <p>
                        6.有5年以上推荐、ranking、NLP、文本挖掘等方向的实际工程和项目经验；
                      </p>

                      <p>7.具备良好的团队合作精神和沟通意识。</p>

                      <p><strong>加分项：</strong></p>

                      <p>
                        1.熟悉hadoop、Spark等分布式计算系统，了解hive、kafka、ambari工具者优先；
                      </p>

                      <p>2.有深度学习等机器学习前沿方向的研究经历；</p>

                      <p>
                        3.有较强的产品sense，关注特斯联；有出色的沟通能力，能够独立推动项目进展；
                      </p>

                      <p>4.具有良好的数学基础和数据分析能力，对数据敏感。</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京/深圳：CV-BJ@tslsmart.com
                      <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 68 }" v-on:click="toggle(68)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">智慧城市规划设计师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-08-07</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-08-07</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    
                    <p>1.负责编制大智慧城市项目规划方案；</p>

                    <p>2.负责物联网、大智慧、人工智能产业研究与规划；</p>

                    <p>
                      3.负责为政府提供智慧城市国家政策、行业标准、前沿技术和发展理念等咨询服务；
                    </p>

                    <p>
                      4.结合客户实际情况进行方案落地，编制项目实施方案和技术方案。
                    </p>

                    <p>5.编制项目可行性研究方案。</p>
                    <br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.本科及以上学历，35岁以下，计算机或者规划相关专业；
                      </p>

                      <p>2.有编写智慧城市规划设计文案能力；</p>

                      <p>
                        3.参与过科技类项目投资可行性研究，具备一定的投资分析能力；
                      </p>

                      <p>4.熟悉智慧城市解决方案和智慧城市发展研究；</p>

                      <p>
                        5.熟悉OFFICE、CAD、PPT等办公软件的使用，具备IT设备硬件、网络安全、综合布线、机房建设、多媒体、智能化等技术经验；
                      </p>

                      <p>6.有主编过智慧城市总体解决方案者优先。</p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 69 }" v-on:click="toggle(69)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">Android高级工程师</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆</span>
                </div>
                <div class="col col_date">发布时间 2018-01-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-01-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p> 
                      1.从事安卓系统智能手机应用软件开发；<br />
                      2. 根据产品功能需求设计并完成软件实现和交互流程；<br />
                      3. 主导功能架构设计，系统分析，独立完成编码及单元测试；<br />
                      4. 跟进Android的新技术发展，编写设计开发及实现文档；<br />
                      5. 与其他技术部门进行沟通，控制开发质量和进度。
                    </p>
                    <embed
                      height="0"
                      id="xunlei_com_thunder_helper_plugin_d462f475-c18e-46be-bd10-327458d045bd"
                      type="application/thunder_download_plugin"
                      width="0"
                    /><br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p align="left">
                        1.
                        大学本科及以上学历，计算机或相关专业毕业；三年以上工作经验，至少两年以上Android应用开发工作经验，至少参加过一个完整的大中型商业级安卓系统应用开发项目；<br />
                        2.
                        熟练掌握Java语言，熟悉OOA/OOD设计方法，理解面向对象的设计模式，以及良好的设计文档撰写能力；<br />
                        3.
                        有低功耗蓝牙智能硬件相关APP开发经验（智能手环、手表等）；<br />
                        4. 精通Android
                        UI界面，多线程，对网络通信协议和蓝牙通讯协议有深刻的理解和经验；
                      </p>

                      <p align="left">
                        5.
                        有足够的软件安全意识，掌握数据加密、代码混淆、防破解、性能优化等技术；<br />
                        6.
                        良好的用户需求理解能力、分析能力与清晰的沟通表达能力；
                      </p>

                      <p align="left">
                        7. 了解NFC刷卡，支付系统，拥有非手机安卓系统（Android
                        Box）应用开发经验者优先；
                      </p>

                      <p align="left">
                        8. 沟通能力良好并具备一定项目管理能力。
                      </p>
                      <embed
                        height="0"
                        id="xunlei_com_thunder_helper_plugin_d462f475-c18e-46be-bd10-327458d045bd"
                        type="application/thunder_download_plugin"
                        width="0"
                      /><br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />重庆：CV-CQ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 70 }" v-on:click="toggle(70)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">智能工程销售经理</span>
                </div>
                <div class="col col_area">
                  <span class="text">北京 / 重庆 / 上海 / 武汉</span>
                </div>
                <div class="col col_date">发布时间 2018-01-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-01-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p>
                      1.了解、熟悉合同能源管理、能源站托管等的市场操作模式，<br />
                      对节能改造市场有深入的了解；<br />
                      2。能独立承担节能改造类项目的信息收集，现场勘查，方案梳理、甲方沟通及项目实施的工作；<br />
                      3.熟悉智能化控制、智能家居、楼宇自控等相关智能化知识；<br />
                      4.熟悉本专业各项规范、规程，了解本专业最新发展动态；<br />
                      5.敬业踏实、认真负责、细心严谨，有良好的职业素质和团队精神；<br />
                      6.具有良好的沟通协调能力，分析解决问题能力强；<br />
                      7.能组织协调工程施工。
                    </p>
                    <embed
                      height="0"
                      id="xunlei_com_thunder_helper_plugin_d462f475-c18e-46be-bd10-327458d045bd"
                      type="application/thunder_download_plugin"
                      width="0"
                    /><br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1.电子信息、工程管理类等相关专业本科，5年以上工程类销售工作经验，能接受出差，能吃苦耐劳；<br />
                        2.熟练使用word excel等通用软件；<br />
                        3.有设计单位、施工单位、地产开发行业的工作经验优先，或熟悉以上行业的运作方式；<br />
                      </p>

                      <p>
                        4.工作积极、主动、热情，具备良好的团队协作精神；具有较强的学习能力与问题解决能力，能适应初创企业快速变化的工作环境，能独立解决变化带来的各种新问题。<br />
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com <br />上海：CV-SH@tslsmart.com
                      <br />重庆：CV-CQ@tslsmart.com
                      <br />武汉：CV-WH@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 71 }" v-on:click="toggle(71)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">大数据分析与挖掘工程师</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2018-01-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-01-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    <p></p>
                    1、收集和挖掘各业务线的数据需求，针对不同业务场景、与业务协作提炼出核心指标和分析框架，并呈现、跟踪、分析；<br />
                    2、负责规划和设计大数据的整体架构；<br />
                    3、负责运营数据的监测和跟踪分析，按周期向各业务部门提供数据分析报告，为运营、产品等方向提供数据支持；<br />
                    4、负责对线上数据进行分析总结，最终形成数据报告和结论，定期输出给运营部门；<br />
                    5、对业务相关的数据，做深度挖掘分析，挖掘宏观特征、行为特征、关系特征等，从海量数据提炼核心结果；<br />
                    6、梳理数据需求，并进行相关数据规划，推动技术实现报表及分析的自动化；<br />
                    7、业务部门的其他个性化需求的提供；<br /><br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      <p>
                        1、本科及以上学历，5年以上数据分析工作经验，统计、数学、计算机相关专业优先；<br />
                        2、熟练掌握使用Hadoop生态系统平台及周边的相关工具，掌握Hadoop的管理与优化；<br />
                        3、熟练掌握使用Spark
                        scala，会使用Spark编写语句代码提取数据优先；<br />
                        4、至少精通一种数据分析统计工具，至少熟悉一种数据库语言；<br />
                        5、自我驱动、有owner意识、交付能力强；有较强的团队协作意识和能力；<br />
                        6、有丰富的数据建模经验、掌握常用的数据建模方法、如回归、分类、聚类等；<br />
                        7、良好的数据敏感度、能够及时发现数据异常、并分析数据异常的原因；<br />
                        8、了解大数据相关的基础知识、有数据质量控制意识；对行为分析、关系分析、时间序列分析等有较深入理解。
                      </p>
                      <br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row_hoverable row_openable " v-bind:class="{ row_open: index == 72 }" v-on:click="toggle(72)">
              <div class="col_bg"></div>
              <div class="col_wrap">
                <div class="col col_name">
                  <span class="text">产品营销经理</span>
                </div>
                <div class="col col_area"><span class="text">北京</span></div>
                <div class="col col_date">发布时间 2018-01-30</div>
                <b class="icon_plus"></b>
              </div>
              <div class="row_detail">
                <div class="col_date">2018-01-30</div>
                <div class="col col_left">
                  <div class="content_text">
                    <h3 class="item_title">岗位职责</h3>
                    1.
                    根据公司品牌定位，以及市场相关发展线路，实现开发并制定市场推广执行方案及预算，以快速提升客户认知及品牌影响力。包括但不限于：&nbsp;<br />
                    ❖ 行业竞争监测及分析；&nbsp;<br />
                    ❖ 制定相应产品的宣传计划，监督实施并评估结果；<br />
                    ❖ 跟踪市场行业新闻，市场开发及增长以及法规变化；<br />
                    ❖ 分析数据，定义市场趋势，规划市场策略<br />
                    ❖ 策划及执行产品推广专案、BU业务影响推广等；&nbsp;<br />
                    ❖ 协助 BD
                    开发商务合作资源，发起并参与行业活动，支持潜在业务机会开发；&nbsp;<br />
                    ❖ 客户关系维护及其他市场制作物开发；&nbsp;<br />
                    2.
                    针对特定传播目标策划专项推广案，跟踪和反馈执行情况，可以精准通过各类市场行为准确关联用户，建立有效的客户联系，影响客户，提升品牌竞争力；&nbsp;<br />
                    3.
                    设定产品营销数据，并进入深入分析，对推广策略持续调优，使推广资源得到最大化利用
                    ；&nbsp;<br />
                    4.
                    在外部与客户及合作伙伴对接，部门团队的建设和管理，支持市场职能在内部与各BU、产品部、
                    销售部门的对接<br />
                    5.
                    负责事业部在区域内的产品的项目销售，针对重点客户、重点行业、重点区域进行拓展（销售职能，备选）。<embed
                      height="0"
                      id="xunlei_com_thunder_helper_plugin_d462f475-c18e-46be-bd10-327458d045bd"
                      type="application/thunder_download_plugin"
                      width="0"
                    /><br /><br />
                  </div>
                </div>
                <div class="col col_right content_text">
                  <div class="content_text">
                    <div>
                      <h3 class="item_title">任职资格</h3>
                      1. 八年以上市场营销工作经验，至少 4 年以上 B2B
                      业务类公司或在知名营销公司负责 B2B
                      客户市场推广和运营的经验；&nbsp;<br />
                      2.
                      具备整体的市场营销及品牌知识体系，熟悉事件营销、业务推广；&nbsp;<br />
                      3. 熟悉高科技企业 B2B
                      服务类（如物联相关行业，安防行业）公司市场推广模式，对市场营销推广有深刻的认知，有良好的市场感知能力，能敏锐地把握市场动态、市场方向的能力；&nbsp;<br />
                      4.
                      熟悉市场营销推广的实践，对线上下线、直营分销推广有深刻理解有实际策划成功案例，具有一定市场资源；&nbsp;<br />
                      5.
                      分析问题、解决问题能力强，有优秀的资源整合能力和项目推动能力，较好的学习能力；<br />
                      6. 如有营销及BD开拓背景的最佳；<br />
                      7. 本科及以上学历；<br />
                      8. 思路清晰，善于沟通，抗压能力强，能长期出差。<embed
                        height="0"
                        id="xunlei_com_thunder_helper_plugin_d462f475-c18e-46be-bd10-327458d045bd"
                        type="application/thunder_download_plugin"
                        width="0"
                      /><br /><br />
                    </div>
                    <div>
                      <h3 class="item_title">联系方式</h3>
                      北京：CV-BJ@tslsmart.com
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
    background-color: #000;
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
    background: #00f3be;
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