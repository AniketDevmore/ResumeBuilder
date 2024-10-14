import { Button } from "react-native-paper";

interface SaveButtonProps {
    onPress: () => void
}

const AddButton: React.FC<SaveButtonProps> = ({ onPress }) => {
    return (
        <Button style={{ width: 100 }} mode="contained" onPress={onPress}>
            Add
        </Button>
    )
}

export default AddButton;