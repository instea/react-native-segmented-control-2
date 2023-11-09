import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
export type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
interface SegmentedControlProps {
    tabs: any[];
    width?: number;
    initialIndex?: number;
    activeTextColor?: string;
    activeTabColor?: string;
    extraSpacing?: number;
    style?: CustomStyleProp;
    tabStyle?: CustomStyleProp;
    textStyle?: CustomTextStyleProp;
    selectedTabStyle?: CustomStyleProp;
    onChange: (index: number) => void;
    value?: number;
}
declare const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;
