import React from "react";
import { Watermark } from "antd";
import { RootState, useSelector } from "@/redux";
import LazyComponent from "@/components/Lazy";
import ThemeDrawer from "@/layouts/components/ThemeDrawer";

// todo
// todo 懒加载
const LayoutIndex: React.FC = () => {
  const layout = useSelector((state: RootState) => state.global.layout);
  const watermark = useSelector((state: RootState) => state.global.watermark);
  console.log("懒加载");
  const LayoutComponents = {
    vertical: React.lazy(() => import("./LayoutVertical")),
    classic: React.lazy(() => import("./LayoutClassic")),
    transverse: React.lazy(() => import("./LayoutTransverse")),
    columns: React.lazy(() => import("./LayoutColumns"))
  };

  return (
    <Watermark className="watermark-content" zIndex={1001} content={watermark ? ["Hooks Admin", "Happy Working"] : []}>
      {LazyComponent(LayoutComponents[layout])}
      <ThemeDrawer />
    </Watermark>
  );
};

export default LayoutIndex;
