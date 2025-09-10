import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// 价值数据
const valueData = [
  { name: '提高电力供应可靠性', value: 35 },
  { name: '减少停电时间', value: 25 },
  { name: '降低检修成本', value: 20 },
  { name: '提升智能化水平', value: 20 },
];

// 颜色配置
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // 专利数据
  const patentData = [
    { type: '发明专利', count: 8 },
    { type: '实用新型专利', count: 2 },
    { type: '软件著作权', count: 7 },
  ];

export default function ProductValue() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">产品价值</h2>
          <p className="text-lg text-gray-600">
            本装置可促进电力设备数字化、智能化发展，提升电力企业对电力系统核心设备的信息化管理水平
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <i class="fa-solid fa-chart-pie text-blue-600 mr-3"></i>
              核心价值分析
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={valueData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {valueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div>
                <ul className="space-y-4">
                  {valueData.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="text-gray-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700 italic">
                       "该装置有效提高了变压器、同步电机绕组状态监测智能化和数字化程度，助力'双碳'战略目标的实现。——脉诊智辩（重庆）电气设备修理有限责任公司"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i class="fa-solid fa-shield text-blue-400 mr-3"></i>
              知识产权与技术实力
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {patentData.map((item, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-5">
                    <div className="text-4xl font-bold text-blue-400 mb-1">{item.count}</div>
                    <div className="text-gray-300 text-sm">{item.type}</div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">技术优势</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                    <span className="text-gray-300">识别灵敏度提高至98.1%</span>
                  </li>
                  <li className="flex items-start">
                    <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                    <span className="text-gray-300">诊断精度提高至99.01%</span>
                  </li>
                  <li className="flex items-start">
                    <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                    <span className="text-gray-300">强电磁环境下采样频率可达40 kHz</span>
                  </li>
                  <li className="flex items-start">
                    <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                    <span className="text-gray-300">无需改装设备结构，安全性高</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
         <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900">资质认证</h3>
              <p className="text-gray-600 mt-2">公司拥有完善的资质认证和技术实力，确保产品质量和服务水平</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/AAD1D6EAA7C95646CAF1365C98D460B3_20250815165121.jpg" 
                    alt="营业执照" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">营业执照</h4>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/QQ截图20250815165012_20250815165147.png" 
                    alt="科技查新报告" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">科技查新报告</h4>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/校准证书_画板 1_20250815165202.jpg" 
                    alt="校准证书" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">校准证书</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 flex justify-center">
                <i class="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">保障能源安全</h3>
              <p className="text-blue-100">提高电力供应的可靠性，减少用户停电时间，避免因停电检修带来的经济损失</p>
            </div>
            
            <div className="p-4 border-x border-blue-500">
              <div className="text-4xl font-bold mb-2 flex justify-center">
                <i class="fa-solid fa-microchip"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">推动数字化转型</h3>
              <p className="text-blue-100">促进电力设备数字化、智能化发展，提升电力企业信息化管理水平</p>
            </div>
            
            <div className="p-4">
              <div className="text-4xl font-bold mb-2 flex justify-center">
                <i class="fa-solid fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">合作共赢</h3>
              <p className="text-blue-100">与多家行业领先企业达成初步合作意向，共同推动电力行业技术进步</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}