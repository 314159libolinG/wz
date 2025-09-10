import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Abstract%20technology%20background%20with%20circuit%20patterns%20and%20digital%20elements&sign=9c567c2b85c5ff2672e0b7b8056238ae')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              电力线圈类设备<br />
               <span className="text-blue-400">绕组健康状态监测装置MZ-2</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              采用先进的高压超短脉冲技术与人工智能诊断算法，实现电力线圈类设备绕组健康状态的精准监测与智能诊断，保障电力系统安全稳定运行。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#specs" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                查看技术参数
              </a>
              <a href="#cases" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition duration-300 border border-gray-600">
                应用案例
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <img 
                 src="https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/微信图片_2025-08-15_184921_093_20250815184942.png" 
                alt="电力线圈类设备绕组健康状态智能监测装置" 
                className="w-full h-auto object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-3">
                    智能监测 · 精准诊断
                  </div>
                  <h3 className="text-xl font-bold text-white">电力线圈类设备绕组健康状态智能监测装置</h3>
                </div>
              </div>
            </div>
            
            {/* 装饰性元素 */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* 波浪分隔符 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}