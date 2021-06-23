type ButtonProps = {
	placeholder: string;
};

function Button({ placeholder }: ButtonProps) {
	return <button>{placeholder}</button>;
}

export default Button;
