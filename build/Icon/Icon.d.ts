interface IconProps {
    icon: string | undefined;
    size?: number;
}
declare const Icon: ({ icon, ...rest }: IconProps) => JSX.Element;
export default Icon;
