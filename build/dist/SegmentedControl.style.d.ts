import { ViewStyle } from "react-native";
import { CustomStyleProp } from "./SegmentedControl";
export declare const _containerStyle: (width?: number) => ViewStyle;
export declare const _selectedTabStyle: (tabs: any[], activeTabColor: string, translateXAnimation: any, width?: number) => CustomStyleProp;
declare const _default: {
    tab: {
        flex: number;
        paddingVertical: number;
        alignItems: "center";
        justifyContent: "center";
    };
    textStyle: {
        fontSize: number;
        textAlign: "center";
        fontWeight: "500";
    };
};
export default _default;
