<template>
  <div class="page-container">
    <div class="content-container">
      <div class="header">
        <h1 class="name">{{ personalInfo.name }}</h1>
        <div class="title">{{ personalInfo.title }}</div>
        <div class="contact-info">
          <span>📧 {{ personalInfo.email }}</span>
          <span>📱 {{ personalInfo.phone }}</span>
          <span>📍 {{ personalInfo.location }}</span>
        </div>
      </div>

      <div class="section">
        <h2>专业技能</h2>
        <div class="skills-container">
          <div v-for="(category, index) in skills" :key="index" class="skill-category">
            <h3>{{ category.title }}</h3>
            <ul>
              <li v-for="(skill, skillIndex) in category.items" :key="skillIndex">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>工作经历</h2>
        <div v-for="(job, index) in workExperience" :key="index" class="experience-item">
          <div class="company-info">
            <h3>{{ job.title }}</h3>
            <div class="company">{{ job.company }} | {{ job.period }}</div>
          </div>
          <ul>
            <li v-for="(duty, dutyIndex) in job.duties" :key="dutyIndex">{{ duty }}</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <h2>教育背景</h2>
        <div class="education">
          <h3>{{ education.major }}</h3>
          <div class="school">{{ education.school }} | {{ education.period }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const personalInfo = ref({
  name: '张明',
  title: 'Java全栈开发工程师',
  email: 'zhangming@example.com',
  phone: '138-xxxx-xxxx',
  location: '北京市朝阳区'
})

const skills = ref([
  {
    title: '后端开发',
    items: [
      '精通Java核心编程，熟悉JVM调优',
      '熟练使用Spring Boot、Spring Cloud微服务架构',
      '深入理解MySQL、Redis等数据库的使用和优化',
      '熟悉消息队列（RabbitMQ、Kafka）的使用'
    ]
  },
  {
    title: '前端开发',
    items: [
      '熟练使用Vue.js、React等前端框架',
      '掌握HTML5、CSS3、JavaScript(ES6+)',
      '熟悉Webpack、Vite等构建工具',
      '了解TypeScript和前端工程化'
    ]
  },
  {
    title: '开发工具 & 其他',
    items: [
      '熟练使用Git、Maven、Jenkins等工具',
      '熟悉Docker容器化部署和Kubernetes',
      '了解CI/CD流程和DevOps实践',
      '良好的代码风格和文档编写能力'
    ]
  }
])

const workExperience = ref([
  {
    title: '高级Java开发工程师',
    company: '某科技有限公司',
    period: '2021.07 - 至今',
    duties: [
      '负责公司核心业务系统的架构设计和开发，使用Spring Cloud微服务架构重构原有系统',
      '优化系统性能，通过JVM调优和数据库优化，使系统响应时间提升50%',
      '设计并实现分布式缓存方案，使用Redis集群提升系统并发处理能力',
      '带领5人开发团队，制定技术方案，把控项目进度和质量'
    ]
  },
  {
    title: 'Java全栈开发工程师',
    company: '某网络科技有限公司',
    period: '2019.03 - 2021.06',
    duties: [
      '参与电商平台的前后端开发，负责订单系统和支付模块的实现',
      '使用Vue.js开发管理后台，实现数据可视化展示和业务管理功能',
      '设计并实现基于RabbitMQ的异步消息处理系统，提高系统可靠性',
      '编写技术文档，参与代码审查，确保代码质量和可维护性'
    ]
  },
  {
    title: 'Java开发工程师',
    company: '某信息技术有限公司',
    period: '2018.07 - 2019.02',
    duties: [
      '参与企业OA系统的开发，负责工作流引擎模块的实现',
      '使用Spring Boot开发RESTful API，实现前后端分离架构',
      '优化数据库查询性能，编写存储过程和触发器',
      '参与系统测试和部署，解决线上问题'
    ]
  }
])

const education = ref({
  major: '计算机科学与技术 本科',
  school: '某知名大学',
  period: '2014.09 - 2018.06'
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  padding: 40px 20px;
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ebeef5;
}

.name {
  font-size: 36px;
  color: #303133;
  margin-bottom: 10px;
}

.title {
  font-size: 24px;
  color: #409EFF;
  margin-bottom: 15px;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #606266;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  color: #303133;
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ebeef5;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-category {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.skill-category h3 {
  color: #409EFF;
  font-size: 20px;
  margin-bottom: 15px;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  color: #606266;
}

.skill-category li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #409EFF;
}

.experience-item {
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.company-info {
  margin-bottom: 15px;
}

.company-info h3 {
  color: #303133;
  font-size: 20px;
  margin-bottom: 5px;
}

.company {
  color: #409EFF;
  font-size: 16px;
}

.experience-item ul {
  list-style: none;
  padding: 0;
}

.experience-item li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  color: #606266;
  line-height: 1.6;
}

.experience-item li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #409EFF;
}

.education {
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.education h3 {
  color: #303133;
  font-size: 20px;
  margin-bottom: 5px;
}

.school {
  color: #409EFF;
  font-size: 16px;
}

@media (max-width: 768px) {
  .content-container {
    padding: 20px;
  }

  .name {
    font-size: 28px;
  }

  .title {
    font-size: 20px;
  }

  .contact-info {
    flex-direction: column;
    gap: 10px;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }
}
</style> 