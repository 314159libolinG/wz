import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// 技术参数接口定义
interface TechnicalSpec {
  id: number;
  name: string;
  value: string;
  unit?: string;
  description?: string;
  importance?: 'high' | 'medium' | 'low';
}

// 技术参数数据
const technicalSpecs: TechnicalSpec[] = [
  { id: 1, name: '脉冲电压幅值', value: '0~4', unit: 'kV', importance: 'high' },
  { id: 2, name: '脉冲宽度', value: '最小1', unit: 'ns', importance: 'high' },
  { id: 3, name: '脉冲重复频率', value: '1-10000', unit: 'Hz', importance: 'high' },
  { id: 4, name: '采样频率', value: '40', unit: 'kHz', importance: 'high' },
  { id: 5, name: '多通道采样时延', value: '<1', unit: 'μs', importance: 'medium' },
  { id: 6, name: '采样数据存储', value: '1', unit: 'T', importance: 'medium' },
  { id: 7, name: '诊断精度', value: '99.01', unit: '%', importance: 'high' },
  { id: 8, name: '网络通讯', value: '5G', importance: 'medium' },
  { id: 9, name: '智能功能', value: '自动识别、远程报警', importance: 'medium' },
];

export default function TechnicalSpecs() {
  return (
    <section id="specs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">主要技术指标</h2>
          <p className="text-lg text-gray-600">
            装置采用先进技术设计，具备高精度检测能力与智能化功能，满足电力系统对核心设备监测的严格要求
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSpecs.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300",
                spec.importance === 'high' ? 'border-l-4 border-blue-600' : 'border-l-4 border-gray-300'
              )}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{spec.name}</h3>
                {spec.importance === 'high' && (
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    核心指标
                  </span>
                )}
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-gray-900">{spec.value}</span>
                {spec.unit && <span className="ml-1 text-xl text-gray-700">{spec.unit}</span>}
              </div>
              {spec.description && (
                <p className="text-sm text-gray-600 mt-2">{spec.description}</p>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8 md:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <i class="fa-solid fa-check-circle text-blue-400 mr-2"></i>
                技术优势
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                  <span>超短脉冲技术，实现绕组微变形的高精度检测</span>
                </li>
                <li className="flex items-start">
                  <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                  <span>非侵入式设计，无需改变设备结构，安全性高</span>
                </li>
                <li className="flex items-start">
                  <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                  <span>AI智能诊断，99.01%诊断精度，远超行业水平</span>
                </li>
                <li className="flex items-start">
                  <i class="fa-solid fa-angle-right text-blue-400 mt-1 mr-2"></i>
                  <span>5G网络通讯，支持远程监控与报警</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80">
               <img 
                 src="https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/3b689c5b65d01f37a1c1078eca22ec85_20250815164503.png" 
                alt="技术参数可视化展示" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}