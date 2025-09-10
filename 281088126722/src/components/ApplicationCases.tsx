import { motion } from 'framer-motion';

  // 应用案例数据
  const applicationCases = [
    {
      id: 1,
      title: '重庆长寿110kV变电站',
      description: '在变电站环境中对变压器绕组状态进行长期在线监测，有效提高了设备状态评估的准确性和及时性。',
      imageUrl: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/图片1_20250815161017.png',
      result: '成功监测到3起潜在绕组微变形故障，避免了可能的停电事故'
    },
    {
      id: 2,
      title: '工业企业配电系统',
      description: '为大型工业企业的关键配电设备提供绕组健康监测解决方案。',
      imageUrl: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/图片2_20250815161043.png',
      result: '减少设备故障率40%，延长设备平均无故障运行时间60%'
    }
  ];

  // 合作企业数据
   const 合作Enterprises = [
    { id: 1, name: '国家电网', logoUrl: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/R-C_20250815165259.jpg' },
    { id: 2, name: '南方电网', logoUrl: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/logo800_16491629154945920_20250815165428.png' },
    { id: 3, name: '小目科技', logoUrl: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/dea9e283-fd20-4eb4-8db9-2e9439f51cdd_20250815161202.jpg' },
    { id: 4, name: '菁能科技', logoUrl: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/微信图片_2025-08-15_161613_520_20250815161713.png' }
  ];

export default function ApplicationCases() {
  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">应用案例</h2>
          <p className="text-lg text-gray-600">
            本装置已在多个变电站、水电站等开展工程应用测试，有效提高了变压器、同步电机绕组状态监测智能化和数字化程度
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applicationCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
               <img 
                  src={caseItem.imageUrl} 
                  alt={caseItem.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{caseItem.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{caseItem.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start">
                    <i class="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-sm text-gray-700">{caseItem.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">合作企业</h3>
            <p className="text-gray-600 mt-2">已与多家行业领先企业达成初步合作意向</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {合作Enterprises.map((enterprise) => (
              <div key={enterprise.id} className="bg-white p-6 rounded-xl shadow-md w-full flex items-center justify-center h-24">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                   <img 
                      src={enterprise.logoUrl} 
                      alt={enterprise.name} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h4 className="text-gray-900 font-medium">{enterprise.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}