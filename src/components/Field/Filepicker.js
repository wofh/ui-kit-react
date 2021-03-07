import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import styled, { css } from 'styled-components';
import Dropzone from 'react-dropzone';
import { color, spacing, typography } from '../../shared/styles';

const isFileImage = (file) => {
   return file && file.type.split('/')[0] === 'image';
};

const StyledFilePreviewImage = styled.div`
   position: relative;
   width: 80px;
   height: 80px;
   border-radius: ${spacing.borderRadius.default}px;
   background-size: cover;
   background-position: center;
   background-color: ${color.lighter};

   ${(props) =>
      props.file &&
      isFileImage(props.file) &&
      css`
         background-image: url(${URL.createObjectURL(props.file)});
      `}
`;

const StyledFilePreviewLabel = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   text-transform: uppercase;
   font-weight: 600;
`;

const StyledFilePreview = styled.div`
   position: relative;
   display: inline-flex;
   line-height: 0;
   margin-bottom: ${spacing.margin.small}px;
   margin-right: ${spacing.margin.small}px;
   transition: all 0.3s;

   ${({ completed }) =>
      completed &&
      css`
         opacity: 1;
      `}

   ${({ accepted }) =>
      accepted &&
      css`
         opacity: 0.5;

         &:hover {
            opacity: 1;
         }
      `}

   ${({ rejected }) =>
      rejected &&
      css`
         ${StyledFilePreviewLabel} {
            color: #fff;
         }

         ${StyledFilePreviewImage} {
            opacity: 0.75;
            background-color: ${color.danger};
         }
      `}
`;

const StyledFilePreviews = styled.div`
   display: block;
`;

const FilePreview = ({ file, ...props }) => {
   const getFileLabel = () => {
      if (isFileImage(file)) {
         return null;
      }

      return file.name.split('.').pop();
   };

   return (
      <StyledFilePreview {...props}>
         <StyledFilePreviewImage file={file} />
         <StyledFilePreviewLabel>{getFileLabel()}</StyledFilePreviewLabel>
      </StyledFilePreview>
   );
};

const StyledFileInput = styled.input``;

const StyledIcon = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   svg {
      width: 64px;
      height: 64px;
      color: ${color.medium};
   }
`;

const StyledDropzone = styled.div`
   position: relative;
   display: block;
   height: 20vw;
   border-radius: ${spacing.borderRadius.default}px;
   background-color: ${color.light};
   outline: none;
   padding: 10px 20px;
   overflow: auto;
   cursor: pointer;

   ${(props) =>
      !props.error &&
      !props.success &&
      css`
         &:focus {
            box-shadow: inset 0 0 0 1px ${color.primary};
         }

         &:hover {
            ${StyledIcon} {
               svg {
                  color: ${color.mediumdark};
               }
            }
         }
      `}

   ${(props) =>
      props.error &&
      css`
         color: ${color.danger};
         box-shadow: inset 0 0 0 1px ${color.danger};

         &::-webkit-input-placeholder {
            color: ${color.danger};
         }
      `}

   ${(props) =>
      props.success &&
      css`
         color: ${color.success};
         box-shadow: inset 0 0 0 1px ${color.success};
         &::-webkit-input-placeholder {
            color: ${color.success};
         }
      `}

   ${(props) =>
      props.dragOver &&
      css`
         background-color: ${color.lighter};
         box-shadow: inset 0 0 0 1px ${color.primary};
      `}
`;

const StyledFilePicker = styled.div`
   // position: absolute;
   // z-index: 100;
   // padding: 0;
   // margin: 0;
   // margin-top: ${spacing.padding.xsmall}px;
   // background-color: #fff;
   // overflow: auto;
   // border-radius: ${spacing.borderRadius.default}px;
   // border: 1px solid ${color.medium};
`;

