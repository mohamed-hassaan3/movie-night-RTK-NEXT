export { }

declare global {
    interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
        children: React.ReactNode,
        className: string,
    }
    interface ErrorResponse {
        message: string
    }
    interface RejectWithValue {
        rejectWithValue: Function
    }
    type ApiPath = string
    interface PrimaryButton {
        text: string
        className?: string;
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        disabled?: boolean;
        value?: string;
        type?: "submit" | "button" | "reset";
    }
    interface CategoryButton {
        children: React.ReactNode
        className?: string;
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        disabled?: boolean;
        value?: string;
        type?: "submit" | "button" | "reset";
    }
}