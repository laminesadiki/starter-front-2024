import { Button as MuiButton } from '@mui/material';
import { CustomButtonProps } from './buttons';
import { getStyleByType } from './buttons';

export default function CustomButton(props: CustomButtonProps) {
   const { btnType, children, ...rest } = props;

   const btnStyle = {
      textTransform: 'none',
      fontSize: '1rem',
      boxShadow: 'none',
      ...getStyleByType(btnType),
   };

   return (
      <MuiButton variant="contained" disableRipple sx={btnStyle} {...rest}>
         {children}
      </MuiButton>
   );
}
