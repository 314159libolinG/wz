import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
          <img 
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/微信图片_2025-08-15_160238_832_20250815160726.png" 
            alt="脉诊科技logo" 
            className="h-10 w-auto"
          />
           <span className="ml-2 text-xl font-semibold text-white">脉诊智辩（重庆）电气设备修理有限责任公司</span>
            </div>
            <p className="mb-6">
              专注于电力线圈类设备绕组健康状态监测技术的研发与应用，为电力系统安全稳定运行提供保障。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i class="fa-brands fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">产品中心</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-white transition-colors">绕组健康状态检测装置</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">智能诊断系统</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">数据采集终端</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">监测软件平台</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">关于我们</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-white transition-colors">公司简介</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">技术团队</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">新闻动态</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">联系方式</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i class="fa-solid fa-map-marker mt-1 mr-3 text-blue-500"></i>
                <span>重庆市沙坪坝区大学城东路重庆电子科技职业大学众创空间2-042</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-phone mr-3 text-blue-500"></i>
                <span>18881830448</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-envelope mr-3 text-blue-500"></i>
          <span>2740348416@qq.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center">
           <p>© {new Date().getFullYear()} 脉诊智辩（重庆）电气设备修理有限责任公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}