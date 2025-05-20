<template>
  <div class="page-container">
    <div class="table-container">
      <h2 class="title">10 x 10 数据表格</h2>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :cell-style="cellStyle"
        :header-cell-style="headerCellStyle"
        :row-style="rowStyle"
        highlight-current-row
      >
        <el-table-column
          v-for="(col, index) in columns"
          :key="index"
          :prop="col.prop"
          :label="col.label"
          min-width="100"
          align="center"
        >
          <template #default="scope">
            <span class="cell-content">{{ scope.row[col.prop] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TableDemo',
  setup() {
    const columns = Array.from({ length: 10 }, (_, i) => ({
      prop: `col${i + 1}`,
      label: `列 ${i + 1}`
    }))

    const tableData = Array.from({ length: 10 }, (_, rowIndex) => {
      const row: Record<string, number> = {}
      columns.forEach((col, colIndex) => {
        row[col.prop] = rowIndex * 10 + colIndex + 1
      })
      return row
    })

    const cellStyle = {
      textAlign: 'center',
      padding: '16px 0',
      fontSize: '15px',
      color: '#606266',
      transition: 'all 0.3s ease'
    }

    const headerCellStyle = {
      background: 'linear-gradient(135deg, #409EFF 0%, #36D1DC 100%)',
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '16px 0',
      fontSize: '16px',
      borderBottom: '2px solid #409EFF'
    }

    const rowStyle = ({ rowIndex }: { rowIndex: number }) => {
      return {
        backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#fafafa',
        transition: 'all 0.3s ease'
      }
    }

    return {
      columns,
      tableData,
      cellStyle,
      headerCellStyle,
      rowStyle
    }
  }
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  padding: 40px 20px;
}

.table-container {
  padding: 30px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  max-width: 1200px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.title {
  text-align: center;
  color: #303133;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  position: relative;
  padding-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #409EFF 0%, #36D1DC 100%);
  border-radius: 2px;
}

:deep(.el-table) {
  border-radius: 12px;
  overflow: hidden;
  width: 100% !important;
  border: none !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

:deep(.el-table__header) {
  background: linear-gradient(135deg, #409EFF 0%, #36D1DC 100%);
}

:deep(.el-table__row:hover) {
  background-color: #ecf5ff !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.el-table__cell) {
  padding: 12px 0;
  border-color: #ebeef5;
}

:deep(.el-table__body) {
  width: 100% !important;
}

.cell-content {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: #f5f7fa;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

:deep(.el-table__row:hover) .cell-content {
  background: linear-gradient(135deg, #ecf5ff 0%, #e6f7ff 100%);
  color: #409EFF;
  transform: scale(1.05);
}

:deep(.el-table--border) {
  border: none !important;
}

:deep(.el-table--border .el-table__cell) {
  border-right: 1px solid #ebeef5;
}

:deep(.el-table--border .el-table__cell:last-child) {
  border-right: none;
}

@media (max-width: 768px) {
  .page-container {
    padding: 20px 10px;
  }
  
  .table-container {
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
  }
}
</style> 