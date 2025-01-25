import { ComponentType, PropsWithChildren } from "react";

const withFormatting = (formattingDate: (date: string) => string, nameDateProp: string) => {
    return (Component: ComponentType<PropsWithChildren<DateTimeProps>>) => {
        const DateTimePretty = (props: {date: string}) => {
            return (
                <Component
                    {...props}
                    {...{
                        [nameDateProp]: formattingDate(props.date),
                    }}
                />
            );
        };

        return DateTimePretty;
    };
};

export default withFormatting;