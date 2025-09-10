import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: '产品中心', path: '/' },
  { label: '技术参数', path: '#specs' },
  { label: '技术原理', path: '#principles' },
  { label: '应用案例', path: '#cases' },
  { label: '关于我们', path: '/about' },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/281088126722/attachment/微信图片_2025-08-15_160238_832_20250815160726.png" 
                  alt="脉诊科技logo" 
                  className="h-10 w-auto"
                />
                  <span className="ml-2 text-xl font-semibold text-gray-900">脉诊智辩（重庆）电气设备修理有限责任公司</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                  item.path === '/' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">打开主菜单</span>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}