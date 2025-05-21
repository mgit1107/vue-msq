<template>
  <div class="train-ticket">
    <div class="ticket-container">
      <div class="ticket-header">
        <h2>火车票预订</h2>
        <div class="ticket-type">
          <button 
            :class="{ active: ticketType === 'single' }" 
            @click="ticketType = 'single'"
          >单程</button>
          <button 
            :class="{ active: ticketType === 'round' }" 
            @click="ticketType = 'round'"
          >往返</button>
        </div>
      </div>

      <div class="search-form">
        <div class="station-input">
          <div class="from-station">
            <input 
              type="text" 
              v-model="fromStation" 
              placeholder="出发站"
              @focus="showStationList = true"
            >
            <div class="station-list" v-if="showStationList">
              <div class="station-item" v-for="station in stations" :key="station" @click="selectStation(station)">
                {{ station }}
              </div>
            </div>
          </div>
          <div class="switch-station" @click="switchStations">
            <span>⇄</span>
          </div>
          <div class="to-station">
            <input 
              type="text" 
              v-model="toStation" 
              placeholder="到达站"
              @focus="showStationList = true"
            >
            <div class="station-list" v-if="showStationList">
              <div class="station-item" v-for="station in stations" :key="station" @click="selectStation(station)">
                {{ station }}
              </div>
            </div>
          </div>
        </div>

        <div class="date-selection">
          <div class="depart-date">
            <label>出发日期</label>
            <div class="date-picker" @click="showDatePicker('depart')">
              <div class="date-display">
                <span class="date-value">{{ formatDate(departDate) || '请选择日期' }}</span>
                <span class="date-icon">▼</span>
              </div>
              <div class="quick-dates">
                <span 
                  v-for="date in quickDates" 
                  :key="date.value"
                  @click.stop="departDate = date.value"
                  :class="{ active: departDate === date.value }"
                >
                  {{ date.label }}
                </span>
              </div>
            </div>
          </div>
          <div class="return-date" v-if="ticketType === 'round'">
            <label>返程日期</label>
            <div class="date-picker" @click="showDatePicker('return')">
              <div class="date-display">
                <span class="date-value">{{ formatDate(returnDate) || '请选择日期' }}</span>
                <span class="date-icon">▼</span>
              </div>
              <div class="quick-dates">
                <span 
                  v-for="date in quickDates" 
                  :key="date.value"
                  @click.stop="returnDate = date.value"
                  :class="{ active: returnDate === date.value }"
                >
                  {{ date.label }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="passenger-selection">
          <div class="passenger-type">
            <label>乘客类型</label>
            <select v-model="passengerType">
              <option value="adult">成人</option>
              <option value="student">学生</option>
              <option value="child">儿童</option>
            </select>
          </div>
          <div class="seat-type">
            <label>座位类型</label>
            <select v-model="seatType">
              <option value="all">全部</option>
              <option value="business">商务座</option>
              <option value="first">一等座</option>
              <option value="second">二等座</option>
              <option value="hard">硬座</option>
              <option value="soft">软座</option>
            </select>
          </div>
        </div>

        <div class="search-button">
          <button @click="searchTickets" class="search-btn">查询</button>
        </div>
      </div>

      <div class="ticket-results" v-if="showResults">
        <div class="result-header">
          <div class="train-info">车次</div>
          <div class="station-info">出发站/到达站</div>
          <div class="time-info">出发时间/到达时间</div>
          <div class="duration">历时</div>
          <div class="price-info">票价</div>
          <div class="action">操作</div>
        </div>
        <div class="result-item" v-for="ticket in tickets" :key="ticket.trainNo">
          <div class="train-info">
            <div class="train-no">{{ ticket.trainNo }}</div>
            <div class="train-type">{{ ticket.trainType }}</div>
          </div>
          <div class="station-info">
            <div class="from-station">{{ ticket.fromStation }}</div>
            <div class="to-station">{{ ticket.toStation }}</div>
          </div>
          <div class="time-info">
            <div class="depart-time">{{ ticket.departTime }}</div>
            <div class="arrive-time">{{ ticket.arriveTime }}</div>
          </div>
          <div class="duration">{{ ticket.duration }}</div>
          <div class="price-info">
            <div class="price-item" v-for="(price, type) in ticket.prices" :key="type">
              <span class="seat-type">{{ type }}</span>
              <span class="price-value">¥{{ price }}</span>
              <span class="seat-count" v-if="type === '二等座'">有票</span>
            </div>
          </div>
          <div class="action">
            <button class="book-btn" @click="bookTicket(ticket)">预订</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { searchTrainTickets, bookTrainTicket } from '@/api/trainTicket'

const ticketType = ref('single')
const fromStation = ref('')
const toStation = ref('')
const departDate = ref('')
const returnDate = ref('')
const passengerType = ref('adult')
const seatType = ref('all')
const showResults = ref(false)
const showStationList = ref(false)

const stations = [
  '北京', '上海', '广州', '深圳', '杭州',
  '南京', '武汉', '成都', '重庆', '西安'
]

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const maxDate = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() + 15) // 最多可预订15天后的车票
  return date.toISOString().split('T')[0]
})

const quickDates = computed(() => {
  const dates = []
  const today = new Date()
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push({
      label: i === 0 ? '今天' : i === 1 ? '明天' : `${i}天后`,
      value: date.toISOString().split('T')[0]
    })
  }
  
  return dates
})

