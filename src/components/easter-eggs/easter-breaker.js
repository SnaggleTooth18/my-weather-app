import { Button } from '@mui/material';
import easterBreaker from 'easter-break';


const EasterBreaker = () => {
    return (
        <Button
            variant='contained'
            sx={{ bgcolor: "#330e62", ":hover": { bgcolor: "#4a148f" } }}
            onClick={easterBreaker}
        >
            Break Me
        </Button>
    );
}


export default EasterBreaker;
