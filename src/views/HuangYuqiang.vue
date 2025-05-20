<template>
  <div class="page-container">
    <div class="content-container">
      <h1 class="title">致敬黄育强</h1>
      <div class="subtitle">一位伟大的导师和引路人</div>
      
      <div class="card-container">
        <div class="card">
          <h2>卓越成就</h2>
          <p>黄育强老师以其卓越的专业能力和不懈的追求，在学术领域取得了令人瞩目的成就。他的研究成果不仅推动了学科发展，更为后辈树立了榜样。</p>
        </div>

        <div class="card">
          <h2>育人精神</h2>
          <p>作为一位杰出的教育工作者，黄育强老师始终秉持"教书育人"的理念，以渊博的学识和无私的奉献精神，培养了一代又一代的优秀人才。</p>
        </div>

        <div class="card">
          <h2>人格魅力</h2>
          <p>黄育强老师以其高尚的人格魅力和严谨的治学态度，赢得了广泛的尊重和赞誉。他的言传身教，深深影响着每一位学生。</p>
        </div>
      </div>

      <div class="achievement-section">
        <h2 class="section-title">游戏与技术成就</h2>
        <div class="achievement-cards">
          <div class="achievement-card">
            <h3>CS:GO 大师</h3>
            <ul>
              <li>AWP 一枪爆头，精准如神</li>
              <li>战术指挥，运筹帷幄</li>
              <li>压枪技术，稳如泰山</li>
              <li>预瞄点位，炉火纯青</li>
            </ul>
          </div>

          <div class="achievement-card">
            <h3>红客技术</h3>
            <ul>
              <li>渗透测试，无懈可击</li>
              <li>漏洞挖掘，独具慧眼</li>
              <li>安全防护，固若金汤</li>
              <li>代码审计，明察秋毫</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="quote">
        "学高为师，身正为范" —— 黄育强
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HuangYuqiang'
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  padding: 40px 20px;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.title {
  text-align: center;
  color: #303133;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  text-align: center;
  color: #606266;
  font-size: 20px;
  margin-bottom: 40px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card h2 {
  color: #409EFF;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 600;
}

.card p {
  color: #606266;
  line-height: 1.8;
  font-size: 16px;
}

.achievement-section {
  margin: 40px 0;
}

.section-title {
  text-align: center;
  color: #303133;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 600;
}

.achievement-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.achievement-card {
  background: linear-gradient(135deg, #409EFF 0%, #36D1DC 100%);
  padding: 25px;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.achievement-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
}

.achievement-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievement-card li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}

.achievement-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.8);
}

.quote {
  text-align: center;
  font-size: 24px;
  color: #409EFF;
  font-style: italic;
  margin-top: 40px;
  padding: 20px;
  border-top: 2px solid #ebeef5;
  font-weight: 500;
}

@media (max-width: 768px) {
  .content-container {
    padding: 20px;
  }

  .title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 18px;
  }

  .card {
    padding: 20px;
  }

  .quote {
    font-size: 20px;
  }
}
</style> 