export const Filepicker = ({
   accept,
   multiple,
   onChange,
   onFocus,
   onBlur,
   onUpload,
   onError,
   ...props
}) => {
   // const ref = useRef(null);
   // const defaultValue = props.value || props.defaultValue || null;
   const [completedFiles, setCompletedFiles] = useState([]);
   const [acceptedFiles, setAcceptedFiles] = useState([]);
   const [rejectedFiles, setRejectedFiles] = useState([]);

   // const [uploadCompleted, setUploadCompleted] = useState(false);
   // const [uploadErrored, setUploadErrored] = useState(false);
   // const [uploadPercent, setUploadPercent] = useState(false);
   const [dragOver, setDragOver] = useState(false);

   useEffect(() => {
      // console.log('completedFiles', completedFiles.length)
      // console.log('acceptedFiles', acceptedFiles.length)

      if (acceptedFiles && acceptedFiles.length > 0) {
         handleUpload(acceptedFiles[0]);
      }
   }, [acceptedFiles]);

   const handleUploadCompletion = (response, file) => {
      // "file" is equal to the first element of "acceptedFiles"

      // Add the completed accepted file to the completed files
      const completed = [...completedFiles];
      completed.push(file);
      setCompletedFiles(completed);

      // Remove completed file from the accepted files
      const accepted = [...acceptedFiles];
      accepted.shift();
      setAcceptedFiles(acceptedFiles.length > 1 ? accepted : []);

      onChange(file);
   };

   const handleUploadError = (error, file) => {
      // setUploadErrored(true)
      onError(error, file);
   };

   const handleUploadProgress = (progress) => {
      // console.log(progress)
   };

   const handleUpload = (file) => {
      onUpload(file, handleUploadProgress)
         .then((res) => handleUploadCompletion(res, file))
         .catch((err) => handleUploadError(err, file));
   };

   const handleDrop = (accepted, rejected) => {
      setDragOver(false);

      if (accepted.length > 0) {
         setAcceptedFiles([...accepted]);
      }

      if (rejected.length > 0) {
         setRejectedFiles([...rejected]);
      }
   };

   const renderFilePreviews = () => {
      return (
         <StyledFilePreviews>
            {completedFiles.map((file, key) => (
               <FilePreview key={`accepted_${key}`} file={file} completed />
            ))}
            {acceptedFiles.map((file, key) => (
               <FilePreview key={`accepted_${key}`} file={file} accepted />
            ))}
            {rejectedFiles.map((reject, key) => (
               <FilePreview key={`accepted_${key}`} file={reject.file} rejected />
            ))}
         </StyledFilePreviews>
      );
   };

   const renderDropdown = ({ getRootProps, getInputProps }) => {
      return (
         <StyledDropzone {...getRootProps()} dragOver={dragOver}>
            <StyledFileInput {...getInputProps()} />
            <StyledIcon>
               <Icon icon={'Add'} />
            </StyledIcon>
            {/* {completedFiles.map((file, key) => (
               <div key={`completed_${key}`}>{file.name} Completed</div>)
            )}
            {acceptedFiles.map((file, key) => (
               <div key={`accepted_${key}`}>{file.name} Accepted</div>)
            )}
            {rejectedFiles.map((rejected, key) => (
               <div key={`rejected_${key}`}>{rejected.file.name} Rejected</div>)
            )} */}
         </StyledDropzone>
      );
   };

   return (
      <StyledFilePicker>
         {renderFilePreviews()}
         <Dropzone
            accept={accept}
            multiple={multiple}
            onDrop={handleDrop}
            onDragEnter={() => setDragOver(true)}
            onDragLeave={() => setDragOver(false)}
            onDragOver={() => setDragOver(true)}
         >
            {renderDropdown}
         </Dropzone>
      </StyledFilePicker>
   );
};

Filepicker.propTypes = {
   accept: PropTypes.string,
   multiple: PropTypes.bool,
   onChange: PropTypes.func,
   onFocus: PropTypes.func,
   onBlur: PropTypes.func,
   onUpload: PropTypes.func,
   onError: PropTypes.func,
};

Filepicker.defaultProps = {
   accept: 'image/jpeg, image/png',
   multiple: true,
   onChange: () => {},
   onFocus: () => {},
   onBlur: () => {},
   onUpload: () => new Promise((resolve) => resolve()),
   onError: () => new Promise((r, reject) => reject()),
};
