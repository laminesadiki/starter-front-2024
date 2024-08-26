import { MiddleBoxProps } from '@shared/interfaces/middleBox.interface';
import './MiddleBox.scss';

function MiddleBox(props: MiddleBoxProps) {
   const { title, description, children, ...rest } = props;
   return (
      <div className="middle_box" {...rest}>
         <div className="middle_box__header">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="horizental-line"></div>
         </div>
         {children}
      </div>
   );
}

export default MiddleBox;
