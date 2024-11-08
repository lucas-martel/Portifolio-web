import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

const StyledSelectHability = styled(Select)({
  '& .MuiSelect-icon': {
    color: 'white', // Mude a cor da seta
    fontSize: '2rem', // Ajuste o tamanho da seta
  },
});

export default StyledSelectHability;
