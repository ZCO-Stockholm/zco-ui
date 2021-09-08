declare type Justify = 'space-between' | 'space-around' | 'space-evenly';
declare type Align = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
interface SpacerProps {
    spaceHorizontal?: number;
    spaceVertical?: number;
    alignItems?: Align;
    justifyContent?: Justify;
}
export declare const Spacer: import("styled-components").StyledComponent<"div", any, SpacerProps, never>;
export {};
