import { Button } from '@mui/material';
import easterBreaker from 'easter-break';


const EasterBreaker = () => {
    return (
        <Button
            variant='contained'
            onClick={easterBreaker}
        >
            Break Me
        </Button>
    );
}


export default EasterBreaker;
