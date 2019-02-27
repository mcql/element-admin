<template>
  <div>
    <h5>Test-Table</h5>
    <el-table :data='tableData' style='width: 95%;margin:0 auto;' border highlight-current-row>
      <el-table-column prop='name' label='参数' align='center'></el-table-column>
      <el-table-column prop='introduct' label='说明' align='center'></el-table-column>
      <el-table-column prop='type' label='类型' align='center'></el-table-column>
      <el-table-column prop='choose' label='可选值' align='center'></el-table-column>
      <el-table-column prop='recommend' label='默认值' align='center'></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: 'mode',
          introduct: '模式',
          type: 'string',
          choose: 'horizontal / vertical',
          recommend: 'vertical'
        },
        {
          name: 'collapse',
          introduct: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
          type: 'boolean',
          choose: '—',
          recommend: 'false'
        },
        {
          name: 'background-color',
          introduct: '菜单的背景色（仅支持 hex 格式）',
          type: 'string',
          choose: '—',
          recommend: '#ffffff'
        },
        {
          name: 'text-color',
          introduct: '菜单的文字颜色（仅支持 hex 格式）',
          type: 'string',
          choose: '—',
          recommend: '#303133'
        },
        {
          name: 'active-text-color',
          introduct: '当前激活菜单的文字颜色（仅支持 hex 格式）',
          type: 'string',
          choose: '—',
          recommend: '#409EFF'
        },
        {
          name: 'default-active',
          introduct: '当前激活菜单的 index',
          type: 'string',
          choose: '—',
          recommend: '—'
        },
        {
          name: 'default-openeds',
          introduct: '当前打开的 sub-menu 的 index 的数组',
          type: 'Array',
          choose: '—',
          recommend: '—'
        },
        {
          name: 'unique-opened',
          introduct: '是否只保持一个子菜单的展开',
          type: 'boolean',
          choose: '—',
          recommend: 'false'
        },
        {
          name: 'menu-trigger',
          introduct: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
          type: 'string',
          choose: 'hover / click',
          recommend: 'hover'
        },
        {
          name: 'router',
          introduct:
            '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
          type: 'boolean',
          choose: '—',
          recommend: 'false'
        },
        {
          name: 'collapse-transition',
          introduct: '是否开启折叠动画',
          type: 'boolean',
          choose: '—',
          recommend: 'true'
        }
      ],
      tableData1: [
        {
          name: 'open',
          introduct: '展开指定的 sub-menu',
          choose: 'index: 需要打开的 sub-menu 的 index'
        }, {
          name: 'close',
          introduct: '收起指定的 sub-menu',
          choose: 'index: 需要收起的 sub-menu 的 index'
        }
      ]
    }
  }
}
</script>

<style scoped>
h5 {
  font-size: 26px;
  line-height: 60px;
  padding: 10px 30px;
  box-sizing: border-box;
}
</style>
