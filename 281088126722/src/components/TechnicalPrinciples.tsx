import { motion } from 'framer-motion';

// 技术原理数据
const technicalPrinciples = [
  {
    id: 1,
    title: '基于LC谐振网络与串并联二极管开关模块的高压超短脉冲发生器结构',
    description: '提出采用LC谐振网络提高脉冲幅值，同时利用快速恢复二极管串并联模块作为固态开关的非常规用法，形成超短脉冲。输出脉冲幅值最高可达4.3 kV，脉宽最小仅为1 ns，重复频率为10 kHz，对绕组微变形具有优异的感知能力。',
    imagePrompt: 'Electronic circuit diagram showing LC resonance network and diode switch module'
  },
  {
    id: 2,
    title: '非侵入式耦合注入与响应数据高速采集系统',
    description: '本装置将信号通过耦合电容非侵入注入，并从电力线圈类设备自身配备的互感器中采集响应信号，不额外增加电力线圈类设备内部的装置、不改变其结构；信息高速采集装置每个通道的采样速率为40 kHz，同时采样的时延不超过1 μs。',
    imagePrompt: 'Non-invasive coupling injection system for power equipment monitoring'
  },
  {
    id: 3,
    title: '基于数据驱动的绕组变形智能诊断模型',
    description: '提出了将连续小波变换（CWT）与人工智能技术相结合。通过CWT提取响应信号时频特征，增强了故障细节的辨识度。在此基础上，利用卷积神经网络（CNN）和双向长短时记忆网络（BiLSTM）的级联架构，自动提取信号特征并进行故障分类，从而实现绕组状态的智能诊断。',
    imagePrompt: 'AI neural network model for power equipment fault diagnosis'
  }
];

export default function TechnicalPrinciples() {
  return (
    <section id="principles" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心技术原理</h2>
          <p className="text-lg text-gray-600">
            针对现有电力线圈类设备检测方法存在的感知不灵敏、采集不安全、诊断不精准等问题，我们提出了三大技术创新方案
          </p>
        </div>
        
        <div className="space-y-20">
          {technicalPrinciples.map((principle, index) => (
             <div key={principle.id} className="grid grid-cols-1 gap-10 items-center">
                <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-none"
              >
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
                  技术创新点 {principle.id}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{principle.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>了解更多技术细节</span>
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </div>
              </motion.div>
              

            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <i class="fa-solid fa-lightbulb text-yellow-500 text-2xl"></i>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">技术突破价值</h3>
              <p className="text-gray-700">
                基于上述技术，本装置实现了电力线圈类设备绕组变形智能在线监测，最小识别1%的绕组变形量、诊断精度达99.01%，可促进数字电网、智能电网建设，助力国家能源安全新战略。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}