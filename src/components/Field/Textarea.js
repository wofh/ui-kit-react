import styled, {css} from 'styled-components';
import { color } from '../../shared/styles';

export const StyledTextarea = styled.textarea`
   width: calc(100% - 10px);
   margin: 5px;
   display:block;
   border-radius: 8px;
   resize: none;
   text-indent: 12px;
   border:none;
   box-shadow: 0 0 0 1px ${color.medium};
   padding-top: 5px;
   &:focus{
      box-shadow: 0 0 5px ${color.primary};
   }
`;