const formatDate = (date: string) => {
  if (!date) return ''
  const d = new Date(date)
  const month = d.getMonth() + 1
  const day = d.getDate()
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const weekday = weekdays[d.getDay()]
  return `${month}月${day}日 ${weekday}`
}

const showDatePicker = (type: 'depart' | 'return') => {
  const input = document.createElement('input')
  input.type = 'date'
  input.min = type === 'return' ? departDate.value || minDate.value : minDate.value
  input.max = maxDate.value
  
  if (type === 'depart' && departDate.value) {
    input.value = departDate.value
  } else if (type === 'return' && returnDate.value) {
    input.value = returnDate.value
  }
  
  input.onchange = (e) => {
    const target = e.target as HTMLInputElement
    if (type === 'depart') {
      departDate.value = target.value
    } else {
      returnDate.value = target.value
    }
  }
  
  input.click()
}

const tickets = ref([
  {
    trainNo: 'G1234',
    trainType: '高铁',
    fromStation: '北京南',
    toStation: '上海虹桥',
    departTime: '08:00',
    arriveTime: '13:30',
    duration: '5小时30分',
    prices: {
      '商务座': 1748,
      '一等座': 933,
      '二等座': 553
    }
  },
  {
    trainNo: 'G1236',
    trainType: '高铁',
    fromStation: '北京南',
    toStation: '上海虹桥',
    departTime: '09:00',
    arriveTime: '14:30',
    duration: '5小时30分',
    prices: {
      '商务座': 1748,
      '一等座': 933,
      '二等座': 553
    }
  }
])

const switchStations = () => {
  const temp = fromStation.value
  fromStation.value = toStation.value
  toStation.value = temp
}

const selectStation = (station: string) => {
  if (!fromStation.value) {
    fromStation.value = station
  } else if (!toStation.value) {
    toStation.value = station
  }
  showStationList.value = false
}

const searchTickets = async () => {
  try {
    const response = await searchTrainTickets({
      fromStation: fromStation.value,
      toStation: toStation.value,
      departDate: departDate.value,
      returnDate: returnDate.value,
      passengerType: passengerType.value,
      seatType: seatType.value
    })
    tickets.value = response.data
    showResults.value = true
  } catch (error) {
    console.error('查询车票失败:', error)
    // 这里可以添加错误提示
  }
}

const bookTicket = async (ticket: any) => {
  try {
    await bookTrainTicket({
      trainNo: ticket.trainNo,
      seatType: '二等座', // 这里可以根据实际选择修改
      passengerInfo: {
        name: '张三', // 这里需要从用户信息中获取
        idCard: '123456789012345678',
        phone: '13800138000'
      }
    })
    // 预订成功后的处理
    console.log('预订成功')
  } catch (error) {
    console.error('预订失败:', error)
    // 这里可以添加错误提示
  }
}
</script>

<style scoped>
.train-ticket {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
}

.ticket-container {
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 24px;
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 16px;
}

.ticket-header h2 {
  color: #333;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
}

.ticket-type button {
  padding: 6px 20px;
  border: 1px solid #d9d9d9;
  background: white;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.ticket-type button.active {
  background: #f5f5f5;
  color: #333;
  border-color: #d9d9d9;
}

.search-form {
  display: grid;
  gap: 20px;
  margin-bottom: 24px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
}

.station-input {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  padding: 16px;
  border-radius: 4px;
}

.from-station, .to-station {
  flex: 1;
  position: relative;
}

.station-input input {
  width: 100%;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
}

.station-input input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.switch-station {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  color: #666;
}

.switch-station:hover {
  background: #e6f7ff;
  color: #1890ff;
}

.date-selection, .passenger-selection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  background: white;
  padding: 16px;
  border-radius: 4px;
}

.date-picker {
  position: relative;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 8px 12px;
  transition: all 0.3s;
}

.date-picker:hover {
  border-color: #1890ff;
}

.date-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-value {
  color: #333;
  font-size: 14px;
}

.date-icon {
  color: #999;
  font-size: 12px;
}

.quick-dates {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.quick-dates span {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
  color: #666;
}

.quick-dates span:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.quick-dates span.active {
  background: #e6f7ff;
  color: #1890ff;
  border-color: #1890ff;
}

.passenger-selection select {
  width: 100%;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}

.search-button {
  text-align: center;
  margin-top: 20px;
}

.search-btn {
  padding: 12px 48px;
  background: #f5a623;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.search-btn:hover {
  background: #f7b84b;
}

.ticket-results {
  margin-top: 24px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
}

.result-header {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 2fr 1fr;
  padding: 12px 16px;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.result-item {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 2fr 1fr;
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
  align-items: center;
  transition: all 0.3s;
}

.result-item:hover {
  background: #fafafa;
}

.train-no {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.train-type {
  color: #666;
  font-size: 12px;
  margin-top: 4px;
}

.price-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.price-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.seat-type {
  color: #666;
  font-size: 12px;
}

.price-value {
  color: #f5a623;
  font-weight: 500;
}

.seat-count {
  color: #52c41a;
  font-size: 12px;
}

.book-btn {
  padding: 6px 16px;
  background: #f5a623;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
}

.book-btn:hover {
  background: #f7b84b;
}

.station-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.station-item {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.station-item:hover {
  background: #f5f5f5;
}

@media (max-width: 768px) {
  .result-header, .result-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .station-input {
    flex-direction: column;
  }
  
  .switch-station {
    transform: rotate(90deg);
  }
}
</style>