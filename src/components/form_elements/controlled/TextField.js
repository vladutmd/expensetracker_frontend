import TextField from '@material-ui/core/TextField';


const TextFieldWithLabel = ({ id, label, variant, value, onChange, children }) => {
	return (
		<div>
			<label htmlFor={id}>{children}</label>
            &nbsp;
			<TextField
				id={id}
				label={label}
				value={value}
				variant={variant}
				onChange={onChange}
			/>
		</div>
	)
}


export default TextFieldWithLabel;
