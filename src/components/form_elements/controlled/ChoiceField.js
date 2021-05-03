import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const SelectWithOptions = ({ id, label, selectid, value, onChange, options }) => {
    return (
        <div>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={selectid}
                value={value}
                onChange={onChange}
            >
            {options.map((option) => <MenuItem value={option.value}>{option.name}</MenuItem>)}
            </Select>

        </div>
    )
}

export default SelectWithOptions;

