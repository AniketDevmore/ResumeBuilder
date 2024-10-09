import { Button } from "react-native-paper";

interface SaveButtonProps {
    onPress: () => void
}

const SaveButton: React.FC<SaveButtonProps> = ({ onPress }) => {
    return (
        <Button style={{ width: 100 }} mode="contained" onPress={onPress}>
            Save
        </Button>
    )
}

export default SaveButton;