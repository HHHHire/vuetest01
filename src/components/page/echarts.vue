<template>
    <section class="chart-container">
        <el-row>
            <el-col :span="12">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
            
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartColumn: null,
                chartBar: null,
                chartLine: null,
                chartPie: null
            }
        },

        methods: {
            drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                this.chartColumn.setOption({
                  title: { text: 'NBA各队夺冠次数' },
                  tooltip: {},
                  xAxis: {
                      data: ["湖人", "勇士", "马刺", "火箭", "凯尔特人", "公牛"]
                  },
                  yAxis: {},
                  series: [{
                      name: '夺冠次数',
                      type: 'bar',
                      data: [16, 6, 5, 10, 17, 6]
                    }]
                });
            },
            drawBarChart() {
                this.chartBar = echarts.init(document.getElementById('chartBar'));
                this.chartBar.setOption({
                    title:{ text: '2014-18年各时段票房',
                            subtext: '（亿）'
                    },
                    tooltip : {
                        
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['非黄金时段', '黄金时段']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: ['2014','2015','2016','2017','2018']
                    },
                    series: [
                        {
                            name: '非黄金时段',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [181, 273, 284, 346, 379]
                        },
                        {
                            name: '黄金时段',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [112, 164, 170, 211, 226]
                        },
                    ]
                });
            },
            drawLineChart() {
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                this.chartLine.setOption({
                    title: {
                        text: '春节七日票房',
                        subtext: '（万）'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['流浪地球', '飞驰人生', '疯狂的外星人']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['初一', '初二', '初三', '初四', '初五', '周初六', '初七']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '流浪地球',
                            type: 'line',
                            stack: '总量',
                            data: [18871, 25855, 34011, 38419, 41653, 41680, 34066]
                        },
                        {
                            name: '飞驰人生',
                            type: 'line',
                            stack: '总量',
                            data: [31948, 18988, 16433, 13738, 12534, 11018, 8506]
                        },
                        {
                            name: '疯狂的外星人',
                            type: 'line',
                            stack: '总量',
                            data: [40791, 28524, 23856, 19847, 17466, 14876, 11047]
                        }
                    ]
                });
            },
            drawPieChart() {
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {
                        text: '单日票房',
                        subtext: '（万）',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['流浪地球', '疯狂的外星人','廉政风云', '飞驰人生', '新喜剧之王', '熊出没·原始时代']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 23221, name: '流浪地球' },
                                { value: 6507, name: '疯狂的外星人' },
                                 { value: 150, name: '廉政风云' },
                                { value: 5996, name: '飞驰人生' },
                                { value: 676, name: '新喜剧之王' },
                               
                                { value: 2444, name: '熊出没·原始时代' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawColumnChart()
                this.drawBarChart()
                this.drawLineChart()
                this.drawPieChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .el-col {
        padding: 30px 20px;
    }
</style>
