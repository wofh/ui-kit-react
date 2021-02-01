import styled, {css} from 'styled-components';
import { color } from '../../shared/styles';

export const StyledInput = styled.input`
width: calc(100% - 10px);
margin: 5px;
height:32px;
display:block;
border:none;
box-shadow: 0 0 0 1px ${color.medium};
border-radius:8px;
text-indent:12px;
${(props) =>
   props.type == 'text' &&
   css`
   &:focus {
      box-shadow: 0px 0px 5px ${color.primary};
   }
   `}
${(props) =>
   props.error && 
   css`
   color: ${color.danger};
   box-shadow: 0 0 5px ${color.danger};
   &::-webkit-input-placeholder {
      color: ${color.danger};
   };
   `}
   ${(props) =>
   props.success &&
   css`
   color: ${color.success};
   box-shadow: 0 0 5px ${color.success};
   &::-webkit-input-placeholder {
      color: ${color.success};
   };
   `}
`;


export const StyledInputBox = styled.div`
   width:25%;
   float: left;
   padding:5px;
`;