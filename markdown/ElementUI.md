# element-ui
> 用于 Vue 项目中的框架实践

### 组件
+ 日期选择器
  + *单个日期*
  ```javascript
  <el-date-picker
    v-model="date-value"
    type="date"
    format="yyyy/MM/dd"
    placeholder="请选择时间"
  />
  ```

  + *区间日期*
  ```javascript
  <el-date-picker
    v-model="date-value-array"
    type="daterange"
    format="yyyy/MM/dd"
    start-placeholder="开始时间"
    range-separator="至"
    end-placeholder="结束时间"
  />
  ```