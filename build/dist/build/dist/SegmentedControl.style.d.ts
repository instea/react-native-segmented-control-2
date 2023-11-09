export function _containerStyle(width: any): {
    width: any;
    display: string;
    flexDirection: string;
    alignItems: string;
    borderRadius: number;
    backgroundColor: string;
};
export function _selectedTabStyle(tabs: any, activeTabColor: any, translateXAnimation: any, width: any): {
    borderRadius: number;
    marginVertical: number;
    marginHorizontal: number;
    width: number;
    backgroundColor: any;
    shadowColor: string;
    shadowOpacity: number;
    shadowRadius: number;
    shadowOffset: {
        width: number;
        height: number;
    };
    elevation: number;
    transform: {
        translateX: any;
    }[];
    position: "absolute";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}[];
declare namespace _default {
    namespace tab {
        const flex: number;
        const paddingVertical: number;
        const alignItems: "center";
        const justifyContent: "center";
    }
    namespace textStyle {
        const fontSize: number;
        const textAlign: "center";
        const fontWeight: "500";
    }
}
export default _default;
