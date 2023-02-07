import { useEffect, useState } from "react";


/***--- 获取屏幕宽度 ---**/
export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // console.log(window)
    // console.log('useEffect 执行次数')

    // 监听会一直触发useEffect钩子函数
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return screenWidth;
};

export default useScreenWidth;
