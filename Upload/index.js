import styled from '@emotion/styled'
import {useRef,useState} from 'react'

const UploadContainer = styled.div`
    display : inline-block;
    cursor: pointer
`;

const Input = styled.input`
    display:none;
`;

const Upload =({
    children,
    droppable,
    name,
    accpet,
    value,
    onChange,
    ...props
}) => {
    const [file,setFile] = useState(value);
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef(null);

    const handleFileChange = (e) =>{
        const files = e.target.files
        const changedFile = files[0];
        setFile = (changedFile)
        onChange && onChange(changedFile);
    }
    const handleChooseFile = () =>{
        inputRef.current.click();
    }
    const handleDragEnter = (e) =>{
        if(!droppable) return;

        e.preventDefault ();
        e.stopPropagation();

        if(e.dataTransfer.items && e.dataTransfer.items.length>0){
            setDragging(true);
        }
    }
    const handleDragLeave = (e)=>{
        if(!droppable) return;

        e.preventDefault();
        e.stopPropagation();

        setDragging(false)
    }
    const handleDragOver = (e) =>{
        if(!droppable) return;
        e.preventDefault();
        e.stopPropagation();
    }
    const handleFileDrop =(e)=>{
        if(!droppable) return;

        e.preventDefault();
        e.stopPropagation();

        const files=e.dataTransfer.files;
        const changedFile=files[0]
        setFile(changedFile);
        onChange && onChange(changedFile)
        setDragging(false)
    }
    return (
        <UploadContainer
            onclick = {handleChooseFile}
            onDrop = {handleFileDrop}
            onDragEnter = {handleDragEnter}
            onDragLeave = {handleDragLeave}
            onDragOver = {handleDragOver}
            {...props}
        >
            <Input
                ref ={inputRef}
                type='file'
                name = {name}
                accept = {accept}
                onChange = {handleFileChange}
            />
            {typeof children === 'function' ? children(file,dragging): children}
        </UploadContainer>
    );
};

export default Upload