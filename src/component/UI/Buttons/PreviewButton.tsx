import { Button } from "react-native-paper";

interface PreviewButtonProps {
    onPress: () => void
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ onPress }) => {
    return (
        <Button style={{ width: 100 }} mode="contained" onPress={onPress}>
            Preview
        </Button>
    )
}

export default PreviewButton;